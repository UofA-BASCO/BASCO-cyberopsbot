const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config')
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

const prefix = config.prefix

bot.login(config.token)

const pingPong = require('./src/cmds/pingPong')
const addRole = require('./src/cmds/addRole')
const removeRole = require('./src/cmds/removeRole')
const lolCommands = require('./src/cmds/lolCommands')
/* Welcome and Leave
bot.on('guildMemberAdd', member => {
  const auditLog = require('../utils/auditLog')
  const channelName = 'general'
  const channel = member.guild.channels.cache.find(channel => channel.name === `${channelName}`)

  if (!channel) {
    auditLog('No welcome channel found', Discord.Message)
    return
  }

  channel.send(`Welcome ${member} to the server. Please read #rules and have fun!`)
  auditLog(`${member} has been welcomed to the server`)
})

bot.on('guildMemberRemove', member => {
  const auditLog = require('../utils/auditLog')
  const channelName = 'general'
  const channel = member.guild.channels.cache.find(channel => channel.name === `${channelName}`)

  if (!channel) {
    auditLog('No welcome channel found', Discord.Message)
    return
  }

  channel.send(`${member} has just left the server. Bye bye.`)
  auditLog(`${member} has left the server`)
})
*/
bot.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return

  const username = msg.author.username
  const command = msg.content.split(' ')[0].slice(config.prefix.length)
  const args = msg.content.split(' ').slice(1)

  const commands = {
    ping: () => pingPong(command, username, msg),
    addrole: () => addRole(msg, args, username),
    role: () => msg.reply("if you are trying to add a role, use '!addrole' with the class code behind it, e.g. '!addrole CYBV 301'. If the role for your class doesn't exist, use the command '!requestrole' using the same syntax as '!addrole'."),
    requestrole: () => {
      if (!args[0]) return msg.reply('please add the role name.')
      const hq = bot.channels.cache.get('751200493467992206')
      hq.send(`${msg.author.username} is requesting role ${args[0]}`)
      msg.channel.send('Thank you for your request, a mod will get back to you as soon as possible.')
    },
    removerole: () => removeRole(args, msg, username),
    help: () => msg.channel.send('List of common useful commands:\n!help\n!ping\n!roles\n!role\n!addrole\n!removerole\n!requestrole\n'),
    'args-info': () => {
      if (!args.length) {
        return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`)
      }
      msg.channel.send(`Command name: ${command}\nArguments: ${args}`)
    },
    lol: () => lolCommands(command, username, msg)
  }

  const aliases = {
    pong: commands.ping,
    roles: commands.role,

    tableflip: commands.lol,
    unflip: commands.lol,
    shrug: commands.lol,
    disapprove: commands.lol,
    lenny: commands.lol,
    cute: commands.lol,
    idk: commands.lol,
    awkward: commands.lol,
    flex: commands.lol,
    eat: commands.lol,
    food: commands.lol,
    sleep: commands.lol,
    run: commands.lol,
    loveyou: commands.lol
  }

  const cmd = {
    ...commands,
    ...aliases
  }

  if (command in cmd) {
    return cmd[command]()
  } else {
    return msg.reply(`Unknown command: ${command}`)
  }
})
