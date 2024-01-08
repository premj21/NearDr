const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["doctor", "patient"],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum length for the password
    },
    otp: {
      type: String,
    },
    tokenForForgotPassword: {
      type: String,
    },
    avatar: {
      public_id: String,
      url: String,
    },
    // Doctor specific fields
    patientRequestList: [
      {
        patientId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Patient", // Reference to Patient model
        },
        accepted: {
          type: Boolean,
          default: false,
        },
        requestTime: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    historyOfPatients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient", // Reference to Patient model
      },
    ],

    // Patient specific fields
    requests: [
      {
        doctorInfo: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Doctor", // Reference to Doctor model
        },
        accepted: {
          type: Boolean,
          default: false,
        },
      },
    ],

    // location of the user

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [0, 0], // default longitude and latitude
      },
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.index({ "location.coordinates": "2dsphere" });
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

UserSchema.methods.matchpass = async function (password) {
  return await bcrypt.compare(password, this.password);
};
UserSchema.methods.gentoken = function () {
  return jwt.sign({ _id: this._id, _role: this.role }, process.env.SEC);
};
const Doctor = mongoose.model("Doctor", UserSchema);
const Patient = mongoose.model("Patient", UserSchema);
module.exports = { Doctor, Patient };
