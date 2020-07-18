const express = require("express");
const router = express.Router();

//@route    GET api/users
//@desc     Get logged a user
//@access   Private
router.get("/", (req, res) => {
  res.send("Get Logged in user");
});

//@route    Post api/users
//@desc     Auth user & get token
//@access   Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
