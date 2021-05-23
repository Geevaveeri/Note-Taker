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

module.exports = createNewNote;