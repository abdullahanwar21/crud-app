// import db from './config/db.mjs'
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/index.js")
// import UserRouter from "./routes/index.js"


// middle ware
app.use(cors());
app.use(express.json());
app.use("/" , routes);


// Connecting DB
const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log("databse connected");
  } catch (error) {
    console.log(error);
  }
};

connectDb()
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });

