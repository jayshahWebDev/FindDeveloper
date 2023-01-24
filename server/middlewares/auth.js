import User from "../models/user.js";
import jwt from "jsonwebtoken";

const isAdmin = async (req, res, next) => {
  try {
    let token = req.cookies.fdT;
    if (!token) throw new Error("Access Denied");

    let verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!verifyToken) throw new Error("Access Denied");

    let userData = await User.findOne({ _id: verifyToken._id });
    if (!userData) throw new Error("Access Denied");

    if (userData.role != "ADMIN") throw new Error("Access Denied");
    req.currentUser = userData;
    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  }
};

const isCandidate = async (req, res, next) => {
  try {
    let token = req.cookies.fdT;
    if (!token) throw new Error("Access Denied");

    let verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!verifyToken) throw new Error("Access Denied");

    let userData = await User.findOne({ _id: verifyToken._id });
    if (!userData) throw new Error("Access Denied");

    if (userData.role != "CANDIDATE") throw new Error("Access Denied");
    req.currentUser = userData;
    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  }
};

const isRecruiter = async (req, res, next) => {
  try {
    let token = req.cookies.fdT;
    if (!token) throw new Error("Access Denied");

    let verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!verifyToken) throw new Error("Access Denied");

    let userData = await User.findOne({ _id: verifyToken._id });
    if (!userData) throw new Error("Access Denied");

    if (userData.role != "RECRUITER") throw new Error("Access Denied");
    req.currentUser = userData;
    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  }
};

export { isAdmin, isCandidate, isRecruiter };
