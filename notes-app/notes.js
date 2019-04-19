const fs = require('fs');
const chalk = require('chalk');



const addNotes = function(title, body){ 
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) =>  note.title === title)
    
    if (duplicateNotes.length == 0){
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('note added'));
    }else{
        console.log(chalk.red.inverse('Title already taken'));
    }



};

function saveNotes(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}


const loadNotes = () => { 

    try{
        var dataBuffer = fs.readFileSync('notes.json'); 
        var dataJSON = dataBuffer.toString(); 
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
};


const removeNote = (title) =>{
    var notes = loadNotes();
    var newNotes = notes.filter((note) => note.title !== title)
    
    if (notes.length > newNotes.length){
        saveNotes(newNotes);
        console.log(chalk.green.inverse('Note removed'));
    }else{
        console.log(chalk.red.inverse('No note found'));
    } 
}


const listNotes = () => {
    var list = loadNotes();
    console.log(chalk.green.inverse('Your Notes...'));
        for(i in list){
            console.log(chalk.yellow(list[i].title));
            console.log(list[i].body);
        }
        console.log(chalk.green.inverse('End of Notes'));
}

const readNote= (title) => {
    notes = loadNotes();
    note = notes.find((x) => x.title === title);

    if (note){
        console.log(chalk.yellow.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('ERROR: No note found'));
    }
}

module.exports = {
    loadNotes: loadNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};