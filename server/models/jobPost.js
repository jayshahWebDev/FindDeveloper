import { Schema, model } from "mongoose";

const jobPostSchema = new Schema({
  techStack: { type: String },
  employeeStrength: { type: String },
  jobDescription: { type: String },
  companyName: { type: String },
  companyInfo: { type: String },
  companyLinkedInProfile: { type: String },
  companyWebsite: { type: String },
  companyLocation: { type: String },
  experienceRequired: { type: String },
  jobType: { type: String },
  workType: { type: String },
  jobVacancy: { type: String },
  workingHour: { type: String },
  salaryDetail: { type: String },
  designationDetail: { type: String },
});

const JobPost = new model("JobPost", jobPostSchema);

export default JobPost;
