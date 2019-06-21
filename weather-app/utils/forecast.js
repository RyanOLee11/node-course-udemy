const request = require('request');

const forecast = ({lat, long}, callback) => {
    const url ="https://api.darksky.net/forecast/5052b3653fee1ea15f3ea3770df03f3e/" + lat + "," + long;
    request({url, json: true}, (error, response)=>{
        if (error){
            callback('unable to connect to forecast sevices');
        }else if (response.body.length == 0 ){
            callback('forecast was not found for the lat long given');
        }else{
            callback(undefined, response.body.currently);
        }
    })
}

module.exports = forecast;
