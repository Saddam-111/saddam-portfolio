import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: String, // e.g. Frontend, Backend, Tools
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    default: "Intermediate",
  },
  icon:{
    url: String,
    public_id: String,
  }, // Cloudinary URL for icon
}, { timestamps: true });

const Skill = mongoose.model("Skill", skillSchema);
export default Skill