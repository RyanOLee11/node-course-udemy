const yargs = require('yargs');
const notes = require('./notes.js')
const chalk= require('chalk');




yargs.command({
    command: 'remove',
    desciption: 'this will remove a note',
    builder: {
        title: {
            desciption: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
     handler(x){
         notes.removeNote(x.title);
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
    handler(x){
        notes.addNotes(x.title, x.body);
    }
});

yargs.command({
    command: 'read',
    describe: 'this will read a note',
    builder:{
        title:{
            desciption:'note title',
            demandOption: true, 
            type: 'string'
        }
    },
    handler(x){
        note = notes.readNote(x.title); 
    }
});

yargs.command({
    command: 'list',
    describe: 'this will list all notes',
    handler(x){
        notes.listNotes();
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




