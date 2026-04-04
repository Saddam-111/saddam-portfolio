import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResumeView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const resumeUrl =
    location.state?.resumeUrl ||
    new URLSearchParams(location.search).get("url");

  if (!resumeUrl) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4">
        <div className="border border-[#1f521f] max-w-md w-full">
          <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
            </div>
            <span className="text-[#33ff00] font-mono text-xs ml-2">error.sh</span>
          </div>
          <div className="p-8 text-center">
            <h2 className="font-mono text-xl text-[#ff3333] mb-4">ERROR</h2>
            <p className="font-mono text-sm text-[#666666] mb-6">
              error: no resume found in memory
            </p>
            <button
              onClick={() => navigate(-1)}
              className="font-mono text-xs px-4 py-2 border border-[#33ff00] text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a]"
            >
              [ GO_BACK ]
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-[#0a0a0a] text-[#cccccc] overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(51,255,0,0.1)_50%)] bg-[length:100%_4px]"></div>
      </div>

      {/* Terminal-style Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-[#1f521f]">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
            </div>
            <span className="text-[#33ff00] font-mono text-xs ml-2">resume_viewer.sh</span>
          </div>
          
          <button
            onClick={() => navigate(-1)}
            className="font-mono text-xs text-[#33ff00] hover:text-[#ffb000] transition-colors"
          >
            [ × ] CLOSE
          </button>
        </div>
      </div>

      {/* Resume Viewer */}
      <div className="flex items-center justify-center w-full h-full pt-10">
        <div className="relative w-full h-[calc(100vh-48px)] flex items-center justify-center overflow-hidden">
          {/* Resume Image */}
          <img
            src={resumeUrl}
            alt="Resume"
            onLoad={() => setLoading(false)}
            className="max-w-full max-h-full object-contain"
          />

          {/* Loading */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a]/90 z-10">
              <div className="border-2 border-[#1f521f] border-t-[#33ff00] w-10 h-10 rounded-full animate-spin"></div>
              <p className="font-mono text-xs text-[#33ff00] mt-4">
                $ loading resume...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-[#1f521f] px-4 py-1 flex justify-between items-center">
        <span className="font-mono text-xs text-[#666666]">
          FILE: resume.pdf
        </span>
        <span className="font-mono text-xs text-[#33ff00]">
          user@portfolio:~$ _
        </span>
      </div>
    </div>
  );
};

export default ResumeView;
