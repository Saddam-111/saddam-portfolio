import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AdminContext } from "../../context/AdminContext";
import { images } from "../../assets/asset";
import { Button, Input } from "../Common";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(() => {
    return localStorage.getItem("rememberMe") === "true";
  });
  const { loginAdmin, error, setError } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const remember = localStorage.getItem("rememberMe");
    if (token && remember === "true") {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const success = await loginAdmin(email, password, rememberMe);
      if (success) {
        const token = localStorage.getItem("adminToken");
        if (token) {
          navigate("/admin/dashboard");
        } else {
          setError("Login failed. Please try again.");
        }
      } else {
        setError(error || "Invalid credentials");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-4">
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl grid md:grid-cols-2 bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="hidden md:flex flex-col justify-center items-center p-8 lg:p-10 border-r border-border">
          <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/20 mb-5">
            <img src={images.profile_img} alt="Admin" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-display font-semibold text-xl text-text-primary">Admin Panel</h3>
          <p className="text-text-secondary text-sm mt-2 text-center">
            Manage your portfolio content, view messages, and monitor your online presence.
          </p>
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Authentication</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary mt-1">Welcome back</h2>
            <p className="text-text-secondary text-sm mt-1">Sign in to access the admin panel.</p>
          </div>

          {error && (
            <div className="mb-5 p-3 bg-error/10 border border-error/20 rounded-lg text-error text-sm font-mono">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-text-secondary hover:text-primary transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              }
            />

            <label className="flex items-center gap-2 text-text-secondary text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary focus:ring-2"
              />
              Remember me
            </label>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white font-mono text-sm rounded-lg hover:bg-primary-hover transition-all"
            >
              Sign In
            </button>
          </form>

          <p className="text-text-secondary/50 text-xs text-center mt-6 font-mono">
            Authorized access only
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;