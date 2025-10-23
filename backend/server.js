import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { connectDB } from './config/db.js'
import adminRoute from './routes/adminRoute.js'
import aboutRoute from './routes/adminRoute.js'
import heroRoute from './routes/heroRoute.js'
import skillRoute from './routes/skillRoute.js'
import experienceRoute from './routes/experienceRoute.js'
import projectRoute from './routes/projectRoute.js'
import testimonialRoute from './routes/testimonialRoute.js'
import certificateRoute from './routes/certificateRoute.js'
import messageRoute from './routes/messageRoute.js'



const app = express()
const PORT = process.env.PORT
await connectDB()

//middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors({
  origin: ['http://localhost:5173', 'https://saddam-portfolio-ten.vercel.app'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

//routes
app.use("/api/admin", adminRoute);
app.use("/api/about", aboutRoute);
app.use("/api/hero", heroRoute);
app.use("/api/skills", skillRoute);
app.use("/api/experience", experienceRoute);
app.use("/api/projects", projectRoute);
app.use("/api/testimonials", testimonialRoute);
app.use("/api/certificates", certificateRoute);
app.use("/api/messages", messageRoute);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running 🚀");
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));