"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-none'
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'rgb(220, 154, 37)' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/abs/logo.png" 
              alt="AEON School Logo" 
              className="h-14 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">AEON Public School</h1>
              <p className="text-xs text-white/90 font-semibold">Learn • Play • Grow</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1 items-center">
            <Link
              href="/about"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm"
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm"
            >
              Programs
            </Link>
            <Link
              href="/activities"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm"
            >
              Activities
            </Link>
            <Link
              href="/teachers"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm"
            >
              Teachers
            </Link>
            <Link
              href="/gallery"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm"
            >
              Contact
            </Link>
            <Link 
              href="/contact"
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300 ml-2 hover:scale-105"
            >
              Enroll Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="lg:hidden p-2">
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav 
            className="lg:hidden pb-6 flex flex-col gap-3 border-t border-white/20 pt-4 transition-all duration-300" 
            style={{ 
              background: isScrolled 
                ? 'linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.3))' 
                : 'linear-gradient(to bottom, rgba(220, 154, 37, 0.95), rgba(56, 189, 248, 0.3))'
            }}
          >
            <Link
              href="/about"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              Programs
            </Link>
            <Link
              href="/activities"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              Activities
            </Link>
            <Link
              href="/teachers"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              Teachers
            </Link>
            <Link
              href="/gallery"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              Contact
            </Link>
            <Link 
              href="/contact"
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all mx-4 text-center"
            >
              Enroll Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
