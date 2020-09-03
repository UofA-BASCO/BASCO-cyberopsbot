const fs = require('fs')

var config = {}

try {
  const configFile = './config.json'
  if (fs.existsSync(configFile)) {
    config = require(configFile)
  } else {
    config = {
      prefix: process.env.APP_PREFIX,
      token: process.env.APP_TOKEN,
      auditID: process.env.APP_AUDIT_ID
    }
  }
} catch (err) {
  console.error(err)
}

module.exports = config
