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
module.exports = {
    loadNotes: loadNotes,
    addNotes: addNotes,
    removeNote: removeNote
};