"use client"

import { ArrowRight, Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pb-20 pt-32">
      {/* Decorative Background Elements (Subtle) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-float">
              <Star className="text-accent w-4 h-4 fill-accent" />
              <span className="text-sm font-bold text-primary tracking-wide uppercase">Admissions Open for 2025-2026</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">St.Paul High School</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Where Excellence Meets Education. Nurturing Tomorrow's Leaders Today with a holistic approach to learning, creativity, and character building. ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Our Campus <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary/10 rounded-full font-bold text-lg hover:bg-primary/5 hover:border-primary transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-full aspect-square lg:aspect-auto h-full">
              {/* Abstract blobs behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-soft"></div>

              <img
                src="/abs/WhatsApp Image 2026-01-13 at 12.33.24 PM.jpeg"
                alt="St. Paul High School Students"
                className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Star className="w-6 h-6 text-accent fill-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">100% Results</p>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Matriculation 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
