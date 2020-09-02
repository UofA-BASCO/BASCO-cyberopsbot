const auditLog = require('../utils/auditLog')

function removeRole (args, msg, username) {
  if (!args[0]) return msg.reply('Be sure to add what role you intend to remove.')

  const roleMember = msg.member
  const query = args.join(' ')
  const mentionedRole = msg.guild.roles.cache.find(r => r.name === query)

  if (!mentionedRole) {
    msg.reply(`I'm unable to use that role: ${query}`)
      .then(auditLog(`I'm was unable to find the role ${query} for ${username}.`, msg))
  } else {
    roleMember.roles.remove(mentionedRole)
      .then(msg.reply(`successfully removed ${query} role.`))
      .then(auditLog(`I successfully removed the ${query} role from ${username}.`, msg))
  }
}

module.exports = removeRole
