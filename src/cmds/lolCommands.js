const auditLog = require('../utils/auditLog')

function tablefilp (user, msg) {
  auditLog(`${user} got mad and flipped the table!`, msg)
  return "(╯°□°）╯︵ ┻━┻"
}

function unflip (user, msg) {
  auditLog(`${user} calmly unflipped the table.`, msg)
  return "┬─┬ ノ( ゜-゜ノ)"
}

function shrug (user, msg) {
    auditLog(`${user} shrugged.`, msg)
    return "¯\_(ツ)_/¯"
  }

  function disapprove (user, msg) {
    auditLog(`${user} does not approve.`, msg)
    return "ಠ_ಠ"
  }

  function lenny (user, msg) {
    auditLog(`${user} is thinking dirty`, msg)
    return "( ͡° ͜ʖ ͡°)"
  }

  function cute (user, msg) {
    auditLog(`${user} needs some cuteness`, msg)
    return "(づ◕ᗜ◕)づ"
  }

  function idk (user, msg) {
    auditLog(`${user} has no idea`, msg)
    return "¯\(°_o)/¯"
  }

  function awkward (user, msg) {
    auditLog(`${user} is in an awkward position`, msg)
    return "( ་ ⍸ ་ )"
  }
  
  function flex (user, msg) {
    auditLog(`${user} is flexing`, msg)
    return "ᕦ(ò_óˇ)ᕤ"
  }

  function eat (user, msg) {
    auditLog(`${user} is eating`, msg)
    return "( ˘▽˘)っ♨"
  }

  function food (user, msg) {
    auditLog(`${user} is starving`, msg)
    return "Fooooood…ԅ(¯﹃¯ԅ)"
  }

  function sleep (user, msg) {
    auditLog(`${user} is going to sleep`, msg)
    return "zzz ˘◡˘ ᶻᶻᶻ ☽˚｡⋆ ᵍᵒᵒᵈ ⁿᶦᵍʰᵗ"
  }

  function run (user, msg) {
    auditLog(`${user} has gotta run`, msg)
    return "ε=┌(;･_･)┘"
  }
  
  
    function lolCommands (cmd, user, msg) {
  if (cmd === 'tableflip') {
    msg.send.channel(tablefilp(user, msg)).then(auditLog('(╯°□°）╯︵ ┻━┻', msg))
  } if (cmd === 'unflip') {
    msg.send.channel(unflip(user, msg)).then(auditLog('┬─┬ ノ( ゜-゜ノ)', msg))
  } if (cmd === 'shrug') {
    msg.send.channel(shrug(user, msg)).then(auditLog('¯\_(ツ)_/¯', msg))
  } if (cmd === 'disapprove') {
    msg.send.channel(disapprove(user, msg)).then(auditLog('ಠ_ಠ', msg))
  } if (cmd === 'lenny') {
    msg.send.channel(lenny(user, msg)).then(auditLog('( ͡° ͜ʖ ͡°)', msg))
  } if (cmd === 'cute') {
    msg.send.channel(cute(user, msg)).then(auditLog('(づ◕ᗜ◕)づ', msg))
  } if (cmd === 'idk') {
    msg.send.channel(idk(user, msg)).then(auditLog('¯\(°_o)/¯', msg))
  } if (cmd === 'awkward') {
    msg.send.channel(awkward(user, msg)).then(auditLog('( ་ ⍸ ་ )', msg))
  } if (cmd === 'flex') {
    msg.send.channel(flex(user, msg)).then(auditLog('ᕦ(ò_óˇ)ᕤ', msg))
  }  if (cmd === 'eat') {
    msg.send.channel(eat(user, msg)).then(auditLog('( ˘▽˘)っ♨', msg))
  }  if (cmd === 'food') {
    msg.send.channel(food(user, msg)).then(auditLog('Fooooood…ԅ(¯﹃¯ԅ)', msg))
  }  if (cmd === 'sleep') {
    msg.send.channel(sleep(user, msg)).then(auditLog('zzz ˘◡˘ ᶻᶻᶻ ☽˚｡⋆ ᵍᵒᵒᵈ ⁿᶦᵍʰᵗ', msg))
  } if (cmd === 'run') {
    msg.send.channel(run(user, msg)).then(auditLog('ε=┌(;･_･)┘', msg))
  }
}

module.exports = lolCommands
