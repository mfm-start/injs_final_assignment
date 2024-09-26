const { bookmarklist } = require("../controllers/bookmark.controller");
const auth = require("../middlewares/auth.middlewares");
const router = require("express").Router();

router.use(require("./auth"));

router.use(auth);

router.use("/movies", require("./movies"));
router.use("/bookmark", require("./bookmark"));

router.get('/', (req, res) => {
    res.send('Welcome to final assignment INJS!')
  });




// GET /mybookmark
router.get("/mybookmark", bookmarklist);

module.exports = router;