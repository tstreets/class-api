const router = require("express").Router();

router.use("/underrated-music", require("./underrated-music"));
router.use("/disney-villians", require("./disney-villians"));

module.exports = router;
