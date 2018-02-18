var Discord = require("discord.js");

function challenge(message, arg) {
    var reply = arg[2] + " , " + '<@' + message.author.id +'>' + " challenges you to a game of " +
                arg[1] + "^ \n" + 'Type "!accept" to accept!';
    message.channel.send(reply);
}



module.exports = {
    challenge
}