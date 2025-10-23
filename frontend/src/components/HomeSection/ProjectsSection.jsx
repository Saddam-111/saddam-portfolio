import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch projects from backend
  const fetchProjects = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/projects`
      );
      if (data.success) {
        // Optionally show only top 3 for "Featured"
        setProjects(data.projects.slice(0, 3));
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="py-20 text-center bg-white dark:bg-gray-950">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        Featured Projects
      </h2>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No projects found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 px-6">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              {/* ✅ Project Thumbnail */}
              {project.thumbnail?.url ? (
                <img
                  src={project.thumbnail.url}
                  alt={project.title}
                  className="h-40 w-full object-cover rounded-xl mb-4"
                />
              ) : (
                <div className="h-40 bg-gradient-to-br from-pink-400 to-blue-400 rounded-xl mb-4"></div>
              )}

              {/* ✅ Project Info */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                  {project.description ||
                    "A modern web app built with MERN stack."}
                </p>
              </div>

              {/* ✅ Links */}
              <div className="mt-auto flex justify-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Link
        to="/projects"
        className="block mt-8 text-pink-600 hover:underline font-medium"
      >
        View All Projects →
      </Link>
    </section>
  );
};

export default ProjectsSection;
