import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: String,
  position: String,
  message: String,
  image: {
    url: String,
    public_id: String,
  } // Cloudinary URL
}, { timestamps: true });

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial