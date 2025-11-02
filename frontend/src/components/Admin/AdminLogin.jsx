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
    setError("");
    try {
      const success = await loginAdmin(email, password);
      if (success) {
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
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-linear-to-br from-pink-500 via-purple-600 to-blue-600 relative overflow-hidden px-4 py-10">
      {/* Background Orbs */}
      <div className="absolute w-72 h-72 bg-pink-400 opacity-25 rounded-full -top-20 -left-20 animate-spin-slow blur-3xl"></div>
      <div className="absolute w-80 h-80 bg-blue-400 opacity-20 rounded-full bottom-[-100px] right-[-90px] animate-pulse-slow blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6 md:p-10 flex flex-col md:grid md:grid-cols-2 gap-8"
      >
        {/* Left Section (Hidden on small screens) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex flex-col justify-center items-center text-center space-y-6"
        >
          <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
            <img
              src={images.login_bg}
              alt="Admin Background"
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-6">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4"
              >
                <img
                  src={images.profile_img}
                  alt="Admin"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-white text-3xl font-bold tracking-wide">
                Admin Control Panel
              </h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Manage • Monitor • Maintain <br />
                <span className="font-semibold text-pink-300">
                  Access your secure dashboard
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Login Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleLogin}
          className="bg-white/30 dark:bg-gray-900/50 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-lg border border-white/20 flex flex-col gap-5"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white">
            🔐 Admin Login
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base">
            Please enter your credentials below.
          </p>

          {error && (
            <p className="text-red-500 text-center text-sm bg-red-50 p-2 rounded-lg">
              {error}
            </p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 md:p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all text-sm md:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 md:p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all text-sm md:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:text-pink-600 transition"
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

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 md:py-4 bg-linear-to-r from-pink-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all text-sm md:text-base"
          >
            Login
          </motion.button>

          <p className="text-gray-500 dark:text-gray-400 text-center text-xs md:text-sm mt-3">
            Only authorized users can access this section.
          </p>
        </motion.form>
      </motion.div>

      {/* Back to Home Button */}
      <motion.button
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95, y: 2 }}
        onClick={handleBackToHome}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 py-2.5 px-5 rounded-xl bg-white/20 backdrop-blur-md shadow-lg text-white text-sm md:text-base font-medium border border-white/30 hover:bg-white/30 transition-all"
      >
        ⬅ Back to Home
      </motion.button>

      {/* Animations */}
      <style>{`
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-pulse-slow { animation: pulse 10s ease-in-out infinite; }
        @keyframes spin { 0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);} }
        @keyframes pulse { 0%,100% {transform: scale(1); opacity: 0.2;} 50% {transform: scale(1.3); opacity: 0.4;} }
      `}</style>
    </div>
  );
}
