const router = require("express").Router();

router.use("/movies", require("./movies"));
router.use("/bookmark", require("./bookmark"));

router.get('/', (req, res) => {
    res.send('Welcome to final assignment INJS!')
  });

router.post("/register");// POST /register
router.post("/login");// POST /login

// GET /mybookmark
router.get("/mybookmark", (req, res) => {
    res.send("my bookmark list per user")
});

module.exports = router;