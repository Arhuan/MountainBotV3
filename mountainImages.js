
// CSE ID : 008030941676365421230:jptivdegq0w
// API KEY :AIzaSyBN2S7JKaiww6s6BQM8FRBjf-0UgZv1jq8

const cse_ID  = '008030941676365421230:jptivdegq0w';
const API_Key = 'AIzaSyBN2S7JKaiww6s6BQM8FRBjf-0UgZv1jq8';
const GoogleImages = require('google-images');
 
const client = new GoogleImages(cse_ID, API_Key);


client.search('nibba')
    .then(images => {
        /*
        [{
            "url": "http://steveangello.com/boss.jpg",
            "type": "image/jpeg",
            "width": 1024,
            "height": 768,
            "size": 102451,
            "thumbnail": {
                "url": "http://steveangello.com/thumbnail.jpg",
                "width": 512,
                "height": 512
            }
        }]
         */
    });
