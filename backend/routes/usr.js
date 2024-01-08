const express = require("express");
const authentication = require("../middlewares/authentication");
const {
  register,
  login,
  logout,
  Passwordchange,
  updateprofile,
  myprofile,
  allUser,
  getuserprofile,
} = require("../Controllers/usr.js");
const { findNearDoctor } = require("../Controllers/Mett.js");

const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update/password").put(authentication, Passwordchange);
router.route("/update/profile").put(authentication, updateprofile);
router.route("/me").get(authentication, myprofile);
router.route("/alluser").get(authentication, allUser);
router.route("/user/profile/:id").get(authentication, getuserprofile);

// router.route("/follow/:id").get(authentication, followUser);
// router.route("/delete/me").delete(authentication, deleteaccount);
// router.route("/my/posts").get(authentication, getMyPosts);
// router.route("/user/resetpassword").post(authentication, forgetpassword);
// router.route("/password/reset/:token").put(authentication, resetpass);
module.exports = router;
