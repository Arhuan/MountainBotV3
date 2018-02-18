var Discord = require('discord.js');
module.exports = { 
    coinflip: function(message){
        return (Math.floor(Math.random() * 2) == 0) ? message.reply("heads") : message.reply("tails");
    }
}