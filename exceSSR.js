const { execSync } = require('child_process')
const { ssrPath } =  require('./conf')
module.exports = function execSSR (ssrServer, localPort = 1080) {
  let execString  = `python ${ssrPath}local.py -s ${ssrServer.server} -p ${ssrServer.server_port} -l ${localPort} -k ${ssrServer.password} -m ${ssrServer.method} -o ${ssrServer.obfs} -O ${ssrServer.protocol} -d start`
  execSync(execString)
}
