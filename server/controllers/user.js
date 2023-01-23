import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const signUp = async (req, res) => {
  try {
    let {
      name,
      email,
      password,
      role,
      profileURL,
      linkedInProfile,
      githubProfile,
      portfolioWebsite,
    } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !role ||
      !profileURL ||
      !linkedInProfile
    )
      throw new Error("Please Pass All Required Fields");

    if (role != "ADMIN" && role != "CANDIDATE" && role != "RECRUITER")
      throw new Error("Please Pass Valid Details");

    let findUser = await User.findOne({
      $or: [{ email }, { linkedInProfile }],
    });
    if (findUser) throw new Error("User Already Exists");

    let encryptedPassword = await bcrypt.hash(password, 10);
    let data = {
      name,
      email,
      password: encryptedPassword,
      role,
      profileURL,
      linkedInProfile,
      githubProfile,
      portfolioWebsite,
    };

    let newUser = new User(data);
    let saveUser = await newUser.save();
    let token = jwt.sign({ _id: newUser._id }, process.env.SECRET_KEY);

    res.cookie("fdT", token);

    res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const signIn = async (req, res) => {
  try {
    let { email, password, role } = req.body;

    if (!email || !password || !role)
      throw new Error("Please Pass All Required Fields");

    if (role != "ADMIN" && role != "CANDIDATE" && role != "RECRUITER")
      throw new Error("Please Pass Valid Details");

    let findUser = await User.findOne({ email, role });
    if (!findUser) throw new Error("Invalid Credentials");

    let comparePassword = await bcrypt.compare(password, findUser.password);
    if (!comparePassword) throw new Error("Invalid Credentials");
    let token = jwt.sign({ _id: findUser._id }, process.env.SECRET_KEY);

    res.cookie("fdT", token);

    res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { signUp, signIn };
