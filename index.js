const Discord = require ('discord.js');

//just the default discord login thing
const client = new Discord.Client();
client.login('TOKEN HERE');

//Prints BEEES in the console on sucsessful startup
client.on('ready', () => console.log('BEEES'));
const prefix = "!";

const CHANNEL = 'aba';
const profanity = 'IGN:';

// Set the bot's "Playing: " status (must be in an event!)
client.on("ready", () => {
  client.user.setActivity("Mastrubating over loli hentai", { type: "WATCHING"})
})

//this looks at the message and if it contains the word specified in the const profanity. I may have copied the code from somewhere but can't remember where
client.on('message', message => {
  for (let i = 0; i < profanity.length; i++) {
    if(message.author.bot) return;
      if (message.content.toLowerCase().includes(profanity[i])) {
        

      return message.delete()
        .catch(console.error);
    }
  }
});




//This looks for it there are any recent deletions in messages and logs them in the channel specified in const CHANNEL
client.on('messageDelete', function(message) {

  if(message.channel.type == 'text') {

      //this just reposts the message. You could name this bot Imgur Bot.
      var log = message.guild.channels.find('name', CHANNEL);
      if (log != null)
          log.send('Unban request ' + message.author + ': ' + message.cleanContent);

  }

});

