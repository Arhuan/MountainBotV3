var Discord = require("discord.js");
var auth = require("./auth.json");
var commands = require("./commands.json");
var weather = require("./weather.js");
var music = require("./music.js");
var coinflip = require ("./coinflip.js");
var bot = new Discord.Client ();
var searchImage = require("./mountainImages.js");
var cats = require("./cats.js");

bot.on("ready", () => {
    console.log("Mountain bot here.");
})

// List of Commands

function ping(message) {
    message.channel.send("pong!");
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

function handle_command(cmd, message, target, arg) {
    switch (cmd) {
        // pong!
        case "ping":
            ping(message);
            break;
        // bot will join the voice channel
        case "join":
            music.join(message);
            break;
        // disconnects bot from voice channel
        case "disconnect":
            music.disconnect(message);
            break;
        // lists all the commands
        case "help":
            help(message);
            break;
        // raccoon
        case "raccoon":
            raccoon(message);
            break;
        // adds a song to the queue
        case "add":
            if (target != null) 
                music.add(message, target);
            break;
        // removes song from queue
        case "remove":
            music.remove(message);
            break;
        // plays the song in front of queue
        case "play":
            music.play(message);
            break;
        // pauses current song
        case "pause":
            music.pause(message);
            break;
        // resumes the song
        case "resume":
            music.resume(message);
            break;
        // returns weather information
        case "weather":
            weather.weather(message, target);
            break;
        // flips a coin, heads or tail
        case "coinflip":
            coinflip.coinflip(message);
            break;
        // a random image search with given arguments
        case "image":
            searchImage.searchImg(message, target, arg);
            break;
    break;
    }
}

// Bot Events

bot.on("message", (message, target) => {
    if (message.content.startsWith("!")) {
        var arg = message.content.substring(1).split(" ");
        var cmd = arg[0];
        var target = arg[1];
        handle_command(cmd, message, target, arg);
    }
});

bot.login(auth.token);