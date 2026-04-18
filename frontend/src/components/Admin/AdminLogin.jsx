import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { AdminContext } from "../../context/AdminContext";
import { images } from "../../assets/asset";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(() => {
    return localStorage.getItem("rememberMe") === "true";
  });
  const { loginAdmin, error, setError } = useContext(AdminContext);
  const navigate = useNavigate();

  // Check if already logged in with remember me
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const rememberMe = localStorage.getItem("rememberMe");
    if (token && rememberMe === "true") {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const success = await loginAdmin(email, password, rememberMe);
      if (success) {
        setTimeout(() => {
          const token = localStorage.getItem("adminToken");
          if (token) {
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
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden px-3 sm:px-4 py-8 sm:py-10">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(51,255,0,0.1)_50%)] bg-[length:100%_4px]"></div>
      </div>

      {/* Animated terminal glow */}
      <div className="absolute w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-[#33ff00] opacity-5 rounded-full -top-16 sm:-top-20 -left-16 sm:-left-20 blur-2xl sm:blur-3xl"></div>
      <div className="absolute w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-[#ffb000] opacity-05 rounded-full bottom-[-60px] sm:[-100px] right-[-60px] sm:[-90px] blur-2xl sm:blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl border border-[#1f521f]"
      >
        {/* Terminal Header */}
        <div className="border-b border-[#1f521f] p-2 sm:p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
          </div>
          <span className="text-[#33ff00] font-mono text-xs ml-2">admin_login.sh</span>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2">
          {/* Left Section - Hidden on small screens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex flex-col justify-center items-center p-4 sm:p-6 border-r border-[#1f521f]"
          >
            <div className="w-full h-56 lg:h-64 border border-[#1f521f] relative">
              <div className="absolute inset-0 bg-[#0a0a0a]/80 flex flex-col justify-center items-center p-4">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-16 sm:w-20 h-16 sm:h-20 border-2 border-[#33ff00] mb-3"
                >
                  <img
                    src={images.profile_img}
                    alt="Admin"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-[#33ff00] font-mono text-base sm:text-lg tracking-wider">
                  ADMIN_PANEL
                </h3>
                <p className="font-mono text-xs text-[#666666] mt-2 text-center">
                  Manage • Monitor • Maintain<br />
                  <span className="text-[#ffb000]">
                    Secure access only
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Login Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleLogin}
            className="p-4 sm:p-6 md:p-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-[#33ff00] text-center mb-2" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              <span className="text-[#ffb000]">$</span> ADMIN_LOGIN
            </h2>
            <p className="font-mono text-xs text-[#666666] text-center mb-4 sm:mb-6">
              Enter your credentials to continue
            </p>

            {error && (
              <p className="text-[#ff3333] font-mono text-xs text-center bg-[#ff3333]/10 border border-[#ff3333] p-2 mb-3 sm:mb-4">
                error: {error}
              </p>
            )}

            {/* Email */}
            <div className="mb-3 sm:mb-4">
              <label className="block font-mono text-xs text-[#ffb000] mb-1">
                <span className="text-[#33ff00]">$</span> email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#33ff00] font-mono text-sm">
                  {" >"}
                </span>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  className="w-full bg-[#0a0a0a] border border-[#1f521f] px-4 py-2 pl-8 font-mono text-xs sm:text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00] focus:shadow-[0_0_10px_rgba(51,255,0,0.3)]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-3 sm:mb-4">
              <label className="block font-mono text-xs text-[#ffb000] mb-1">
                <span className="text-[#33ff00]">$</span> password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#33ff00] font-mono text-sm">
                  {" >"}
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="w-full bg-[#0a0a0a] border border-[#1f521f] px-4 py-2 pl-8 pr-10 font-mono text-xs sm:text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00] focus:shadow-[0_0_10px_rgba(51,255,0,0.3)]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#33ff00] transition-colors text-xs sm:text-sm"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-2 font-mono text-xs text-[#666666] mb-3 sm:mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-[#33ff00] bg-[#0a0a0a] border border-[#1f521f]"
              />
              <span className={rememberMe ? "text-[#33ff00]" : ""}>
                {rememberMe ? "[✓]" : "[ ]"} remember_me
              </span>
            </label>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-2.5 sm:py-3 bg-[#1f521f] text-[#33ff00] font-mono text-xs sm:text-sm border border-[#1f521f] hover:bg-[#33ff00] hover:text-[#0a0a0a] transition-all"
            >
              [ EXECUTE_LOGIN ]
            </motion.button>

            <p className="font-mono text-xs text-[#666666] text-center mt-4">
              {/* Only authorized users can access this section. */}
              <span className="text-[#ffb000]">#</span> authorized access only
            </p>
          </motion.form>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1f521f] p-2 sm:p-3 flex justify-between items-center">
          <button
            onClick={handleBackToHome}
            className="font-mono text-xs text-[#33ff00] hover:text-[#ffb000] transition-colors"
          >
            [ &lt; ] BACK_TO_HOME
          </button>
          <span className="font-mono text-xs text-[#33ff00]">
            user@admin:~$ _
          </span>
        </div>
      </motion.div>
    </div>
  );
}
