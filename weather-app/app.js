const request = require('request');
const forecast = require("./utils/forecast.js")
const geocode = require('./utils/geocode.js');


const address = process.argv[2];
if (address){
    geocode(address, (error, {lat, long, location})=>{
        if (error){
            return console.log('error', error);
        }
        forecast(lat, long, (error, forecastData) => {
                if (error){
                    return console.log(error);
                }
                console.log(location  + ', ' + forecastData.summary);
            })
    });
}
else {
    console.log('You must provide a location');
}