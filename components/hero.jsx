"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ArrowRight, Star } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const slides = [
    {
      title: "Welcome to Sant Paul High School",
      subtitle: "Where Excellence Meets Education. Nurturing Tomorrow's Leaders Today. ✨",
      cta: "Explore Our Campus",
      image: "/abs/WhatsApp Image 2026-01-13 at 12.33.24 PM.jpeg",
      gradient: "from-primary/90 to-purple-900/90",
    },
    {
      title: "Empowering Young Minds",
      subtitle: "A Holisitic Approach to Learning, Creativity, and Character Building.",
      cta: "Admissions Open",
      image: "/abs/WhatsApp Image 2026-01-13 at 12.41.25 PM.jpeg", // Keeping existing valid path if available, else fallback
      gradient: "from-secondary/90 to-pink-900/90",
    },
    {
      title: "World-Class Infrastructure",
      subtitle: "State-of-the-art Labs, Smart Classrooms & Safe Environment.",
      cta: "View Facilities",
      image: "/abs/WhatsApp Image 2026-01-13 at 12.39.52 PM.jpeg",
      gradient: "from-blue-600/90 to-primary/90",
    },
  ]

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background Slideshow */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out transform scale-110"
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: idx === currentSlide ? "scale(100%)" : "scale(110%)"
            }}
          ></div>

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} mix-blend-multiply opacity-80`}></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className={`transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
            <Star className="text-accent w-4 h-4 fill-accent" />
            <span className="text-sm font-semibold text-white tracking-wide uppercase">Admissions Open for 2025-2026</span>
            <Star className="text-accent w-4 h-4 fill-accent" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-xl leading-tight">
            {slides[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
                {slides[currentSlide].cta} <ArrowRight className="w-5 h-5" />
              </span>
            </a>

            <a
              href="#about"
              className="px-8 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-md"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-full ${idx === currentSlide
              ? "w-12 h-3 bg-accent shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce-slow hidden md:block">
        <div className="glass p-3 rounded-full text-white/80">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  )
}
