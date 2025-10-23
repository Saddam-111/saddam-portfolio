import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  name: String,
  title: String,
  tagline: String,
  profileImage: {
    url: String,
    public_id: String,
  }, // Cloudinary URL
  resumeLink: String,
}, { timestamps: true });

const Hero = mongoose.model("Hero", heroSchema);
export default Hero