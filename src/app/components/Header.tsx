// "use client"
// import { motion } from "framer-motion"
// import Link from "next/link"

// const Header = () => {
//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//       className="fixed w-full bg-white bg-opacity-90 shadow-md z-10"
//     >
//       <nav className="container mx-auto px-6 py-3">
//         <ul className="flex justify-center space-x-8">
//           <li>
//             <Link href="#home" className="text-gray-800 hover:text-blue-600 transition duration-300">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="#education" className="text-gray-800 hover:text-blue-600 transition duration-300">
//               Education
//             </Link>
//           </li>
//           <li>
//             <Link href="#projects" className="text-gray-800 hover:text-blue-600 transition duration-300">
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link href="#contact" className="text-gray-800 hover:text-blue-600 transition duration-300">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </motion.header>
//   )
// }

// export default Header;

"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
]

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full z-50 backdrop-blur-md bg-gradient-to-r from-white/20 via-white/10 to-white/20 border-b border-white/20"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ width: `${scrollProgress}%` }}
        className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"
      />

      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
        >
          DJ
        </motion.h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-10 text-gray-200 font-medium">
          {navItems.map((item) => (
            <motion.li key={item.href} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href={item.href}
                className="relative group"
              >
                <span className="text-white hover:text-blue-400 transition-colors">{item.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Icon (placeholder) */}
        <div className="md:hidden text-white cursor-pointer">
          ☰
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
