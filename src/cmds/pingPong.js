const auditLog = require('../utils/auditLog')

function ping (user, msg) {
  auditLog(`Recieved a ping from ${user}...`, msg)
  return 'pong.'
}

function pong (user, msg) {
  auditLog(`Recieved a pong from ${user}...`, msg)
  return "that's not how it works, silly human. You ping, then I pong."
}

function pingPong (cmd, user, msg) {
  if (cmd === 'ping') {
    msg.reply(ping(user, msg)).then(auditLog('So I ponged.', msg))
  } else if (cmd === 'pong') {
    msg.reply(pong(user, msg)).then(auditLog('Humans are so dumb.', msg))
  }
}

module.exports = pingPong
