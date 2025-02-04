"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import type React from "react"
import emailjs from "emailjs-com"

const Contact = () => {
  const [isClient, setIsClient] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Replace with your EmailJS credentials
    const serviceID = "service_t15clci"
    const templateID = "template_au9e0dc"
    const userID = "iKQpXPCGH0akYajoD"

    // Send email via EmailJS
    emailjs
      .send(
        serviceID, 
        templateID, 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }, 
        userID
      )
      .then(
        (response) => {
          console.log("Message sent successfully", response)
          setIsLoading(false)
          setIsSubmitted(true)
          // Reset form after submission
          setFormData({ name: "", email: "", message: "" })
        },
        (error) => {
          console.error("Failed to send message", error)
          setIsLoading(false)
        }
      )
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              {isClient && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.button>
              )}
              {isSubmitted && !isLoading && (
                <div className="text-green-600 mt-4 text-center">Message sent successfully!</div>
              )}
            </form>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
            <p className="text-gray-700 mb-6">Feel free to reach out if you want to know more about me.</p>

            <ul className="space-y-4 text-gray-700">
              <li>
                <strong className="font-semibold">Name:</strong> Devupalli Jayanth
              </li>
              <li>
                <strong className="font-semibold">Role:</strong> Web Developer
              </li>
              <li>
                <strong className="font-semibold">Location:</strong> Hyderabad, Telangana 
              </li>
              <li>
                <strong className="font-semibold">Email:</strong> devupallijayanth@gmail.com
              </li>
              <li>
                <strong className="font-semibold">Phone:</strong> +91 9391082866
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
