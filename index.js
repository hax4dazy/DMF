const Discord = require ('discord.js');

//Config
const config = require('./config.json')
//just the default discord login thing
const client = new Discord.Client();
client.login(config.token);

//Prints BEEES in the console on sucsessful startup
client.on('ready', () => console.log('Startup successful. Welcome Cave Johnson.'));
const CHANNEL = config.channel;
const trigger = config["triggers"];

// Set the bot's "Playing: " status (must be in an event!)
client.on("ready", () => {
  client.user.setActivity("ban appeals", { type: "LISTENING"})
})

//this looks at the message and if it contains the word specified in the const trigger. I may have copied the code from somewhere but can't remember where
client.on('message', message => {
    if(message.author.bot) return;
    var caughtWords = 0
    config["triggers"].forEach(function (string, index) {
      if(message.content.includes(string)){
        caughtWords = caughtWords + 1
      }
    });
    if(caughtWords > 0)
    return message.delete()
        .catch(console.error);
});


//This looks for it there are any recent deletions in messages and logs them in the channel specified in const CHANNEL
client.on('messageDelete', function(message) {

  if(message.channel.type == 'text') {

      //this just reposts the message. You could name this bot Imgur Bot.
      var log = client.channels.cache.get(CHANNEL);
      if (log != null)
          log.send('Unban request ' + message.author + ': ' + message.cleanContent);

  }

});

