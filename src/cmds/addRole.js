const auditLog = require('../utils/auditLog')

function addRole (msg, args, username) {
  const roleMember = msg.member
  if (!args[0]) return 'please add the role name.'

  if (args[0] && args[1] && args[2]) {
    var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0] + ' ' + args[1] + ' ' + args[2])
    if (!mentionedRole) {
      msg.reply(`I'm unable to find the role ${args[0]} ${args[1]} ${args[2]}.`)
      auditLog(`I'm was unable to find the role ${args[0]} ${args[1]} ${args[2]} for ${username}.`, msg)
    } else {
      roleMember.roles.add(mentionedRole).then(msg.reply(`was successfully given the ${args[0]} ${args[1]} ${args[2]} role.`))
      auditLog(`I successfully gave ${username} the ${args[0]} ${args[1]} ${args[2]} role.`, msg)
    }
  } else if (args[0] && args[1] && !args[2]) {
    var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0] + ' ' + args[1])
    if (!mentionedRole) {
      msg.reply(`I'm unable to use that role: ${args[0]} ${args[1]}`)
      auditLog(`I'm was unable to find the role ${args[0]} ${args[1]} for ${username}.`, msg)
    } else {
      roleMember.roles.add(mentionedRole).then(msg.reply(`successfully given ${args[0]} ${args[1]} role.`))
      auditLog(`I successfully gave ${username} the ${args[0]} ${args[1]} role.`, msg)
    }
  } else if (args[0] && !args[1] && !args[2]) {
    var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0])
    if (!mentionedRole) {
      msg.reply(`I'm unable to use that role: ${args[0]}`)
      auditLog(`I'm was unable to find the role ${args[0]} for ${username}.`, msg)
    } else {
      roleMember.roles.add(mentionedRole).then(msg.reply(`successfully given ${args[0]} role.`))
      auditLog(`I successfully gave ${username} the ${args[0]} role.`, msg)
    }
  }
}

module.exports = addRole
