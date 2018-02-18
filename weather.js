
    const request = require('request');
    var Discord = require('discord.js');
    var auth = require('./auth.json');
    let apiKey = 'f25fca686aaf8efdf9713fb2375423df';
module.exports = {
   weather: function(message, city_name) {
       var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city_name +'&appid=f25fca686aaf8efdf9713fb2375423df&units=metric';
       getWeather(message, url);
   }
}
function getWeather(message, url) {
    request(url, function (err, response, body)
        { 
           if(err)
            {
                console.log('error',error);
            }
            else
            {
            let weather = JSON.parse(body);
            let text = 'Its ' + weather.main.temp + ' degrees in ' + weather.name + ' !';
            //console.log(message);
            message.channel.send(text);
            }
        }) 
}

