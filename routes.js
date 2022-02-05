const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/:id", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, moodData) => {
    if (err) return res.status(500).send(err.message);

    let moodDataResult = JSON.parse(moodData).moodObj.find(
      (obj) => obj.id === Number(req.params.id)
    );

    res.render("moodResults", moodDataResult);
  });
});

module.exports = router;
