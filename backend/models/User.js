// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const UserSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Please enter your name."],
//     },
//     phoneNumber: {
//       type: String,
//       required: [true, "Please enter your phone number."],
//       validate: {
//         validator: function (v) {
//           return /^\d{10}$/.test(v);
//         },
//         message: (props) =>
//           `${props.value} is not a valid phone number. Please enter a 10-digit number.`,
//       },
//     },
//     password: {
//       type: String,
//       required: [true, "Please enter a password."],
//       minlength: [6, "Password should be at least 6 characters long."],
//     },
//     avatar: {
//       public_id: String,
//       url: String,
//     },
//     role: {
//       type: String,
//       default: "patient ", // Default value set to "patient "
//     },
//     tokenOfChangePassword: {
//       type: String,
//     },
//     OTP: {
//       type: Number,
//       minLength: [4, "OTP must be at least 4 characters long."],
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// UserSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

// UserSchema.methods.matchpass = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// UserSchema.methods.gentoken = function () {
//   return jwt.sign({ _id: this._id }, process.env.SEC);
// };
// module.exports = mongoose.model("User", UserSchema);
