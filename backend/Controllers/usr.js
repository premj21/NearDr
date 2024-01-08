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
    const { phone_number, password, role, latitude, longitude } = req.body;
    if (role == "doctor") {
      let nusr = await Doctor.findOne({ phone_number });
      if (nusr && nusr.matchpass(password)) {
        const token = nusr.gentoken();
        nusr.location.coordinates = [
          parseFloat(longitude),
          parseFloat(latitude),
        ];
        await nusr.save();
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
        nusr.location.coordinates = [
          parseFloat(longitude),
          parseFloat(latitude),
        ];
        await nusr.save();
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

const Passwordchange = async (req, res) => {
  try {
    const { oldpassword, newpassword } = req.body;
    if (req.user._role == "doctor") {
      let user = await Doctor.findById(req.user._id).select("+password");
      const ismatch = await user.matchpass(oldpassword);
      if (!ismatch) {
        return res.status(401).json({
          success: false,
          message: "Old password Not Matched",
        });
      }
      user.password = newpassword;
      await user.save();
      res.status(200).json({
        success: true,
        message: "Password changed Successfully",
      });
    } else {
      let user = await Patient.findById(req.user._id).select("+password");
      const ismatch = await user.matchpass(oldpassword);
      if (!ismatch) {
        return res.status(401).json({
          success: false,
          message: "Old password Not Matched",
        });
      }
      user.password = newpassword;
      await user.save();
      res.status(200).json({
        success: true,
        message: "Password changed Successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateprofile = async (req, res) => {
  try {
    if (req.user._role == "doctor") {
      let user = await Doctor.findById(req.user._id);
      if (req.body.name) user.name = req.body.name;
      // if (req.body.avatar) {
      //   await cloudinary.v2.uploader.destroy(user.avatar.public_id);
      //   const mycloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      //     folder: "post",
      //   });
      //   user.avatar.public_id = mycloud.public_id;
      //   user.avatar.url = mycloud.secure_url;
      // }
      await user.save();
    } else {
      let user = await Patient.findById(req.user._id);
      if (req.body.name) user.name = req.body.name;
      // if (req.body.avatar) {
      //   await cloudinary.v2.uploader.destroy(user.avatar.public_id);
      //   const mycloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      //     folder: "post",
      //   });
      //   user.avatar.public_id = mycloud.public_id;
      //   user.avatar.url = mycloud.secure_url;
      // }
      await user.save();
    }
    res.status(200).json({
      success: true,
      message: "Profile Updated ",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const myprofile = async (req, res) => {
  try {
    let user = await (req.user._role == "doctor" ? Doctor : Patient)
      .findById(req.user._id)
      .select("-password -role");
    if (user) {
      res.status(200).json({
        success: true,
        message: "My Profile ",
        user: user,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "User not Found",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const allUser = async (req, res) => {
  try {
    let users = await Doctor.find({ role: "doctor" }, "name avatar");
    if (users) {
      res.status(200).json({ success: true, users: users });
    } else {
      res.status(401).json({ success: false, message: "NO user" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getuserprofile = async (req, res) => {
  try {
    if (req.user._role == "doctor") {
      let p = req.params.id;
      p = p.toString();
      let users = await Patient.findOne({ _id: p }, "name avatar");
      if (users) {
        res.status(200).json({ success: true, users: users });
      } else {
        res.status(401).json({ success: false, message: "NO user" });
      }
    } else {
      let p = req.params.id;
      p = p.toString();
      let users = await Doctor.findOne({ _id: p }, "name avatar");
      if (users) {
        res.status(200).json({ success: true, users: users });
      } else {
        res.status(401).json({ success: false, message: "NO user" });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  Passwordchange,
  updateprofile,
  myprofile,
  allUser,
  getuserprofile,
};
