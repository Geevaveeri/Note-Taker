const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {

    const notes = body;

    notesArray.push(notes);
    console.log(notes + "notes log");
    console.log(notesArray);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notesArray }, null, 2)
    );
    return notes;
}

module.exports = createNewNote;