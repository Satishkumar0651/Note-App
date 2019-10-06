const fs=require('fs');

var fetchNotes=()=>{
    try{
        var notesString=fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
    
    }
    catch(e){
        return [];
    }
    
}
var saveNotes=(notes)=>{
    fs.writeFileSync("notes-data.json",JSON.stringify(notes));
}


var addNotes=(title,body)=>{
    var notes=fetchNotes();
    var note={
        title,
        body
    };


    var duplicateNotes=notes.filter((note)=>note.title===title);
    if(duplicateNotes.length===0)
    {
        notes.push(note);
        saveNotes(notes);
        return note
    }
};

var getAll=()=>{
    return fetchNotes();
};
var getNoted = (title,body)=>{
    var notes=fetchNotes();
    var filteredNotes=notes.filter((note)=>note.title===title);
    return filteredNotes[0];
};
var removeNotes=(title)=>{
    var notes=fetchNotes();
    var filteredNotes=notes.filter((note)=>note.title!==title);
    saveNotes(filteredNotes);
    return notes.length!==filteredNotes.length;
};
var readNotes=()=>{
    console.log("reading all nodes",title.body);
};
var logNotes=(note)=>{
    console.log("--");
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};
module.exports={
    addNotes,
    getAll,
    readNotes,
    removeNotes,
    getNoted,
    logNotes
};