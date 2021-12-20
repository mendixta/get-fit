const router = require("express").Router();
const path = require("path");

// get the index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// get the excercise.html
router.get("/exercise.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// get the stats.html
router.get("/stats.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
