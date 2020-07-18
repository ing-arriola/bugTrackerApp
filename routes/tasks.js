const express = require("express");
const router = express.Router();

//@route    GET api/task
//@desc     Get all contacts
//@access   Private
router.get("/", (req, res) => {
  res.send("Get all task");
});

//@route    POST api/task
//@desc     Add new contact
//@access   Private
router.post("/", (req, res) => {
  res.send("Add a new task");
});

//@route    PUT api/users/:id
//@desc     update contact
//@access   Private
router.put("/:id", (req, res) => {
  res.send("update task");
});

//@route    Post api/users
//@desc     Delete contact
//@access   Private
router.delete("/:id", (req, res) => {
  res.send("delete task");
});

module.exports = router;
