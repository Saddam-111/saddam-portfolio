import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaShieldHalved } from "react-icons/fa6";
import { AdminContext } from "../../context/AdminContext";
import { images } from "../../assets/asset";
import { Input } from "../Common";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(() => localStorage.getItem("rememberMe") === "true");
  const { loginAdmin, error, setError } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const remember = localStorage.getItem("rememberMe");
    if (token && remember === "true") navigate("/admin/dashboard");
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const success = await loginAdmin(email, password, rememberMe);
      if (success && localStorage.getItem("adminToken")) navigate("/admin/dashboard");
      else if (!success) setError(error || "Invalid credentials");
      else setError("Login failed. Please try again.");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(139,92,246,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.14),transparent_35%)]" />
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="relative z-10 w-full max-w-5xl grid lg:grid-cols-[0.95fr_1.05fr] glass-card rounded-[2rem] overflow-hidden">
        <div className="hidden lg:flex flex-col justify-between p-8 xl:p-10 border-r border-border bg-gradient-to-b from-white/[0.02] to-transparent">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-secondary font-mono text-[11px] uppercase tracking-[0.18em]"><FaShieldHalved /> Secure Access</div>
            <h2 className="mt-5 font-display font-bold text-3xl text-text-primary">Admin Control Center</h2>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-sm">Manage projects, skills, experience, certificates, messages, and resume content with a premium dashboard experience.</p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <img src={images.profile_img} alt="Admin" className="w-16 h-16 rounded-2xl object-cover border border-border" />
            <div><p className="font-display font-semibold text-text-primary">Saddam Ansari</p><p className="text-xs text-text-secondary font-mono">Portfolio Administrator</p></div>
          </div>
        </div>
        <div className="p-6 sm:p-8 xl:p-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary">Authentication</span>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-text-primary mt-2">Welcome back</h1>
          <p className="text-text-secondary text-sm mt-2">Sign in to continue to your dashboard.</p>
          {error && <div className="mt-5 p-3.5 bg-error/10 border border-error/20 rounded-xl text-error text-sm font-mono">{error}</div>}
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <Input label="Email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input label="Password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required rightElement={<button type="button" onClick={() => setShowPassword(!showPassword)} className="text-text-secondary hover:text-accent transition-colors" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>} />
            <label className="flex items-center gap-2 text-text-secondary text-sm cursor-pointer select-none">
              <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-4 h-4 rounded border-border bg-background text-primary focus:ring-primary/30" />
              Remember this device
            </label>
            <button type="submit" className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:brightness-110 transition-all shadow-[0_16px_35px_-18px_rgba(139,92,246,0.55)]">Sign In</button>
          </form>
          <p className="text-text-secondary/55 text-xs text-center mt-6 font-mono">Authorized access only</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;