var Discord = require("discord.js");
var auth = require("./auth.json");
var commands = require("./commands.json");
var weather = require("./weather.js");
var music = require("./music.js");
var bot = new Discord.Client ();

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

function handle_command(cmd, message, url) {
    switch (cmd) {
        case "ping":
            ping(message);
            break;
        case "join":
            music.join(message);
            break;
        case "help":
            help(message);
            break;
        case "raccoon":
            raccoon(message);
            break;
        case "add":
            if (url != null) 
                music.add(message, url);
            break;
        case "play":
            music.play(message);
            break;
        case "weather":
            weather.weather(message);
        break;
    }
}

// Bot Events

bot.on("message", (message, url) => {
    if (message.content.startsWith("!")) {
        var arg = message.content.substring(1).split(" ");
        var cmd = arg[0];
        var url = arg[1];

        handle_command(cmd, message, url);
    }
});

bot.login(auth.token);