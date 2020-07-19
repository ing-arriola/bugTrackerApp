const express = require("express");
const router = express.Router();
const aut = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Task = require("../models/Task");

//@route    GET api/task
//@desc     Get all contacts
//@access   Private
router.get("/", aut, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ date: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error Server at getTasks");
  }
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
