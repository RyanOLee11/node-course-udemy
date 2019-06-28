const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

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
    res.send('this is the weather page');
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

app.listen(3000,() => {
    console.log('listening on port 3000');
})
