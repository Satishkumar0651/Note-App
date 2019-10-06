const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes');

const titleOption= {
    description:"Title of the note",
    demand:true,
    alias:'t'
};
const bodyOption={
    description:"Body of the note",
    demand:true,
    alias:'b'
}

const argv=yargs
.command("add","Add a new note",{
    title:titleOption,
    body:bodyOption
})
.command("list","listing all the note")
.command("read","read a note",{
    title:titleOption, 
})
.command("remove","removing a note",{
    title:titleOption
})
.help()
.argv;
var command=process.argv[2]

if(command==='add'){
    var note=notes.addNotes(argv.title,argv.body);  
    if(note){
        console.log('Note created');
        notes.logNotes(note);
    }
    else{
        console.log('Title not taken');
    }
} else if(command==='list'){
    var allNotes=notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note)=>notes.logNotes(note)); 
    }
 else if(command ==='read'){
    var note=notes.getNoted(argv.title,argv.body);
    if(note){
        console.log("Note found");
        notes.logNotes(note);
    }
    else{
        console.log("Notes not found");
    }
} else if(command==='remove'){
   var noteRemoved= notes.removeNotes(argv.title,argv.body);
   var message=noteRemoved ? "notes removed":"not not removed";
   console.log(message);
}else{
    console.log("command not found");
}

