// "use client"
// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import Image from "next/image"
// import Jay from "../assets/Jay1.jpg"
// import { Menu, X } from "lucide-react"
// import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

// const Hero = () => {
//   const [isClient, setIsClient] = useState(false)
//   const [isMenuOpen, setIsMenuOpen] = useState(false) // State for mobile menu

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center pt-32 lg:pt-40 pb-20 bg-gradient-to-r from-blue-300 to-purple-300 overflow-hidden"
//     >
//       {/* Blurry Background */}
//       <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-2xl -z-10"></div>

//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 py-4">
//         <div className="container mx-auto flex justify-between items-center px-6 lg:px-16">
//           <h1 className="text-2xl font-bold text-gray-900">DJ</h1>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-6 text-gray-700">
//             <li><a href="#home" className="hover:text-blue-600">Home</a></li>
//             <li><a href="#education" className="hover:text-blue-600">Education</a></li>
//             <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
//             <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
//             <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute top-16 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg md:hidden"
//           >
//             <ul className="flex flex-col items-center gap-4 py-4">
//               <li><a href="#home" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</a></li>
//               <li><a href="#education" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Education</a></li>
//               <li><a href="#projects" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
//               <li><a href="#skills" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
//               <li><a href="#contact" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
//             </ul>
//           </motion.div>
//         )}
//       </nav>

//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-8 lg:px-16">
//         <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex-1 text-center lg:text-left"
//           >
//             <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
//               DEVUPALLI <span className="text-blue-700">JAYANTH</span>
//             </h1>
//             <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6">WEB DEVELOPER</h2>
//             <p className="text-lg text-gray-800 mb-8 max-w-lg mx-auto lg:mx-0">
//               Passionate about building beautiful and highly interactive web applications. Skilled in React, Next.js,
//               and modern UI/UX design.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
//               {isClient && (
//                 <motion.a
//                   href="./Resume.pdf"
//                   download="Resume.pdf"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
//                 >
//                   Download Resume
//                 </motion.a>
//               )}
//               <div className="flex gap-4">
//                 <SocialIcon href="https://github.com/JayanthDevupalli" icon={<FaGithub />} />
//                 <SocialIcon href="https://www.linkedin.com/in/devupalli-jayanth-37b22b257/" icon={<FaLinkedin />} />
//                 <SocialIcon href="https://www.instagram.com/jayanth_devupally/" icon={<FaInstagram />} />
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Image with Glow */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex-1 flex justify-center lg:justify-end relative z-20"
//           >
//             <div className="relative w-full max-w-sm h-auto">
//               {/* Glowing Circle Effect */}
//               <div className="absolute -inset-4 bg-blue-400 opacity-30 rounded-full blur-3xl -z-10"></div>

//               <Image
//                 src={Jay || "/placeholder.svg"}
//                 alt="Your Name"
//                 width={320}
//                 height={320}
//                 className="rounded-full shadow-2xl"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// import { ReactNode } from "react"; // import ReactNode if you're using TS

// interface SocialIconProps {
//   href: string;
//   icon: ReactNode;
// }

// const SocialIcon = ({ href, icon }: SocialIconProps) => {
//   return (
//     <motion.a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-blue-600 transition-colors duration-300"
//     >
//       {icon}
//     </motion.a>
//   );
// };



// export default Hero
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

// Custom Typing Animation Component
const TypedText = ({ strings, typeSpeed = 30, backSpeed = 30, loop = true }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[currentStringIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentString.length) {
            setCurrentText(currentString.slice(0, currentText.length + 1))
          } else {
            // Finished typing, start deleting after a pause
            setTimeout(() => setIsDeleting(true), 1000)
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            // Finished deleting, move to next string
            setIsDeleting(false)
            setCurrentStringIndex((prev) => (prev + 1) % strings.length)
          }
        }
      },
      isDeleting ? backSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed])

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const Hero = () => {
  const [isClient, setIsClient] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30"
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-lg z-50 py-4">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-16">
          <h1 className="text-2xl font-bold tracking-widest text-white">DJ</h1>
          <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
            {["Home", "Education", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 left-0 w-full bg-white/20 backdrop-blur-lg shadow-lg md:hidden"
            >
              <ul className="flex flex-col items-center gap-4 py-4 text-white">
                {["Home", "Education", "Projects", "Skills", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:text-blue-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-16 px-6 lg:px-16 pt-32 lg:pt-40">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            DEVUPALLI JAYANTH
          </motion.h1>
          <h2 className="text-2xl lg:text-3xl text-gray-300 mb-4 h-12">
            {isClient && (
              <TypedText
                strings={["WEB DEVELOPER", "UI/UX DESIGN ENTHUSIAST", "PROBLEM SOLVER"]}
                typeSpeed={50}
                backSpeed={30}
                loop={true}
              />
            )}
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I create beautiful, responsive, and high-performance web applications using cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            {isClient && (
              <motion.a
                href="./Resume.pdf"
                download="Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
              >
                Download Resume
              </motion.a>
            )}
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/JayanthDevupalli" icon={<FaGithub />} />
              <SocialIcon href="https://www.linkedin.com/in/devupalli-jayanth-37b22b257/" icon={<FaLinkedin />} />
              <SocialIcon href="https://www.instagram.com/jayanth_devupally/" icon={<FaInstagram />} />
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative group">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-60 group-hover:opacity-80 transition" />
            <Image
              src="/placeholder.svg?height=340&width=340"
              alt="Devupalli Jayanth"
              width={340}
              height={340}
              className="rounded-full shadow-2xl border-4 border-white/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface SocialIconProps {
  href: string
  icon: React.ReactNode
}

const SocialIcon = ({ href, icon }: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="bg-white/10 p-3 rounded-full shadow-md text-white hover:text-blue-400 hover:bg-white/20 transition"
    >
      {icon}
    </motion.a>
  )
}

export default Hero
