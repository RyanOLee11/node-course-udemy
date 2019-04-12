const yargs = require('yargs');




yargs.command({
    command: 'remove',
    desciption: 'this will remove a note',
     handler: function(){
         console.log('removing note');
    }
});

yargs.command({
    command: 'add',
    describe: 'this will add a note',
    builder: {
        title:{
            description: 'note title',
            demandOption: true, 
            type: 'string'
        },
        body:{
            desciption: 'note body', 
            demandOption: true, 
            type: 'string'
        }
    },
    handler: (x) =>{
        console.log('adding title: ' + x.title + '\nbody: ' + x.body );
    }
});

yargs.command({
    command: 'read',
    describe: 'this will read a note',
    handler: function(){
        console.log('reading note');
    }
});

yargs.command({
    command: 'list',
    describe: 'this will list all notes',
    handler: function(){
        console.log('listing notes');
    }
});


yargs.parse();

//console.log(yargs.argv)


// // const fs = require('fs');

// // const validator = require('validator');

// const chalk = require('chalk');

// const notes = require('./notes.js');

// // fs.writeFileSync('notes.txt', 'My name is Ryan');


// // fs.appendFileSync('notes.txt', '\nThis is the second line');

// // console.log(notes());

// // console.log(validator.isEmail('rlee@plattsburgh.edu'));

// console.log(chalk.green('Success'));




