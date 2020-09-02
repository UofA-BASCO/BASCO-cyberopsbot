const auditLog = require('../utils/auditLog')

function removeRole (args, msg, username) {
  let roleMember = msg.member

  if (args[0] && args[1] && args[2]) {
    var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0] + ' ' + args[1] + ' ' + args[2])
    if (!mentionedRole) {
      msg.reply(`I'm unable to find the role ${args[0]} ${args[1]} ${args[2]}.`)
        .then(auditLog(`I'm was unable to find the role ${args[0]} ${args[1]} ${args[2]} for ${username}.`, msg))
    } else {
      roleMember.roles.remove(mentionedRole)
        .then(msg.reply(`was successfully removed the ${args[0]} ${args[1]} ${args[2]} role.`))
        .then(auditLog(`I successfully removed ${username} the ${args[0]} ${args[1]} ${args[2]} role.`, msg))
    }
  } else if (args[0] && args[1] && !args[2]) {
    var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0] + ' ' + args[1])
    if (!mentionedRole) {
      msg.reply(`I'm unable to use that role: ${args[0]} ${args[1]}`)
        .then(auditLog(`I'm was unable to find the role ${args[0]} ${args[1]} for ${username}.`, msg))
      
    } else {
      roleMember.roles.remove(mentionedRole)
        .then(msg.reply(`successfully removed ${args[0]} ${args[1]} role.`))
        .then(auditLog(`I successfully removed ${username} the ${args[0]} ${args[1]} role.`, msg))
    }
  } else if (args[0] && !args[1] && !args[2]) {
    var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0])
    if (!mentionedRole) {
      msg.reply(`I'm unable to use that role: ${args[0]}`)
        .then(auditLog(`I'm was unable to find the role ${args[0]} for ${username}.`, msg))
    } else {
      roleMember.roles.remove(mentionedRole)
        .then(msg.reply(`successfully removed ${args[0]} role.`))
        .then(auditLog(`I successfully removed ${username} the ${args[0]} role.`, msg))
    }
  }
}

module.exports = removeRole
