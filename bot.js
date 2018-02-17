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
        }
    }
});

bot.login(auth.token);