import React, { createContext, useState } from "react";
import API from "../utils/api";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [messages, setMessages] = useState([]);

  // ✅ Login Function
  const loginAdmin = async (email, password) => {
    try {
      setLoading(true);
      const res = await API.post("/admin/login", { email, password });

      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("adminToken", res.data.token);
        setIsAuthenticated(true);
        return true;
      } else {
        setError(res.data.message || "Invalid credentials");
        return false;
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout Function
  const logoutAdmin = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("adminToken");
  };

  // ✅ Data Fetching Functions
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await API.get("/projects");
      setProjects(res.data.projects || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const res = await API.get("/skills");
      setSkills(res.data.skills || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchExperience = async () => {
    try {
      setLoading(true);
      const res = await API.get("/experience");
      setExperience(res.data.experience || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const res = await API.get("/certificates");
      setCertificates(res.data.certificates || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const res = await API.get("/messages");
      setMessages(res.data.messages || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        token,
        isAuthenticated,
        loginAdmin,
        logoutAdmin,
        projects,
        fetchProjects,
        skills,
        fetchSkills,
        experience,
        fetchExperience,
        testimonials,
        certificates,
        fetchCertificates,
        messages,
        fetchMessages,
        loading,
        error,
        setError,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
