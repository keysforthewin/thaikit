import express from 'express';

/**
 * Server-sent events, so edits made by the host-side generation skills appear
 * in an open browser tab.
 *
 * SSE over WebSocket deliberately: one-directional, EventSource reconnects for
 * free, and it needs no extra dependency.
 */
export function eventsRouter(state) {
  const router = express.Router();

  router.get('/events', (req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      // Without this, a buffering intermediary holds the stream indefinitely.
      'X-Accel-Buffering': 'no',
    });

    const send = (event, data) => {
      res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
      // compression is skipped for this route, but flush if it is ever present.
      res.flush?.();
    };

    send('hello', { etag: state.lastEtag, watching: state.watching });
    state.clients.add(send);

    // Intermediaries drop idle connections; a comment frame keeps it warm.
    const heartbeat = setInterval(() => {
      res.write(': ping\n\n');
      res.flush?.();
    }, 20_000);

    req.on('close', () => {
      clearInterval(heartbeat);
      state.clients.delete(send);
    });
  });

  return router;
}
