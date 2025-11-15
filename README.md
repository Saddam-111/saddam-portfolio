# Saddam Portfolio

A modern, fully responsive **MERN Stack Portfolio Website** built to showcase projects, skills, experience, testimonials, and contact information. Includes a secure **Admin Dashboard** to manage all portfolio content dynamically with full CRUD functionality.

---

## 🚀 Features

### 🌐 **Frontend**
- Fully responsive UI with a premium, modern design
- Built using **React + Tailwind CSS**
- Smooth animations and elegant layout
- Sections included:
  - Home
  - About
  - Skills
  - Experience
  - Projects (with filters)
  - Testimonials
  - Contact Form
- Reusable components and clean code architecture

### 🔐 **Admin Panel**
- Secure login system
- Manage everything from one dashboard:
  - Add / Edit / Delete **Projects**
  - Add / Edit / Delete **Skills**
  - Add / Edit / Delete **Experience**
- Image uploads using **Cloudinary**
- Toast notifications & loading states
- Modal-based forms for CRUD operations

### 🛠️ **Backend**
- Built with **Node.js + Express**
- MongoDB database using Mongoose models
- Full CRUD APIs for:
  - Projects
  - Skills
  - Experience
- JWT-based authentication for Admin
- Cloudinary integration for image upload storage

---

## 📂 Project Structure

```
/client        -> React Frontend
/server        -> Node.js Backend
```

Key folders:
- `client/src/components/` – All UI components  
- `client/src/pages/` – Page layouts  
- `server/routes/` – Backend routes  
- `server/models/` – Mongoose schemas  
- `server/controllers/` – API logic  

---

## 🧰 Tech Stack

### **Frontend**
- React  
- Tailwind CSS  
- Axios  
- React Router  
- Cloudinary upload widget  

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Cloudinary  
- JSON Web Token (JWT)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone repository
```bash
git clone <your-repo-link>
cd saddam-portfolio
```

### 2️⃣ Install frontend dependencies
```bash
cd client
npm install
npm run dev
```

### 3️⃣ Install backend dependencies
```bash
cd ../server
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside `/server`:

```
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
```

---

## 📸 Screenshots

<img width="1920" height="1080" alt="Screenshot 2025-11-15 151059" src="https://github.com/user-attachments/assets/c1f9cef3-13a7-4a82-b8c1-dd8292702aa2" />
<img width="1920" height="1080" alt="Screenshot 2025-11-15 151139" src="https://github.com/user-attachments/assets/477f118a-d5ff-4679-a549-37ff07324444" />
<img width="1920" height="1080" alt="Screenshot 2025-11-15 151152" src="https://github.com/user-attachments/assets/dd044903-c868-4582-bf27-9104bd14ffd0" />
<img width="1920" height="1080" alt="Screenshot 2025-11-15 151203" src="https://github.com/user-attachments/assets/6c458080-f38d-4dbb-9f3e-92954730e0eb" />

---

## 📞 Contact

If you want to connect or check other projects:

**Saddam Ansari**  
- GitHub: https://github.com/Saddam-111  
- LinkedIn: https://linkedin.com/in/saddam11  
- Portfolio Link: https://saddam-portfolio-ten.vercel.app

---

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!

