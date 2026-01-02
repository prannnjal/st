"use client"

import { useState } from "react"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out! We will contact you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <Mail className="text-pink-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info@apswb.in" className="text-gray-700 hover:text-pink-500">
                  aeon.aps@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-pink-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+919876543210" className="text-gray-700 hover:text-pink-500">
                  +91 9732555080
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-pink-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">
                  Reapara Palai More
                  <br />
                  Nandigram
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
