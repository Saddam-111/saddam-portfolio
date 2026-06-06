# Saddam Portfolio

A modern, fully responsive **MERN Stack Portfolio Website** built to showcase projects, skills, experience, testimonials, and contact information. Includes a secure **Admin Dashboard** to manage all portfolio content dynamically with full CRUD functionality.

---

## 🚀 Features

### 🌐 **Frontend**
- Fully responsive UI with a premium, modern design (Vercel × Linear × Stripe hybrid)
- Built using **React 19 + Vite + Tailwind CSS v4**
- Smooth Framer Motion animations and scroll-triggered reveals
- Sections included:
  - Home
  - About
  - Skills
  - Experience
  - Projects (with category filters)
  - Testimonials
  - Contact Form
- Reusable design system with consistent components
- WCAG AA accessible with keyboard navigation and focus states

### 🔐 **Admin Panel**
- Secure JWT-based login with "Remember Me"
- Manage everything from one dashboard:
  - Add / Edit / Delete **Projects**
  - Add / Edit / Delete **Skills**
  - Add / Edit / Delete **Experience**
  - Add / Edit / Delete **Certificates**
  - Upload / Delete **Resume**
  - View / Delete **Contact Messages**
- Image uploads via multipart/form-data
- Modal-based forms for CRUD operations
- Collapsible sidebar with mobile support

### 🛠️ **Backend**
- Built with **Node.js + Express**
- MongoDB database using Mongoose models
- Full CRUD APIs for:
  - Projects
  - Skills
  - Experience
  - Certificates
  - Messages
  - Resume
- JWT-based authentication for Admin
- File upload support

---

## 📂 Project Structure

```
/frontend      -> React Frontend (Vite + Tailwind CSS)
/server        -> Node.js Backend (Express + MongoDB)
```

Key folders:
- `frontend/src/components/` – Reusable UI components & page sections
- `frontend/src/pages/` – Route-level page components
- `frontend/src/context/` – React Context for global state
- `frontend/src/utils/` – Axios client with interceptors
- `server/routes/` – Backend routes
- `server/models/` – Mongoose schemas
- `server/controllers/` – API logic

---

## 🧰 Tech Stack

### **Frontend**
- React 19 + Vite 7
- Tailwind CSS v4
- Framer Motion
- React Router DOM v7
- Axios
- React Icons

### **Backend**
- Node.js + Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Multer / FormData for file uploads

---

## ⚙️ Installation & Setup

### 1️⃣ Clone repository
```bash
git clone <your-repo-link>
cd portfolio
```

### 2️⃣ Install frontend dependencies
```bash
cd frontend
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
PORT=5000
```

Create a `.env` file inside `/frontend`:

```
VITE_API_URL=http://localhost:5000
```

---

## 📸 Screenshots

**Home Page**
<img width="1920" height="1080" alt="Home" src="https://github.com/user-attachments/assets/placeholder" />

**Projects Page**
<img width="1920" height="1080" alt="Projects" src="https://github.com/user-attachments/assets/placeholder" />

**Admin Dashboard**
<img width="1920" height="1080" alt="Admin" src="https://github.com/user-attachments/assets/placeholder" />

---

## 📞 Contact

If you want to connect or check other projects:

**Saddam Ansari**
- GitHub: https://github.com/Saddam-111
- LinkedIn: https://linkedin.com/in/saddam11
- Email: saddam6389046@gmail.com

---

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!
