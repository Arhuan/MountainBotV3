var fs = require("fs");
var ytdl = require("ytdl-core");
var streams = [];
var Discord = require("discord.js");
var auth = require("./auth.json");

module.exports = {
    join : function(message) {
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
    } ,
    add : function(message, url) {
        streams.push(ytdl(url, {filter: "audioonly"}));
        message.reply("Song added.");
    },

    play : function (message) {
        if (streams.length != 0) {
            connection => {
                connection.playStream(streams[0]);
            }
            message.reply("Now playing: " + "Gucci gang?");
        } else {
            message.reply("No songs in playlist.");
        }
    }
}
