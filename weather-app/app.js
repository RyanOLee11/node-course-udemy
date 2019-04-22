const request = require('request');

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicnlhbm9sZWUxMSIsImEiOiJjanVzcHE4Y2szenVmNGRvYTBsenoxZWJsIn0.dXD3f9gEZpMrkZ4ztSFcfA"


request({url: url, json: true}, (error, response)=> {
    console.log(response.body.features[0].geometry.coordinates[0]);
    console.log(response.body.features[0].geometry.coordinates[1]);
})

// const url ="https://api.darksky.net/forecast/5052b3653fee1ea15f3ea3770df03f3e/37.8267,-122.4233";

// request({url: url, json: true}, (error, response)=>{
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


