"use client"
import { motion } from "framer-motion"

const educationData = [
  {
    degree: "Bachelors of Technology",
    field: "Computer Science and Engineering",
    school: "ACE ENGINEERING COLLEGE, Ghatkesar",
    year: "2022 - 2026",
    description:
      "Focus on machine learning and artificial intelligence. Completed a thesis on neural networks for natural language processing.",
  },
  {
    degree: "Intermediate",
    field: "MPC (Mathematics, Physics & Chemistry)",
    school: "Deeksha Junior College, Madhapur",
    year: "2020 - 2022",
    description:
      "Completed Intermediate with a focus on Mathematics, Physics, and Chemistry, developing strong analytical and problem-solving skills.",
  },
  {
    degree: "SSC",
    field: "",
    school: "Dr. KKR Gowtham Concept School",
    year: "2019 - 2020",
    description:
      "Completed 10th class, gaining a solid foundation in core subjects like Mathematics, Science, and English.",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Education</h2>
        
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg grid md:grid-cols-3 items-center gap-8"
            >
              {/* Left - Degree Info */}
              <div className="md:col-span-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-blue-600 font-medium">{edu.field}</p>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>

              {/* Right - Description */}
              <div className="md:col-span-2">
                <p className="text-gray-700 text-lg leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
