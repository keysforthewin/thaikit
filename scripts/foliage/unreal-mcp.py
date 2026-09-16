"""Sequential bridge to the configured Unreal MCP endpoint for this workflow."""
import json, os, urllib.request, sys
URL=os.environ.get('UNREAL_MCP_URL','http://127.0.0.1:8989/mcp')
def call(toolset, tool, arguments):
    session=os.environ.get('UNREAL_MCP_SESSION_ID')
    if not session:raise RuntimeError('Set UNREAL_MCP_SESSION_ID to the current initialized MCP session')
    body={'jsonrpc':'2.0','id':1,'method':'tools/call','params':{'name':'call_tool','arguments':{'toolset_name':toolset,'tool_name':tool,'arguments':arguments}}}
    request=urllib.request.Request(URL,data=json.dumps(body).encode(),headers={'Content-Type':'application/json','Accept':'application/json, text/event-stream','Mcp-Session-Id':session})
    result=json.load(urllib.request.urlopen(request,timeout=60))
    if result.get('error') or result.get('result',{}).get('isError'): raise RuntimeError(result)
    return result['result']
if __name__=='__main__':
    result=call(sys.argv[1],sys.argv[2],json.loads(sys.argv[3]))
    if len(sys.argv)>4:
        with open(sys.argv[4],'w') as handle:json.dump(result,handle)
    else:print(json.dumps(result))
