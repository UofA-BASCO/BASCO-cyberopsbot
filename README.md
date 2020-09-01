Use https://discordjs.guide/ for detailed setup instructions<br>

Specified setup:<br>
  -Create a bot via Discord Developer Portal (https://discord.com/developers/applications)<br>
  -Navigate to the OAuth2 tab of your bot in the portal and select 'bot' under the 'Scopes' section<br>
  -Select the permisions you wish the bot to have on your server by checking them under the 'Bot Permissions' section (Administrator is recommended)<br>
  -Copy the link under the 'Scopes' section and paste it into a browser of your choosing (To ensure you don't have to re-sign into Discord, use the same browser you used to access your Developer Portal)<br>
  -Select the server you want to add the bot to (You must have 'Administrator' or 'Manage Server' permissions to add the bot to the server)<br>
  -In your application directory, create a file named config.json<br>
  -Add the following to config.json:
```
       {
          "prefix": "YOUR_COMMAND_PREFIX_HERE",
          "token": "YOUR_TOKEN_HERE"
        }
```
  -A common example of a 'prefix' is '!' or '='<br>
  -You can find your token by navigating to the 'Bot' tab of your bot in the portal and copy the 'Token', which can be found in the 'Build-A-Bot' section under the bot's 'Username'<br>
  -Ensure you have node.js, npm, and discord.js installed on your device (pm2 is recommended for better bot management, but is not required)<br>
  -Open a terminal and navigate to the application directory (If using Visual Studio Code, which is recommended, open a new terminal with Ctrl+Shift+`)<br>
  -Run "npm start"

  This will install any dependencies and start the application

  Be sure to test on a private server
