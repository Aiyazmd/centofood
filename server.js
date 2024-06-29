const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const orderCtrl = require("./orderCtrl");

const app = express();


const DB_URL = "mongodb+srv://kirannakka54:8PyUCsfnnhbUQfET@cluster0.cgvzxca.mongodb.net/resto?retryWrites=true&w=majority&appName=Cluster0";

app.listen(5000, () => console.log("Server Up & Running!"));
mongoose
  .connect(DB_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));



  app.use(cors());
  app.use(express.json()); // Ensure this is here and placed before routes
  
  app.use("/createOrder", orderCtrl.createOrder);
