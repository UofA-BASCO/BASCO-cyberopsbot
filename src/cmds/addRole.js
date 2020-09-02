const auditLog = require('../utils/auditLog')

function addRole (msg, args, username) {
  if (!args[0]) return msg.reply('Please be sure to add the role.')

  let roleMember = msg.member
  let query = args.join(' ')
  let mentionedRole = msg.guild.roles.cache.find(r => r.name === query)

  if (!mentionedRole) {
    msg.reply(`I'm unable to use that role: ${query}`)
    auditLog(`I'm was unable to find the role ${query} for ${username}.`, msg)
  } else {
    roleMember.roles.add(mentionedRole).then(msg.reply(`successfully given ${query} role.`))
    auditLog(`I successfully gave ${username} the ${query} role.`, msg)
  }
}

module.exports = addRole
