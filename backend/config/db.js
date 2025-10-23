import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("Database Connected Successfully.")
  } catch (error) {
    console.log("Database connection failed!")
    process.exit(1)
  }
}