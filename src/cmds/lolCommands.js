const auditLog = require('../utils/auditLog')

function tablefilp (user, msg) {
  auditLog(`${user} got mad and flipped the table!`, msg)
  return '(╯°□°）╯︵ ┻━┻'
}

function unflip (user, msg) {
  auditLog(`${user} calmly unflipped the table.`, msg)
  return '┬─┬ ノ( ゜-゜ノ)'
}

function shrug (user, msg) {
  auditLog(`${user} shrugged.`, msg)
  return '¯\\_(ツ)_/¯'
}

function disapprove (user, msg) {
  auditLog(`${user} does not approve.`, msg)
  return 'ಠ_ಠ'
}

function lenny (user, msg) {
  auditLog(`${user} is thinking dirty`, msg)
  return '( ͡° ͜ʖ ͡°)'
}

function cute (user, msg) {
  auditLog(`${user} needs some cuteness`, msg)
  return '(づ◕ᗜ◕)づ'
}

function idk (user, msg) {
  auditLog(`${user} has no idea`, msg)
  return '¯\\(°_o)/¯'
}

function awkward (user, msg) {
  auditLog(`${user} is in an awkward position`, msg)
  return '( ་ ⍸ ་ )'
}

function flex (user, msg) {
  auditLog(`${user} is flexing`, msg)
  return 'ᕦ(ò_óˇ)ᕤ'
}

function eat (user, msg) {
  auditLog(`${user} is eating`, msg)
  return '( ˘▽˘)っ♨'
}

function food (user, msg) {
  auditLog(`${user} is starving`, msg)
  return 'Fooooood…ԅ(¯﹃¯ԅ)'
}

function sleep (user, msg) {
  auditLog(`${user} is going to sleep`, msg)
  return 'zzz ˘◡˘ ᶻᶻᶻ ☽˚｡⋆ ᵍᵒᵒᵈ ⁿᶦᵍʰᵗ'
}

function run (user, msg) {
  auditLog(`${user} has gotta run`, msg)
  return 'ε=┌(;･_･)┘'
}

function lolCommands (cmd, user, msg) {
  if (cmd === 'tableflip') {
    msg.channel.send(tablefilp(user, msg)).then(auditLog('(╯°□°）╯︵ ┻━┻', msg))
  } if (cmd === 'unflip') {
    msg.channel.send(unflip(user, msg)).then(auditLog('┬─┬ ノ( ゜-゜ノ)', msg))
  } if (cmd === 'shrug') {
    msg.channel.send(shrug(user, msg)).then(auditLog('¯\\_(ツ)_/¯', msg))
  } if (cmd === 'disapprove') {
    msg.channel.send(disapprove(user, msg)).then(auditLog('ಠ_ಠ', msg))
  } if (cmd === 'lenny') {
    msg.channel.send(lenny(user, msg)).then(auditLog('( ͡° ͜ʖ ͡°)', msg))
  } if (cmd === 'cute') {
    msg.channel.send(cute(user, msg)).then(auditLog('(づ◕ᗜ◕)づ', msg))
  } if (cmd === 'idk') {
    msg.channel.send(idk(user, msg)).then(auditLog('¯\\(°_o)/¯', msg))
  } if (cmd === 'awkward') {
    msg.channel.send(awkward(user, msg)).then(auditLog('( ་ ⍸ ་ )', msg))
  } if (cmd === 'flex') {
    msg.channel.send(flex(user, msg)).then(auditLog('ᕦ(ò_óˇ)ᕤ', msg))
  } if (cmd === 'eat') {
    msg.channel.send(eat(user, msg)).then(auditLog('( ˘▽˘)っ♨', msg))
  } if (cmd === 'food') {
    msg.channel.send(food(user, msg)).then(auditLog('Fooooood…ԅ(¯﹃¯ԅ)', msg))
  } if (cmd === 'sleep') {
    msg.channel.send(sleep(user, msg)).then(auditLog('zzz ˘◡˘ ᶻᶻᶻ ☽˚｡⋆ ᵍᵒᵒᵈ ⁿᶦᵍʰᵗ', msg))
  } if (cmd === 'run') {
    msg.channel.send(run(user, msg)).then(auditLog('ε=┌(;･_･)┘', msg))
  }
}

module.exports = lolCommands
