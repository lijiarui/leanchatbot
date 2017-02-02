const AV = require('leanengine')
const { Wechaty } = require('wechaty')

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
})

process.on('uncaughtException', err => {
  console.error('Caught exception:', err.stack)
})

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason.stack)
})

Wechaty.instance()
  .on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
  .on('login', user => console.log(`User ${user} logined`))
  .on('message', message => console.log(`Message: ${message}`))
  .init()
