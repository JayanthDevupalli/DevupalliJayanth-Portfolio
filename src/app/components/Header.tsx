"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full bg-white bg-opacity-90 shadow-md z-10"
    >
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#home" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#education" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Education
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header;

