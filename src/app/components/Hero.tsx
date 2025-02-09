"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Jay from "../assets/Jay1.jpg"
import { Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

const Hero = () => {
  const [isClient, setIsClient] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State for mobile menu

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 lg:pt-40 pb-20 bg-gradient-to-r from-blue-300 to-purple-300 overflow-hidden"
    >
      {/* Blurry Background */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-2xl -z-10"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 py-4">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-16">
          <h1 className="text-2xl font-bold text-gray-900">DJ</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#education" className="hover:text-blue-600">Education</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              <li><a href="#home" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#education" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Education</a></li>
              <li><a href="#projects" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
              DEVUPALLI <span className="text-blue-700">JAYANTH</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6">WEB DEVELOPER</h2>
            <p className="text-lg text-gray-800 mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate about building beautiful and highly interactive web applications. Skilled in React, Next.js,
              and modern UI/UX design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {isClient && (
                <motion.a
                  href="./Resume.pdf"
                  download="Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
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

          {/* Right Image with Glow */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end relative z-20"
          >
            <div className="relative w-full max-w-sm h-auto">
              {/* Glowing Circle Effect */}
              <div className="absolute -inset-4 bg-blue-400 opacity-30 rounded-full blur-3xl -z-10"></div>

              <Image
                src={Jay || "/placeholder.svg"}
                alt="Your Name"
                width={320}
                height={320}
                className="rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const SocialIcon = (props) => {
  const { href, icon } = props

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-blue-600 transition-colors duration-300"
    >
      {icon}
    </motion.a>
  )
}

export default Hero
