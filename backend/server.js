const express = require("express");
const cors = require("cors");
const dbconnect = require("./config/dbconnect");
require("dotenv").config({ path: "./config/config.env" });
const cookieparser = require("cookie-parser");
const User = require("./routes/usr.js");
const Mett = require("./routes/Mett.js");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

// app.use("/", express.static("../client/build"));
dbconnect();
app.use(cookieparser());
app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use("/api/v1/auth", User);
app.use("/api/v1/Req", Mett);
const port = process.env.PRT;
app.listen(port, () => {
  console.log(`surver is running on port ${port}`);
});
