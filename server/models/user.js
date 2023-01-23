import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    profileURL: { type: String },
    role: {
      type: String,
      enum: ["ADMIN", "CANDIDATE", "RECRUITER"],
      default: "CANDIDATE",
    },
    isVerify: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    linkedInProfile: { type: String },
    githubProfile: { type: String },
    portfolioWebsite: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const User = new model("User", userSchema);

export default User;
