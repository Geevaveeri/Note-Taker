const router = require("express").Router();
const notes = require("../../db/db.json");
const { createNewNote, deleteNote } = require("../../lib/note");

router.get("/notes", (req, res) => {
    const results = notes.notesArray;
    res.json(results);
});

router.post("/notes", (req, res) => {
    const newNote = createNewNote(req.body, notes.notesArray);
    res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {

    const noteId = req.params.id;

    const deletedNote = deleteNote(noteId, notes.notesArray);
    res.json(deletedNote);
    
});

module.exports = router;