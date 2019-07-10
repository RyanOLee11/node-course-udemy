const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1Ijoicnlhbm9sZWUxMSIsImEiOiJjanVzcHE4Y2szenVmNGRvYTBsenoxZWJsIn0.dXD3f9gEZpMrkZ4ztSFcfA"
    request({url, json: true}, (error, {body})=>{
        if (error){
            callback('unable to connect to location sevices');
        }else if (body.features.length == 0 ){
            callback('location was not found');
        }else{
            data = {
                location: body.features[0].place_name,
                long: body.features[0].center[1],
                lat: body.features[0].center[0]
            }
            callback(undefined, data);
        }
    })
}

module.exports = geocode;
