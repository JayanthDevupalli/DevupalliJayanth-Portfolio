"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const educationData = [
  {
    degree: "Bachelors of Technology",
    field: "Computer Science and Engineering",
    school: "ACE ENGINEERING COLLEGE, Ghatkesar",
    year: "2022 - 2026",
    description:
      "Focus on machine learning and artificial intelligence. Completed a thesis on neural networks for natural language processing.",
    color: "#4F46E5", // Indigo
  },
  {
    degree: "Intermediate",
    field: "MPC (Mathematics, Physics & Chemistry)",
    school: "Deeksha Junior College, Madhapur",
    year: "2020 - 2022",
    description:
      "Completed Intermediate with a focus on Mathematics, Physics, and Chemistry, developing strong analytical and problem-solving skills.",
    color: "#059669", // Emerald
  },
  {
    degree: "SSC",
    field: "",
    school: "Dr. KKR Gowtham Concept School",
    year: "2019 - 2020",
    description:
      "Completed 10th class, gaining a solid foundation in core subjects like Mathematics, Science, and English.",
    color: "#D97706", // Amber
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-gray-900">My Educational Journey</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden sm:block z-0" />

          {educationData.map((edu, index) => (
            <TimelineItem key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// const TimelineItem = ({ edu, index }) => {
  const TimelineItem = ({ edu, index }: { edu: { degree: string; field: string; school: string; year: string; description: string; color: string }; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-12 flex flex-col sm:flex-row items-center sm:items-start"
    >
      {/* Timeline Icon */}
      <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10 sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={edu.color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>

      <div
        className={`w-full sm:w-1/2 px-6 ${index % 2 === 0 ? "sm:order-last sm:pl-10" : "sm:pr-10"}`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg"
          style={{ borderTop: `4px solid ${edu.color}` }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
          <p className="text-lg font-medium" style={{ color: edu.color }}>
            {edu.field}
          </p>
          <p className="text-gray-600 mb-2">{edu.school}</p>
          <p className="text-gray-500 mb-4">{edu.year}</p>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </motion.button>
          <AnimatePresence>
            {isExpanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-gray-700 mt-4"
              >
                {edu.description}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Timeline Icon (for larger screens) */}
      <div className="hidden sm:flex w-1/2 justify-center">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke={edu.color}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Education
