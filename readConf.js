const fs = require('fs')
const confPath = '/home/feng/Desktop/gui-config.json'
const confObj = require(confPath)
console.log('address list')
confObj.configs.forEach(function(element, index) {
  console.log(`${index} - ${element.remarks} - ${element.server}`)
}, this)
module.exports = confObj