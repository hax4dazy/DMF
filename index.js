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


client.on('message', message => {
  for (let i = 0; i < profanity.length; i++) {
    if(message.author.bot) return;
      if (message.content.toLowerCase().includes(profanity[i])) {
        

      return message.delete()
        .catch(console.error);
    }
  }
});




//message deleted
client.on('messageDelete', function(message) {

  if(message.channel.type == 'text') {

      //post in the guild's log channel
      var log = message.guild.channels.find('name', CHANNEL);
      if (log != null)
          log.send('Unban request ' + message.author + ': ' + message.cleanContent);

  }

});

