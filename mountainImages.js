var keys = require("./key.json");

var Discord = require("discord.js");
var auth = require("./auth.json");

const cse_ID  = keys.cse_ID;
const API_Key = keys.API_key;
const GoogleImages = require('google-images');
 
const client = new GoogleImages(cse_ID, API_Key);


module.exports = {
    searchImg : function (message, target) {
        client.search(target).then(
            function (images) {
                message.channel.send(images[0].url);
            },
            function (reason) {
                message.channel.send("search failed!");
            }
        )
    }
}


