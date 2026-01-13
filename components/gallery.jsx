"use client"

import { useState } from "react"
import { X, ZoomIn } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { title: "School Moments", image: "/abs/WhatsApp Image 2026-01-13 at 12.33.24 PM.jpeg" },
    { title: "Campus Life", image: "/abs/WhatsApp Image 2026-01-13 at 12.39.52 PM.jpeg" },
    { title: "Student Activities", image: "/abs/WhatsApp Image 2026-01-13 at 12.39.53 PM.jpeg" },
    { title: "Learning Fun", image: "/abs/WhatsApp Image 2026-01-13 at 12.39.54 PM.jpeg" },
    { title: "Creative Art", image: "/abs/WhatsApp Image 2026-01-13 at 12.39.55 PM (1).jpeg" },
    { title: "Sports Day", image: "/abs/WhatsApp Image 2026-01-13 at 12.39.55 PM.jpeg" },
    { title: "Group Activities", image: "/abs/WhatsApp Image 2026-01-13 at 12.39.56 PM (1).jpeg" },
    { title: "Classroom", image: "/abs/WhatsApp Image 2026-01-13 at 12.39.56 PM.jpeg" },
    { title: "Outdoor Fun", image: "/abs/WhatsApp Image 2026-01-13 at 12.39.57 PM (1).jpeg" },
    { title: "Events", image: "/abs/WhatsApp Image 2026-01-13 at 12.39.57 PM.jpeg" },
    { title: "Achievements", image: "/abs/WhatsApp Image 2026-01-13 at 12.41.25 PM (1).jpeg" },
    { title: "Celebrations", image: "/abs/WhatsApp Image 2026-01-13 at 12.41.25 PM.jpeg" },
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Our Memories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Moments at Sant Paul High School</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of life, learning, and joy at our campus.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="group break-inside-avoid relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-zoom-in"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image || "/abs/logo.jpg"}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>

          <div className="max-w-5xl w-full max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
