const { index } = require("../controllers/movies.controller");
const router = require("express").Router();
// GET /movies
router.get("/", index);

module.exports = router;