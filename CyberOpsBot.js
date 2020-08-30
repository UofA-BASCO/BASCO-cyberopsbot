// Require the discord.js module
const Discord = require('discord.js')

// Create a new Discord client
const bot = new Discord.Client()

// Requires config file
const config = require('./config.json')

// Once the bot is ready, it outputs into log
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

// Sets prefix for bot commands
const prefix = config.prefix

// Login to Discord with your app's token
bot.login(config.token)

/* Sets variables for guild, member, and nickname
const guild = bot.guilds.cache.get('747336630863528046');
const member = guild.member(message.author);
const nickname = member ? member.displayName : null;
*/

// Message based commands
bot.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return

  let command = msg.content.split(' ')[0]
  command = command.slice(config.prefix.length)

  let args = msg.content.split(' ').slice(1)

  let username = msg.author.username

  // Ping Command
  if (command === 'ping') {
    console.log(`Recieved a ping from ${username}...`)
    msg.channel.send('pong.')
    console.log('So I ponged.')
  }
  // Pong Command
  if (command === 'pong') {
    console.log(`Recieved a pong from ${username}...`)
    msg.reply("that's not how it works, silly human. You ping, then I pong.")
    console.log('Humans are so dumb.')
  }
  // Add Role Command
  if (command === 'addrole') {
    if (!args[0]) return msg.reply('please add the role name.')

    if (args[0] && args[1] && args[2]) {
      let roleMember = msg.member
      var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0] + ' ' + args[1] + ' ' + args[2])
      if (!mentionedRole) {
        msg.reply(`I'm unable to find the role ${args[0]} ${args[1]} ${args[2]}.`)
        console.log(`I'm was unable to find the role ${args[0]} ${args[1]} ${args[2]} for ${username}.`)
      } else {
        roleMember.roles.add(mentionedRole).then(msg.reply(`was successfully given the ${args[0]} ${args[1]} ${args[2]} role.`)).catch(console.error)
        console.log(`I successfully gave ${username} the ${args[0]} ${args[1]} ${args[2]} role.`)
      }
    } else if (args[0] && args[1] && !args[2]) {
      let roleMember = msg.member
      var mentionedRole = msg.guild.roles.cache.find(r => r.name == args[0] + ' ' + args[1])
      if (!mentionedRole) {
        msg.reply(`I'm unable to use that role: ${args[0]} ${args[1]}`)
        console.log(`I'm was unable to find the role ${args[0]} ${args[1]} for ${username}.`)
      } else {
        roleMember.roles.add(mentionedRole).then(msg.reply(`successfully given ${args[0]} ${args[1]} role.`)).catch(console.error)
        console.log(`I successfully gave ${username} the ${args[0]} ${args[1]} role.`)
      }
    } else if (args[0] && !args[1] && !args[2]) {
      let roleMember = msg.member
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

  // Roles Command
  if (command === 'roles' || command === 'role') {
    msg.reply("if you are trying to add a role, use '!addrole' with the class code behind it, e.g. '!addrole CYBV 301'. If the role for your class doesn't exist, use the command '!requestrole' using the same syntax as '!addrole'.")
  }

  // Request Role Command
  if (command === 'requestrole') {
    if (!args[0]) return msg.reply('please add the role name.')
    msg.channel.send(`Yo, <@& 748982824660369428>, you gotta add`)
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
