import Availability from "../models/availability.js";

const createAvailability = async (req, res) => {
  try {
    let { name } = req.body;
    if (!name) throw new Error("Please Fill All Valid Fields");

    let nameExists = await Availability.findOne({ name });
    if (nameExists) throw new Error("Availability Already Exists");

    let data = new Availability({ name });
    let saveAvailability = await data.save();

    res.status(201).json({
      success: true,
      message: "Availability Saved SuccessFully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllAvailability = async (req, res) => {
  try {
    let availabilityData = await Availability.find();

    res.status(201).json({
      success: true,
      availability: availabilityData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateAvailability = async (req, res) => {
  try {
    let { name, _id } = req.body;
    if (!name || !_id) throw new Error("Please Fill All Valid Fields");

    let availabilityExists = await Availability.findOne({ _id });
    if (!availabilityExists) throw new Error("Availability Detail Not Found");

    let nameExists = await Availability.findOne({ name });
    if (nameExists) throw new Error("Availability Already Exists");

    let updateAvailabilityData = await Availability.findOneAndUpdate(
      { _id },
      { name }
    );

    res.status(201).json({
      success: true,
      message: "Availability Update SuccessFully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const removeAvailability = async (req, res) => {
  try {
    let { _id } = req.body;
    if (!_id) throw new Error("Please Fill All Valid Fields");

    let availabilityExists = await Availability.find({ _id });
    if (!availabilityExists) throw new Error("Availability Detail Not Found");

    let removeAvailabilityData = await Availability.findOneAndDelete({ _id });

    res.status(201).json({
      success: true,
      message: "Availability Removed SuccessFully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export {
  createAvailability,
  getAllAvailability,
  updateAvailability,
  removeAvailability,
};
