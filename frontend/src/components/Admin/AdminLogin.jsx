import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { AdminContext } from "../../context/AdminContext";
import { images } from "../../assets/asset";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { loginAdmin, error, setError } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error

    try {
      const success = await loginAdmin(email, password);

      if (success) {
        // Wait a moment for state updates
        setTimeout(() => {
          const token = localStorage.getItem("adminToken");
          if (token) {
            if (rememberMe) localStorage.setItem("rememberMe", "true");
            navigate("/admin/dashboard");
          } else {
            setError("Login failed. Please try again.");
          }
        }, 300);
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleBackToHome = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 to-blue-600 relative overflow-hidden">
      {/* Background floating shapes */}
      <span className="absolute w-72 h-72 bg-pink-400 opacity-30 rounded-full top-[-100px] left-[-100px] animate-spin-slow"></span>
      <span className="absolute w-96 h-96 bg-blue-400 opacity-20 rounded-full bottom-[-150px] right-[-120px] animate-pulse-slow"></span>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Left Image Section */}
        <div className="hidden md:flex flex-col justify-center items-center h-full w-full gap-6">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images.login_bg}
              alt="Admin Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <img
                  src={images.profile_img}
                  alt="Admin"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-3xl font-bold">Secure Access Panel</h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed mt-2">
                Manage, Monitor, and Maintain Your Application
                <br />
                <span className="font-medium">
                  Admin Controls • Analytics • User Management
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Login Form */}
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-2xl flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
            Admin Login
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
            Enter your credentials to access the admin dashboard.
          </p>

          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:text-pink-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember Me */}
          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 accent-pink-600"
            />
            Remember Me
          </label>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-4 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-700 transition-all"
          >
            Login
          </motion.button>

          <p className="text-gray-500 dark:text-gray-400 text-center mt-2 text-sm">
            Only authorized users can access this section.
          </p>
        </form>
      </motion.div>

      {/* Back to Home Button */}
      <motion.button
  whileHover={{ scale: 1.05, y: -4 }}  // Slight upward shift for parallax effect
  whileTap={{ scale: 0.95, y: 2 }}    // Downward shift for tap effect
  onClick={handleBackToHome}
  className="absolute bottom-5 left-2/5 transform -translate-x-1/2 py-3 px-6 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg shadow-xl text-gray-900 font-semibold transition-all duration-300 ease-in-out"
  style={{
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",  // Adding subtle shadow for depth
    backdropFilter: "blur(10px)",  // Glassmorphism effect
    border: "1px solid rgba(255, 255, 255, 0.2)"  // Light border for more definition
  }}
>
  Back to Home
</motion.button>

      {/* Animations */}
      <style>{`
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }
        @keyframes spin { 0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);} }
        @keyframes pulse { 0%,100% {transform: scale(1); opacity: 0.2;} 50% {transform: scale(1.3); opacity: 0.4;} }
      `}</style>
    </div>
  );
}
