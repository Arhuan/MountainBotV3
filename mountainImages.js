
// CSE ID : 008030941676365421230:jptivdegq0w
// API KEY :AIzaSyBN2S7JKaiww6s6BQM8FRBjf-0UgZv1jq8

const cse_ID  = '005832064830925815114:e_xlpswsc5e';
const API_Key = 'AIzaSyCY1vES20Cxn7pYPOjob0amdf9x-mWGbVs';
const GoogleImages = require('google-images');
 
const client = new GoogleImages(cse_ID, API_Key);

const images = client.search('Aaron Huang');

console.log(images[1] == null);

