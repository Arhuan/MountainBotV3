var Discord = require('discord.js');
var auth = require('./auth.json');

var bot = new Discord.Client ();

var commands = ["!ping: pong!", "!join: MountainBot will join your voice channel", "!help: A list of all commands"];

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
    for (i = 0; i < commands.length; i++) {
        var to_add = "\n" + commands[i];
        reply += to_add;
    }
    message.reply(reply);
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