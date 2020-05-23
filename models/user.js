const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  userType: {
    type: Number,
    required: true
  },
  isAdmin: Boolean,
  barber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Barber"
  },
  tokens: [
    {
      token: {
        type: String,
        require: true
      }
    }
  ]
});

userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id.toString(),
      isAdmin: user.isAdmin,
      userType: user.userType
    },
    "thisismynewcourse"
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

//statics works modeland methods work on instances

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};

//Hash plain text passwordbefore saving
userSchema.pre("save", async function(next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
