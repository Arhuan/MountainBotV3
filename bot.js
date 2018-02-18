var Discord = require("discord.js");
var auth = require("./auth.json");
var fs = require("fs");
var ytdl = require("ytdl-core");

var bot = new Discord.Client ();

var commands = require("./commands.json");

bot.on("ready", () => {
    console.log("Mountain bot here.");
})

// List of Commands

function ping(message) {
    message.channel.send("pong!");
}

function join(message) {
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
}

function help(message) {
    var reply = "\nList of available commands:\n";
    for (i = 0; i < commands.list.length; i++) {
        var to_add = "\n" + commands.list[i];
        reply += to_add;
    }
    message.reply(reply);
}

function raccoon(message){
    message.channel.send("RACCOON!", {
        file: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Raccoon_%28Procyon_lotor%29_2.jpg"
    });
}

// Command Handler

function handle_command(cmd, message) {
    switch (cmd) {
        case "ping":
            ping(message);
            break;
        case "join":
            join(message);
            break;
        case "help":
            help(message);
            break;
        case "raccoon":
            raccoon(message);
            break;
        break;
    }
}

// Bot Events

bot.on("message", (message) => {
    if (message.content.startsWith("!")) {
        var arg = message.content.substring(1).split(" ");
        var cmd = arg[0];

        handle_command(cmd, message);
    }
});

bot.login(auth.token);