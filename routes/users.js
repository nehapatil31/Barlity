const express = require("express");
const router = express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

//Create user
router.post("/", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//Gets all users
router.get("/", auth, (req, res) => {
  User.find({})
    .then(users => {
      res.send(users);
    })
    .catch(e => {
      res.status(500).send();
    });
});

//Gets single user
router.get("/:id", (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch(e => {
      res.status(500).send();
    });
});

module.exports = router;
