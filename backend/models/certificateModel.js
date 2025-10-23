// models/certificateModel.js
import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    link: { type: String },
    certificateImage: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);

const Certificate = mongoose.model("Certificate", certificateSchema);
export default Certificate;
