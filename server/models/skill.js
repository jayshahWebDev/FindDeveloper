import { Schema, model } from "mongoose";

const skillSchema = new Schema(
  {
    name: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const Skill = new model("Skill", skillSchema);

export default Skill;
