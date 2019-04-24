const request = require('request');

const geocode = require('./utils/geocode.js');
// const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/los angeles.json?access_token=pk.eyJ1Ijoicnlhbm9sZWUxMSIsImEiOiJjanVzcHE4Y2szenVmNGRvYTBsenoxZWJsIn0.dXD3f9gEZpMrkZ4ztSFcfA"

// const darkSkyUrl ="https://api.darksky.net/forecast/5052b3653fee1ea15f3ea3770df03f3e/37.8267,-122.4233";



geocode('Plattsburgh', (error, data)=>{
    console.log('error', error);
    console.log ('data', data );
})


// request({url: mapBoxUrl, json: true}, (error, response)=> {

//     if (error){
//         console.log('unable to connect to mapbox');
//     }else if (response.body.features.length == 0){
//         console.log('unable to find location');
//     }
//     else{
//         console.log(response.body.features[0].geometry.coordinates[0]);
//         console.log(response.body.features[0].geometry.coordinates[1]);
//     }
// })



// request({url: darkSkyUrl, json: true}, (error, response)=>{
//     console.log("It is currently "+response.body.currently.temperature + " degrees Farenheight. With a " + response.body.currently.precipProbability+ " chance of precipatation");
// });


// console.log('starting');

// setTimeout(()=> {
//     console.log('2second timer');
// },2000)

// setTimeout(()=> {
//     console.log('timer');
// },0)
// console.log('stopping');


