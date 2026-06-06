import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Common";

const ResumeView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const resumeUrl =
    location.state?.resumeUrl || new URLSearchParams(location.search).get("url");

  if (!resumeUrl) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-surface border border-border rounded-2xl max-w-md w-full p-8 text-center">
          <div className="text-4xl mb-4">📄</div>
          <h2 className="font-display font-bold text-xl text-text-primary mb-2">No Resume Found</h2>
          <p className="text-text-secondary text-sm mb-6">
            No resume URL was provided. Please navigate from a valid link.
          </p>
          <Button variant="outline" onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14">
          <span className="font-mono text-xs text-text-secondary">resume.pdf</span>
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>Close ✕</Button>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center w-full pt-14">
        <div className="w-full max-w-5xl px-4 py-8">
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4" />
              <p className="font-mono text-sm text-text-secondary">Loading resume...</p>
            </div>
          )}
          {error && (
            <div className="text-center py-20">
              <p className="text-error font-mono text-sm">Failed to load resume.</p>
              <Button variant="outline" className="mt-4" onClick={() => navigate(-1)}>Go Back</Button>
            </div>
          )}
          <img
            src={resumeUrl}
            alt="Resume"
            onLoad={() => setLoading(false)}
            onError={() => { setLoading(false); setError(true); }}
            className="w-full h-auto rounded-xl shadow-lg border border-border"
            style={{ display: loading ? "none" : "block" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
