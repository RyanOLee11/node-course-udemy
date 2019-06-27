const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

// set application
app.set('view engine', 'hbs');

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

app.listen(3000,() => {
    console.log('listening on port 3000');
})
