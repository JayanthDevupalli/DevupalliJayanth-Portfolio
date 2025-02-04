import Header from "./components/Header"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

