const { Doctor, Patient } = require("../models/usr.js");
// const { sendmail } = require('../middlewares/Sendmail.js');
// const crypto = require("crypto");
// const cloudinary = require("cloudinary");

const register = async (req, res) => {
  try {
    // const mycloud = await cloudinary.v2.uploader.upload(req.body.image, {
    //   folder: "post",
    // });
    const { name, phoneNumber, role, password } = req.body;
    let newUser;

    if (await Doctor.findOne({ phone_number: phoneNumber })) {
      return res
        .status(409)
        .json({ success: false, message: "User Already Exist" });
    }

    if (await Patient.findOne({ phone_number: phoneNumber })) {
      return res
        .status(409)
        .json({ success: false, message: "User Already Exist" });
    }

    newUser = await (role == "doctor" ? Doctor : Patient).create({
      name,
      phone_number: phoneNumber,
      role,
      password,
      avatar: {
        public_id: "hel",
        url: "hel",
      },
    });

    await newUser.save();
    const token = newUser.gentoken();
    res
      .status(201)
      .cookie("token", token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      })
      .json({
        success: true,
        message: "Registered Successfully",
        user: newUser,
        token: token,
      });
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { phone_number, password, role } = req.body;

    if (role == "doctor") {
      let nusr = await Doctor.findOne({ phone_number });
      if (nusr && nusr.matchpass(password)) {
        const token = nusr.gentoken();
        res
          .status(201)
          .cookie("token", token, {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
          })
          .json({
            success: true,
            message: "Login Successfully",
            user: nusr,
            token: token,
          });
      } else {
        return res
          .status(409)
          .json({ success: false, message: "Wrong Credential" });
      }
    } else {
      let nusr = await Patient.findOne({ phone_number });
      if (nusr && nusr.matchpass(password)) {
        const token = nusr.gentoken();
        res
          .status(201)
          .cookie("token", token, {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
          })
          .json({
            success: true,
            message: "Login Successfully",
            user: nusr,
            token: token,
          });
      } else {
        return res
          .status(409)
          .json({ success: false, message: "Wrong Credential" });
      }
    }
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};

const logout = (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
      .json({
        message: "Logout Successfully",
      });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = { register, login, logout };
