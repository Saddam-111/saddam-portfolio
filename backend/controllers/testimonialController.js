import Testimonial from "../models/testimonialModel.js";
import { uploadCloudinary, deleteCloudinary } from "../config/cloudinary.js";

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json({ success: true, testimonials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addTestimonial = async (req, res) => {
  try {
    const { name, role, message } = req.body;
    let image = {};

    if (req.file) {
      const uploadResult = await uploadCloudinary(req.file.path, "testimonials");
      image = { url: uploadResult.secure_url, public_id: uploadResult.public_id };
    }

    const testimonial = new Testimonial({ name, role, message, image });
    await testimonial.save();
    res.status(201).json({ success: true, testimonial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) return res.status(404).json({ success: false, message: "Testimonial not found" });

    if (testimonial.image?.public_id) await deleteCloudinary(testimonial.image.public_id);
    await testimonial.deleteOne();

    res.status(200).json({ success: true, message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
