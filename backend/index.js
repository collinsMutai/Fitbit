const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const ShopRoutes = require("./Routes/Shop");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);
app.use(ShopRoutes);


app.listen(`${PORT}`, () => {
  console.log(`Running on port ${PORT}`);
});
