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

bot.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return

  let username = msg.author.username
  let command = msg.content.split(' ')[0].slice(config.prefix.length)
  let args = msg.content.split(' ').slice(1)

  if (command === 'ping' || command === 'pong') {
    pingPong(command, username, msg)
  }

  // Add Role Command
  if (command === 'addrole') {
    addRole(msg, args, username)
  }

  // Roles Command
  if (command === 'roles' || command === 'role') {
    msg.reply("if you are trying to add a role, use '!addrole' with the class code behind it, e.g. '!addrole CYBV 301'. If the role for your class doesn't exist, use the command '!requestrole' using the same syntax as '!addrole'.")
  }

  // Request Role Command
  if (command === 'requestrole') {
    if (!args[0]) return msg.reply('please add the role name.')
    msg.channel.send(`Yo, <@&${748982824660369428}>, you gotta add`)
  }

  // Remove Role Command
  if (command === 'removerole') {

  }

  // Help Command
  if (command === 'help') {
    msg.channel.send(`List of common useful commands:\n!help\n!ping\n!roles\n!role\n!addrole\n!removerole\n!requestrole\n`)
  }

  // Args-Info Command
  if (command === 'args-info') {
    if (!args.length) {
      return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`)
    }

    msg.channel.send(`Command name: ${command}\nArguments: ${args}`)
  }
})

module.exports = bot
