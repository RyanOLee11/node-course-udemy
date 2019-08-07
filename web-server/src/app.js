const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const forecast = require("./utils/forecast.js");
const geocode = require('./utils/geocode.js');
const request = require('request');

const port = process.env.PORT || 3000;

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname , '../templates/views');
const partialsPath = path.join(__dirname , '../templates/partials');

 

// setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath)

// set up static directory to serve
app.use(express.static(publicDirectoryPath));



app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather', 
        name: 'Ryan'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help'
    })
})
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: "You must send an address"
        })
    }

    geocode(req.query.address, (error, {lat, long, location} = {})=>{
        if (error){
            return res.send({error});
        }
        forecast(lat, long, (error, forecastData) => {
                if (error){
                    return res.send({error})
                }
                var summary = forecastData;
               res.send({location, summary});
            })
    });
})

app.get('/products', (req, res) => {
    if (!req.query.search){
        res.send({
            error: 'You must provide a search term'
        })
    }else{
        res.send({
            products: []
        });
    }    
})


app.get('/help/*', (req,res) => {
    res.render('error',{
        page_type: 'Help page',
        error_code: 404
    });
})

app.get('*', (req,res) => {
    res.render('error',{
        page_type: 'Page',
        error_code: '404'
    });
})

app.listen(port,() => {
    console.log('listening on port ' + port );
})
