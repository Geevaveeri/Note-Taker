const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

function createNewNote(body, notesArray) {

    const notes = body;
    notes.id = uuidv4();
    notesArray.push(notes);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notesArray }, null, 2)
    );
    return notes;
}

function deleteNote(id, data) {

    const notes = data;
    const notesArray = notes.filter((note) => {
        return note.id != id;
    });
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify({ notesArray }), err => {
        if (err) {
            return console.log(err);
        } else {
            return notesArray;
        }
    })
    return notesArray;
}


module.exports = { createNewNote, deleteNote };