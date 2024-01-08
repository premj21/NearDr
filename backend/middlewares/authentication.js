const User = require("../models/User.js");
const { Doctor, Patient } = require("../models/usr.js");

const jwt = require("jsonwebtoken");
const authentication = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "Plz Login First" });
    }
    const ab = await jwt.verify(token, process.env.SEC);
    if (ab._role == "doctor") {
      req.user = await Doctor.findById(ab._id);
      req.user._role = "doctor";
    } else {
      req.user = await Patient.findById(ab._id);
      req.user._role = "patient";
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = authentication;
