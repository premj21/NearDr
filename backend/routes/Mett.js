const express = require("express");
const authentication = require("../middlewares/authentication");
const {
  RequestForAp,
  findNearDoctor,
  acceptrequest,
} = require("../Controllers/Mett.js");

const router = express.Router();

// router.route("/register").post(register);
router.route("/:id").get(authentication, RequestForAp);
router.route("/user/profile/nearDr").get(authentication, findNearDoctor);
router.route("/user/:id").get(authentication, acceptrequest);

module.exports = router;
