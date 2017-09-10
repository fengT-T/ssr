const { execSync } = require('child_process')
const { ssrPath } =  require('./conf')
module.exports = function (previousSSR) {
  execSync(`python ${ssrPath}local.py -s ${previousSSR.server} -d stop`)
}