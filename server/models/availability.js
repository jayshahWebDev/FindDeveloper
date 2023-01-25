import { Schema, model } from "mongoose";

const availabilitySchema = new Schema(
  {
    name: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const Availability = new model("Availability", availabilitySchema);

export default Availability;
