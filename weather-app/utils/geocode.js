const request = require('request');

const geocode = (address, callback) => {
    const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1Ijoicnlhbm9sZWUxMSIsImEiOiJjanVzcHE4Y2szenVmNGRvYTBsenoxZWJsIn0.dXD3f9gEZpMrkZ4ztSFcfA"
    request({url: mapBoxUrl, json: true}, (error, response)=>{
        if (error){
            callback('unable to connect to location sevices');
        }else if (response.body.length == 0 ){
            callback('location was not found');
        }else{
            data = {
                location: response.body.features[0].place_name,
                long: response.body.features[0].center[1],
                lat: response.body.features[0].center[0]
            }
            callback(undefined, data);
        }
    })
}

module.exports = geocode;
