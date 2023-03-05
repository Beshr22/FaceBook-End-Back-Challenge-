const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const PORT = 2203;
const app = express();
const feedController = require("./controllers/feedsController");

const dbURI =
  "mongodb+srv://Beshr:Beshr@beshr.sxvfuxs.mongodb.net/?retryWrites=true&w=majority";
const FEED = require("./models/FEED");

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("The database connection successfully established");
    app.listen(PORT);
  });

app.get("/feed", feedController.feed_index);

app.get("/feed/:id", feedController.feed_details);

app.get("/feed/edit/:id", feedController.feed_update_get);

app.post("/feed/update/:id", feedController.feed_update_post);

app.get("/delete/:id", feedController.feed_delete);

app.post("/post", feedController.feed_post);
