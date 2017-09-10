const conf = require('./readConf')
const localPort = conf.localPort
const exceSSR = require('./exceSSR')
const stopSSR = require('./stopSSR')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let previousSSR
rl.on('line', (index) => {
  let ssr = conf.configs[index]
  if (!ssr) {
    console.log('error server')
    return
  }
  console.log('')
  if (previousSSR) {
    stopSSR(previousSSR)
  }
  exceSSR(ssr, localPort)
  previousSSR = ssr
})

rl.on('close', () => {
  console.log(' Bye ~~')
})