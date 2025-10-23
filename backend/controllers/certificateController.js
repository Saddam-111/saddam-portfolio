import Certificate from "../models/certificateModel.js";
import { uploadCloudinary, deleteCloudinary } from "../config/cloudinary.js";

export const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, certificates });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addCertificate = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    let certificateImage = {};

    if (req.file) {
      const uploadResult = await uploadCloudinary(req.file.path, "certificates");
      certificateImage = {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      };
    }

    const certificate = new Certificate({
      title,
      description,
      link,
      certificateImage,
    });

    await certificate.save();
    res.status(201).json({ success: true, certificate });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate)
      return res
        .status(404)
        .json({ success: false, message: "Certificate not found" });

    if (certificate.certificateImage?.public_id)
      await deleteCloudinary(certificate.certificateImage.public_id);

    await certificate.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Certificate deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
