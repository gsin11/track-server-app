require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");
const { parsed } = require("dotenv").config();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = `mongodb+srv://${parsed.DB_USER}:${parsed.DB_PASSWORD}@${parsed.DB_HOST}/${parsed.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});
mongoose.connection.on("error", (error) =>
  console.log("error connecting mongo", error)
);

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email is :${req.user.email}`);
});

app.listen(3000, () => console.log("Listening on port 3000"));
