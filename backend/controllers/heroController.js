import Hero from "../models/heroModel.js";
import { uploadCloudinary, deleteCloudinary } from "../config/cloudinary.js";

export const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne();
    res.status(200).json({ success: true, hero });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateHero = async (req, res) => {
  try {
    const { title, subtitle } = req.body;

    let hero = await Hero.findOne();
    if (!hero) hero = new Hero();

    hero.title = title;
    hero.subtitle = subtitle;

    if (req.file) {
      const uploadResult = await uploadCloudinary(req.file.path, "hero");
      hero.profileImage = {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      };
    }

    await hero.save();
    res.status(200).json({ success: true, hero });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
