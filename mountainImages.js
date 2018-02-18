
// CSE ID : 008030941676365421230:jptivdegq0w
// API KEY :AIzaSyBN2S7JKaiww6s6BQM8FRBjf-0UgZv1jq8
var Discord = require("discord.js");
var auth = require("./auth.json");

const cse_ID  = '005832064830925815114:e_xlpswsc5e';
const API_Key = 'AIzaSyCY1vES20Cxn7pYPOjob0amdf9x-mWGbVs';
const GoogleImages = require('google-images');
 
const client = new GoogleImages(cse_ID, API_Key);


module.exports = {
    searchImg : function (message, target, arg) {
        client.search(target).then(
            function (images) {
                var i = Math.floor(Math.random()*images.length);
                message.channel.send(images[i].url);
            },
            function (reason) {
                message.channel.send("search failed!");
            }
        )
    }
}


