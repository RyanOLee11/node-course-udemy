const fs = require('fs');

const notes = function(){
    return 'Your notes ...';
};


const addNotes = function(title, body){ 
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(){
        return notes.title === title;
    })

    if (duplicateNotes.length == 0){
    }
    return notes
};


function loadNotes(){

    try{
        var dataBuffer = fs.readFileSync(notes.json); 
        var dataJSON = dataBuffer.toString(); 
        return JSON.parse(dataJSON);
    }catch{
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addnote
};