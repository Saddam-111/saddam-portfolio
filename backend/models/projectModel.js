import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true }, // ✅ added for filtering
    description: { type: String, required: true },
    techStack: [String],
    github: String,
    live: String, // ✅ renamed from demo -> live
    thumbnail: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
