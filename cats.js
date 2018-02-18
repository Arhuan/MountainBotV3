var Discord = require('discord.js');
const request = require('superagent');

module.exports = { 
    cats: async function(message){
        const {body} = await request
        .get('http://random.cat/meow');
        const embed = new Discord.RichEmbed()
        .setImage(body.file)
        message.channel.send({embed});
    }
}