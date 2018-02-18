
const request = require('request');
var Discord = require('discord.js');
let apiKey = 'f25fca686aaf8efdf9713fb2375423df';


module.exports = {
   weather: function(message, city_id) {
       var url = "api.openweathermap.org/data/2.5/weather?id=" + city_id;
       getWeather(message, url);
   }
}

function getWeather(message, url) {
    request(url, function (err, response, body)
        {  
        console.log(JSON.parse(body));
           if(err)
            {
                console.log('error',error);
            }
            else
            {
            let weather = JSON.parse(body);
            try {
                let text = 'Its ' + weather.main.temp + ' degrees in ' + weather.name + '!';
                message.channel.send(text);
            } catch (err) {
                return;
            }
            }
        }
    ) 
}

