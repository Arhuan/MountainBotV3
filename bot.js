var Discord = require('discord.js');
var auth = require('./auth.json');

var bot = new Discord.Client ();

bot.on("ready", () => {
    console.log("Mountain bot here.");
})

bot.on("message", (message) => {
    if (message.content.startsWith("!")) {
        var arg = message.content.substring(1).split(" ");
        var cmd = arg[0];

        switch (cmd) {
            case "ping":
                message.channel.send("pong!");
                break;
            case "join":
                if (!message.guild) return;
                if (message.member.voiceChannel) {
                    message.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        message.reply("I have successfully connected to the channel!");
                      })
                      .catch(console.log);
                } else {
                    message.reply("You are not in a voice channel.");
                }
                break;
            break;
        }
    }
});

bot.login(auth.token);