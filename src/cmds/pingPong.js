function ping (user) {
  console.log(`Recieved a ping from ${user}...`)
  return 'pong.'
}

function pong (user) {
  console.log(`Recieved a pong from ${user}...`)
  return "that's not how it works, silly human. You ping, then I pong."
}

function pingPong (cmd, user, msg) {
  console.log(cmd)
  if (cmd === 'ping') {
    msg.reply(ping(user)).then(console.log('So I ponged.'))
  } else if (cmd === 'pong') {
    msg.reply(pong(user)).then(console.log('Humans are so dumb.'))
  }
}

module.exports = pingPong
