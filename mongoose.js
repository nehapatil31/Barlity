const mongoose = require("mongoose");

//mongodb@2019
const MONGODB_URI =
  "mongodb+srv://nehapatil:mongodb@2019@cluster0-rbt9v.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI || "mongodb://127.0.0.1:27017/barlity", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!");
});

// const me = new User({
//   name: "Neha",
//   userType: 2
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(error => {
//     console.log("Error", error);
//   });
