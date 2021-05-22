const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { v4: uuidv4 } = require('uuid');
const createNewNote = require("../../lib/note");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {

    console.log(notes + " notes log before");
    const newNote = createNewNote(req.body);
    req.body.id = uuidv4();
    res.json(newNote);
});

module.exports = router;