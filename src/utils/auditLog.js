const config = require('../../config')

function auditLog (text, msg) {
  console.log(text)

  const channel = msg.guild.channels.cache.get(config.auditID)
  channel.send(text)
}

module.exports = auditLog
