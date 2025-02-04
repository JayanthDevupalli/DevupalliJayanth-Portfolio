"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import bb1 from '../assets/bb1.png'
import bb2  from '../assets/bb2.png';
import bb3 from '../assets/bb3.png';
import bb4 from '../assets/bb4.jpg';
import bb5 from '../assets/bb5.jpg';

const projectsData = [
  {
    title: "Budget Boss",
    description:
      "Developed **Budget Boss**, a web app for tracking income, expenses, and transactions via a dynamic, responsive dashboard. Ensured secure data management, empowering users to take control of their finances with confidence.",
    technologies: ["React", "Tailwind CSS", "GitHub", "Google Firebase"],
    images: [bb1,bb2,bb3,bb4,bb5],
  },
  {
    title: "Project 2",
    description: "This project demonstrates my backend development capabilities.",
    technologies: ["Node.js", "Express", "MongoDB"],
    images: [bb2,bb3],
  },
  {
    title: "Project 3",
    description: "This project illustrates my full-stack development skills.",
    technologies: ["Python", "Django", "PostgreSQL"],
    images: [bb4,bb5,bb1],
  },
]

const Projects = () => {
  // const [selectedProject, setSelectedProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    technologies: string[];
    images: string[] | StaticImageData[];
  } | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background with Gradient and Blur Effect (Light Gradient) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 via-pink-200 to-white opacity-50 z-[-1]"></div>
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md bg-white/10 z-[-2]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative w-full h-56">
                <Image
                  src={project.images[index]}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>

                {/* View More Button */}
                <motion.button
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  View More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl w-full max-w-4xl h-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                onClick={() => setSelectedProject(null)}
              >
                ✖
              </button>

              {/* Project Title */}
              <h3 className="text-4xl font-bold mb-6">{selectedProject.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-lg mb-6">{selectedProject.description}</p>

              {/* Technologies Used */}
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used:</h4>
              <ul className="flex flex-wrap gap-3 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Image Gallery (Scrolling) */}
              <div className="overflow-x-auto whitespace-nowrap flex gap-6 py-4">
                {selectedProject.images.map((img, index) => (
                  <div key={index} className="w-60 h-40 relative flex-shrink-0">
                    <Image
                      src={img}
                      alt={`Project Image ${index}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="240px"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects;