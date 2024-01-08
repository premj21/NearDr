const { Doctor, Patient } = require("../models/usr.js");

const RequestForAp = async (req, res) => {
  try {
    const { id } = req.params;
    const doctorId = id;
    const patientId = req.user._id;

    const doctor = await Doctor.findById(doctorId);
    const patient = await Patient.findById(patientId);

    if (!doctor || !patient) {
      throw new Error("Doctor or patient not found");
    }
    // Update Doctor's patientRequestList
    const existingRequest = patient.requests.find(
      (request) => String(request.doctorInfo) === String(doctorId)
    );
    if (existingRequest) {
      return res
        .status(401)
        .json({ success: false, message: "You already Requested" });
    }
    doctor.patientRequestList.push(patientId);
    await doctor.save();
    // Update Patient's requests
    patient.requests.push({ doctorInfo: doctorId, accepted: false });
    await patient.save();

    res.status(200).json({ success: true, message: "Request Sent" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const DeleteRequest = async (req, res) => {
  try {
    const doctor = await Doctor.findById(doctorId);
    const patient = await Patient.findById(patientId);

    if (!doctor || !patient) {
      throw new Error("Doctor or patient not found");
    }
    // Remove the doctor's ID from the patient's requests
    patient.requests = patient.requests.filter(
      (request) => String(request.doctorInfo) !== String(doctorId)
    );
    await patient.save();
    // Remove the patient's ID from the doctor's patientRequestList
    doctor.patientRequestList = doctor.patientRequestList.filter(
      (patient) => String(patient) !== String(patientId)
    );
    await doctor.save();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const findNearDoctor = async (req, res) => {
  try {
    const patientLocation = await Patient.findById(req.user._id).select({
      _id: 0,
      "location.coordinates": 1,
    });
    if (!patientLocation) {
      return;
    }
    let longitude = patientLocation.location.coordinates[0];
    let latitude = patientLocation.location.coordinates[1];
    const maxDistanceMeters = 10 * 1000; // Convert kilometers to meters
    const doctorsNearPatient = await Doctor.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          distanceField: "distance",
          maxDistance: maxDistanceMeters,
          spherical: true,
        },
      },
    ]);
    return res.status(201).json({ success: true, users: doctorsNearPatient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const acceptrequest = async (req, res) => {
  try {
    if (req.user._role != "patient") {
      const { id } = req.params.id;
      const doctor = await Doctor.findById(req.user._id);
      let ind = -1;
      doctor.patientRequestList.map((p, i) => {
        if (p.patientId == id) {
          ind = i;
        }
      });
      if (ind == -1) {
        return res
          .status(401)
          .json({ success: false, message: "No request found" });
      }
      doctor.patientRequestList[ind].accepted = true;
      await doctor.save();
      res.status(201).json({ success: true, message: "Request Accepted" });
    } else {
      res.status(401).json({ success: false, message: "Not Authorized" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { RequestForAp, findNearDoctor, DeleteRequest, acceptrequest };
