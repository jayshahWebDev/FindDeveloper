import Skill from "../models/skill.js";

const createSkill = async (req, res) => {
  try {
    let { name } = req.body;
    if (!name) throw new Error("Please Fill All Valid Fields");

    let nameExists = await Skill.findOne({ name });
    if (nameExists) throw new Error("Skill Already Exists");

    let data = new Skill({ name });
    let saveSkill = await data.save();

    res.status(201).json({
      success: true,
      message: "Skill Saved SuccessFully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllSkill = async (req, res) => {
  try {
    let { name } = req.body;
    let skillData = await Skill.find({
      name: { $regex: ".*" + name + ".*", $options: "i" },
    });

    res.status(201).json({
      success: true,
      skills: skillData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateSkill = async (req, res) => {
  try {
    let { name, _id } = req.body;
    if (!name || !_id) throw new Error("Please Fill All Valid Fields");

    let skillExists = await Skill.findOne({ _id });
    if (!skillExists) throw new Error("Skill Detail Not Found");

    let nameExists = await Skill.findOne({ name });
    if (nameExists) throw new Error("Skill Already Exists");

    let updateSkillData = await Skill.findOneAndUpdate({ _id }, { name });

    res.status(201).json({
      success: true,
      message: "Skill Update SuccessFully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const removeSkill = async (req, res) => {
  try {
    let { _id } = req.body;
    if (!_id) throw new Error("Please Fill All Valid Fields");

    let skillExists = await Skill.find({ _id });
    if (!skillExists) throw new Error("Skill Detail Not Found");

    let removeSkillData = await Skill.findOneAndDelete({ _id });

    res.status(201).json({
      success: true,
      message: "Skill Removed SuccessFully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { createSkill, getAllSkill, updateSkill, removeSkill };
