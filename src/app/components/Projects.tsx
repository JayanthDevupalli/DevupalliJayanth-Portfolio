"use client"

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import bb1 from "../assets/bb1.png";
import bb2 from "../assets/bb2.png";
import bb3 from "../assets/bb3.png";
import bb4 from "../assets/bb4.jpg";
import bb5 from "../assets/bb5.jpg";


interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: (string | StaticImageData)[];
}

interface ProjectsProps {
  setSelectedProject: (project: Project | null) => void;
}

const projectsData: Project[] = [
  {
    title: "Budget Boss",
    description:
      "Developed 'Budget Boss', a web app for tracking income, expenses, and transactions via a dynamic, responsive dashboard. Ensured secure data management, empowering users to take control of their finances with confidence.",
    technologies: ["React", "Tailwind CSS", "GitHub", "Google Firebase"],
    images: [bb1, bb2, bb3, bb4, bb5],
  },
  {
    title: "Project 2",
    description: "This project demonstrates my backend development capabilities.",
    technologies: ["Node.js", "Express", "MongoDB"],
    images: [bb2, bb3],
  },
  {
    title: "Project 3",
    description: "This project illustrates my full-stack development skills.",
    technologies: ["Python", "Django", "PostgreSQL"],
    images: [bb4, bb5, bb1],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 opacity-50 z-[-1]"></div>
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-xl bg-white/30 z-[-2]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center text-gray-900"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};


interface ProjectCardProps {
  project: Project;
  index: number;
  setSelectedProject: (project: Project | null) => void;
}

const ProjectCard = ({ project, index, setSelectedProject }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      {/* Project Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{project.title}</h3>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        <motion.button
          onClick={() => setSelectedProject(project)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition duration-300"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

// Typing the props for ProjectModal
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 15 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="flex justify-between items-center p-6">
            <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition duration-150"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Image Gallery */}
          <div className="mb-8">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
              {project.images.map((img, index) => (
                <div key={index} className="flex-shrink-0 w-80 h-48 snap-center">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={320}
                    height={192}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2">Description</h4>
            <p className="text-gray-700">{project.description}</p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
