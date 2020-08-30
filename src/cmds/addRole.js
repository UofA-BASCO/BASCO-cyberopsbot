function addRole (msg, args, username) {
  let roleMember = msg.member
  if (!args[0]) return 'please add the role name.'

  if (args[0] && args[1] && args[2]) {
    var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0] + ' ' + args[1] + ' ' + args[2])
    if (!mentionedRole) {
      msg.reply(`I'm unable to find the role ${args[0]} ${args[1]} ${args[2]}.`)
      console.log(`I'm was unable to find the role ${args[0]} ${args[1]} ${args[2]} for ${username}.`)
    } else {
      roleMember.roles.add(mentionedRole).then(msg.reply(`was successfully given the ${args[0]} ${args[1]} ${args[2]} role.`)).catch(console.error)
      console.log(`I successfully gave ${username} the ${args[0]} ${args[1]} ${args[2]} role.`)
    }
  } else if (args[0] && args[1] && !args[2]) {
    var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0] + ' ' + args[1])
    if (!mentionedRole) {
      msg.reply(`I'm unable to use that role: ${args[0]} ${args[1]}`)
      console.log(`I'm was unable to find the role ${args[0]} ${args[1]} for ${username}.`)
    } else {
      roleMember.roles.add(mentionedRole).then(msg.reply(`successfully given ${args[0]} ${args[1]} role.`)).catch(console.error)
      console.log(`I successfully gave ${username} the ${args[0]} ${args[1]} role.`)
    }
  } else if (args[0] && !args[1] && !args[2]) {
    var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0])
    if (!mentionedRole) {
      msg.reply(`I'm unable to use that role: ${args[0]}`)
      console.log(`I'm was unable to find the role ${args[0]} for ${username}.`)
    } else {
      roleMember.roles.add(mentionedRole).then(msg.reply(`successfully given ${args[0]} role.`)).catch(console.error)
      console.log(`I successfully gave ${username} the ${args[0]} role.`)
    }
  }
}

module.exports = addRole
