import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Common";

const ResumeView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const resumeUrl = location.state?.resumeUrl || new URLSearchParams(location.search).get("url");

  if (!resumeUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-card rounded-3xl max-w-md w-full p-8 text-center">
          <h2 className="font-display font-bold text-xl text-text-primary mb-2">Resume unavailable</h2>
          <p className="text-text-secondary text-sm mb-6">No resume URL was provided.</p>
          <Button variant="outline" onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3">
        <div className="max-w-7xl mx-auto glass rounded-2xl border border-border h-14 flex items-center justify-between px-4">
          <span className="font-mono text-xs text-text-secondary truncate">resume.pdf</span>
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>Close</Button>
        </div>
      </header>
      <div className="flex-1 pt-24 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          {loading && <div className="glass-card rounded-3xl p-12 text-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" /><p className="font-mono text-sm text-text-secondary">Loading resume...</p></div>}
          {error && <div className="glass-card rounded-3xl p-10 text-center"><p className="text-error font-mono text-sm mb-4">Failed to load resume.</p><Button variant="outline" onClick={() => navigate(-1)}>Go Back</Button></div>}
          <img src={resumeUrl} alt="Resume" onLoad={() => setLoading(false)} onError={() => { setLoading(false); setError(true); }} className="w-full h-auto rounded-3xl border border-border shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)]" style={{ display: loading ? "none" : "block" }} />
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
