// "use client"
// import { motion } from "framer-motion"

// const Skills = () => {
//   const skills = [
//     { name: "JavaScript", proficiency: "90%" },
//     { name: "React", proficiency: "85%" },
//     { name: "TypeScript", proficiency: "80%" },
//     { name: "Node.js", proficiency: "75%" },
//     { name: "Tailwind CSS", proficiency: "90%" },
//     { name: "Python", proficiency: "70%" },
//     { name: "SQL", proficiency: "85%" },
//     { name: "Git", proficiency: "95%" },
//   ]

//   return (
//     <section id="skills" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        
//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-gray-100 rounded-2xl shadow-md p-6 text-center"
//             >
//               <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
//               <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: skill.proficiency }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                   viewport={{ once: true }}
//                   className="bg-blue-600 h-2.5 rounded-full"
//                   style={{ width: skill.proficiency }}
//                 />
//               </div>
//               <p className="mt-3 text-gray-700">{skill.proficiency} Proficiency</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Skills

"use client"
import { motion } from "framer-motion"

const Skills = () => {
  const skills = [
    { name: "HTML & CSS", proficiency: "80%" },
    { name: "JavaScript", proficiency: "70%" },
    { name: "C Language", proficiency: "60%" },
    { name: "Python", proficiency: "60%" },
    { name: "Java", proficiency: "80%" },
    { name: "Reactjs", proficiency: "60%" },
    { name: "Git", proficiency: "70%" },
    { name: "Nextjs", proficiency: "50%" },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl shadow-md p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.proficiency }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: skill.proficiency }}
                />
              </div>
              <p className="mt-3 text-gray-700">{skill.proficiency} Proficiency</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills