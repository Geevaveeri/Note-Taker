const router = require("express").Router();
const { notes } = require("../../db/db.json");
const createNewNote = require("../../lib/note");

router.get("/notes", (req, res) => {
    const results = notes;
    console.log(results);
    res.json(results);
});

router.post("/notes", (req, res) => {

    console.log(notes + " notes log before");
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

module.exports = router;