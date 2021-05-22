const router = require("express").Router();
const note = require("../apiRoutes/noteRoutes");

router.use(note);

module.exports = router;