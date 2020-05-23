const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Barber = require("../models/barber");
const auth = require("../middleware/auth");

const USER_TYPE = {
  customer: 1,
  barber: 2
};
Object.freeze(USER_TYPE);

//Gets all barbers
router.get("/", (req, res) => {
  User.find({ userType: USER_TYPE.barber })
    .then(users => {
      res.send(users);
    })
    .catch(e => {
      res.status(500).send();
    });
});

//Update Barber
router.post("/:id", async (req, res) => {
  const barber = new Barber(req.body);

  try {
    await barber.save();
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { barber: barber._id },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get barber
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("barber");
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
