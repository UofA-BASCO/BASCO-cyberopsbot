function ping (user) {
  console.log(`Recieved a ping from ${user}...`)
  console.log('So I ponged.')
  return 'pong.'
}

function pong (user) {
  console.log(`Recieved a pong from ${user}...`)
  console.log('Humans are so dumb.')
  return "that's not how it works, silly human. You ping, then I pong."
}

function pingPong (cmd, user, msg) {
  console.log(cmd)
  if (cmd === 'ping') {
    msg.reply(ping(user))
  } else if (cmd === 'pong') {
    msg.reply(pong(user))
  }
}

module.exports = pingPong
