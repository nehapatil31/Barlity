const express = require("express");
//to connect to db
require("./mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || "5000";

app.use(cors());
app.use(express.json());
app.use("/api/users", require("./routes/users"));
app.use("/api/barbers", require("./routes/barbers"));
app.use("/api/auth", require("./routes/auth"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("barber-ui/build"));
}

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
