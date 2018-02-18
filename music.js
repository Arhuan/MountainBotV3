var fs = require("fs");
var ytdl = require("ytdl-core");
var streams = [];
var Discord = require("discord.js");
var voiceconnection;
var dispatcher;

module.exports = {
    join : function(message) {
        if (!message.guild) return;
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
                voiceconnection = connection;
                message.reply("I have successfully connected to the channel!");
                })
                .catch(console.log);
        } else {
            message.reply("You are not in a voice channel.");
        }
    } ,
    
    disconnect : function(message) {
        if (voiceconnection != null) {
            voiceconnection.disconnect();
            voiceconnection = null;
            message.reply("Disconnected from voice channel.");
        } else {
            message.reply("I am not currently connected to a voice channel.");
        }
    } ,

    add : function(message, url) {
        try {
            streams.push(ytdl(url, {filter: "audioonly"}));
            message.reply("Song added.");
        } catch(error){
            message.reply("Give me a proper YouTube URL.");
        }
    } ,

    remove : function(message) {
        if (streams.length != 0) {
            streams.shift();
            message.reply ("Song removed.");
        } else {
            message.reply("Queue is empty.");
        }
    } ,

    play : function (message) {
        if (voiceconnection != null) {
            if (streams.length == 0) {
                message.reply("Queue is empty.");
            } else {
                dispatcher = voiceconnection.playStream(streams.shift());
                dispatcher.on("end", () => {
                    dispatcher = null;
                    if (streams.length != 0) {
                        this.play(message);
                    } else {
                        voiceconnection.disconnect();
                    }
                });
            }
        } else {
            message.reply("Not in a voice channel.");
        }
    } ,

    pause : function(message) {
        if (dispatcher != null) {
            if (!dispatcher.paused)
                dispatcher.pause();
        } else {
            message.reply("It's paused!");
        }
    } ,

    resume : function(message) {
        if (dispatcher != null) {
            if (dispatcher.paused)
                dispatcher.resume();
        } else {
            message.reply("Gucci!");
        }
    } ,

    queue : function(message) {

    }
}
