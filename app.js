const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.json')
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

const prefix = config.prefix

bot.login(config.token)

const pingPong = require('./src/cmds/pingPong')
const addRole = require('./src/cmds/addRole')
const removeRole = require('./src/cmds/removeRole')
const lolCommands = require('./src/cmds/lolCommands')

bot.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return

  let username = msg.author.username
  let command = msg.content.split(' ')[0].slice(config.prefix.length)
  let args = msg.content.split(' ').slice(1)

  const commands = {
    'ping': () => pingPong(command, username, msg),
    'addrole': () => addRole(msg, args, username),
    'role': () => msg.reply("if you are trying to add a role, use '!addrole' with the class code behind it, e.g. '!addrole CYBV 301'. If the role for your class doesn't exist, use the command '!requestrole' using the same syntax as '!addrole'."),
    'requestrole': () => {
      if (!args[0]) return msg.reply('please add the role name.')
      msg.channel.send(`Yo, <@&${748982824660369428}>, you gotta add`)
    },
    'removerole': () => removeRole(args, msg, username),
    'help': () => msg.channel.send(`List of common useful commands:\n!help\n!ping\n!roles\n!role\n!addrole\n!removerole\n!requestrole\n`),
    'args-info': () => {
      if (!args.length) {
        return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`)
      }
      msg.channel.send(`Command name: ${command}\nArguments: ${args}`)
    },
    'lol': () => lolCommands(command, username, msg),
  }

  const aliases = {
    'pong': commands.ping,
    'roles': commands.role,

    'tableflip': commands.lol,
    'unflip': commands.lol,
    'shrug': commands.lol,
    'disapprove': commands.lol,
    'lenny': commands.lol,
    'cute': commands.lol,
    'idk': commands.lol,
    'awkward': commands.lol,
    'flex': commands.lol,
    'eat': commands.lol,
    'food': commands.lol,
    'sleep': commands.lol,
    'run': commands.lol,
  }

  const cmd = {
    ...commands,
    ...aliases
  }

  if (command in cmd) {
    return cmd[command]();
  } else {
    return msg.reply(`Unknown command: ${command}`)
  }
});
