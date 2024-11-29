const router = require("express").Router();

const data = require("./data");

router.get("/all", function (req, res) {
  res.status(200).json(data);
});

module.exports = router;
