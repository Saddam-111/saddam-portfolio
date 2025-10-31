import React, { useState, useEffect } from "react";
import AnimatedSection from "../Common/AnimatedSection";
import ProjectFilters from "./ProjectFilters";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
        setProjects(res.data.projects);
        console.log(res.data.projects)
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-gray-950 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Loading Featured Projects...
        </h2>
      </section>
    );
  }

  return (
    <AnimatedSection>
      <section className="py-20 bg-white dark:bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        <ProjectFilters
          categories={categories}
          onFilter={setFilter}
        />

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={35}
              tiltMaxAngleY={30}
              glareEnable={true}
              glareMaxOpacity={0.3}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg mb-4 w-full h-40 object-cover"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.description
    ? project.description.split(" ").slice(0, 25).join(" ") +
      (project.description.split(" ").length > 25 ? "..." : "")
    : ""}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-900 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-8">
          <Slider {...sliderSettings}>
            {filteredProjects.map((project, idx) => (
              <div key={idx} onClick={() => setSelectedProject(project)}>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                >
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow-lg mx-4">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg mb-4 w-full h-40 object-cover"
                      />
                    )}
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </Tilt>
              </div>
            ))}
          </Slider>
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </section>
    </AnimatedSection>
  );
};

export default FeaturedProjects;
