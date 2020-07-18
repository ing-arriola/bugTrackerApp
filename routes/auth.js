const express = require("express");
const router = express.Router();

//@route    GET api/auth
//@desc     Get logged a user
//@access   Private
router.get("/", (req, res) => {
  res.send("Get Logged in user");
});

//@route    Post api/auth
//@desc     Auth user & get token
//@access   Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

module.exports = router;
