import { spawn } from 'node:child_process';
import { createInterface } from 'node:readline';
import { pathToFileURL } from 'node:url';

/** Connect to the existing browser through Chrome DevTools MCP. Never launch Chrome. */
export async function connectChromeMcp() {
  const child = spawn('npx', ['--no-install', 'chrome-devtools-mcp@latest', '--browserUrl=http://127.0.0.1:9222'], { stdio: ['pipe', 'pipe', 'pipe'] });
  let sequence = 0;
  let stderr = '';
  const pending = new Map();
  child.stderr.on('data', chunk => { stderr = (stderr + chunk).slice(-4000); });
  const rejectAll = error => { for (const p of pending.values()) { clearTimeout(p.timer); p.reject(error); } pending.clear(); };
  child.on('error', rejectAll);
  child.on('exit', () => rejectAll(new Error(`Chrome MCP disconnected: ${stderr}`)));
  const lines = createInterface({ input: child.stdout });
  lines.on('line', line => {
    let message;
    try { message = JSON.parse(line); } catch { return; }
    if (message.method === 'roots/list') {
      child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: message.id, result: { roots: [{ uri: pathToFileURL(process.cwd()).href, name: 'thaikit' }] } }) + '\n');
      return;
    }
    const p = pending.get(message.id);
    if (!p) return;
    pending.delete(message.id); clearTimeout(p.timer);
    if (message.error) p.reject(new Error(message.error.message));
    else p.resolve(message.result);
  });
  const request = (method, params) => new Promise((resolve, reject) => {
    const id = ++sequence;
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`Chrome MCP timed out: ${method}`)); }, 120000);
    pending.set(id, { resolve, reject, timer });
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
  });
  const close = () => { rejectAll(new Error('MCP closed')); lines.close(); child.stdin.end(); child.kill(); };
  try {
    await request('initialize', { protocolVersion: '2024-11-05', capabilities: { roots: { listChanged: false } }, clientInfo: { name: 'thaikit-smoke', version: '1' } });
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
  } catch (error) { close(); throw error; }
  return {
    async call(name, args) {
      const result = await request('tools/call', { name, arguments: args });
      const text = (result.content ?? []).filter(c => c.type === 'text').map(c => c.text).join('\n');
      if (result.isError) throw new Error(text);
      return text;
    },
    async evaluate(pageId, fn) {
      const text = await this.call('evaluate_script', { pageId, function: fn, waitForStableDom: false });
      const json = text.match(/```json\s*([\s\S]*?)```/);
      if (!json) throw new Error(`Unexpected MCP evaluation response: ${text}`);
      return JSON.parse(json[1]);
    },
    close,
  };
}
