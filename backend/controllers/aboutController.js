import About from "../models/aboutModel.js";
import { uploadCloudinary } from "../config/cloudinary.js";

export const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.status(200).json({ success: true, about });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateAbout = async (req, res) => {
  try {
    const { description, socialLinks } = req.body;

    let about = await About.findOne();
    if (!about) {
      about = new About(); // create if not exists
    }

    about.description = description;
    if (socialLinks) about.socialLinks = socialLinks; // expect object

    if (req.file) {
      const uploadResult = await uploadCloudinary(req.file.path, "about");
      about.profileImage = {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      };
    }

    await about.save();
    res.status(200).json({ success: true, about });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
