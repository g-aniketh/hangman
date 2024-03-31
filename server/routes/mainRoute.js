const router = require("express").Router();
const Play = require("../controllers/play");

router.post("/play", Play);

module.exports = router;
