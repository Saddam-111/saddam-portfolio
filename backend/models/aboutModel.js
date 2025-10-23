import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  description: String,
  profileImage:{
    url: String,
    public_id: String,
  }, // Cloudinary URL
  socialLinks: {
    github: String,
    linkedin: String,
    email: String,
    instagram: String,
  },
}, { timestamps: true });

const About = mongoose.model("About", aboutSchema);
export default About
