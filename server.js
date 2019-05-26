const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");

const app = express();

// bodyparser Middleware
app.use(bodyParser.json());

// DB config

const db = require("./config/keys").mongoURI;

// Connecting to mongo
mongoose
  .connect(db)
  .then(() => console.log(`Mongo DB connected`))
  .catch(err => console.log(err));

app.use("/api/items", items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
