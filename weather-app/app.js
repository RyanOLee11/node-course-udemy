const request = require('request');
const forecast = require("./utils/forecast.js")
const geocode = require('./utils/geocode.js');

geocode('Plattsburgh', (error, data)=>{
    console.log('error', error);
    console.log ('data', data );
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })