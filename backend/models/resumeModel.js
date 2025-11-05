import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    resumeFile: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;
