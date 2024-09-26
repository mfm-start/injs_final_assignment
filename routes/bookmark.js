const { bookmarklist, setbookmark } = require("../controllers/bookmark.controller");
const router = require("express").Router();

// POST /bookmark/:movieId
router.post("/:movieId", setbookmark);

module.exports = router;