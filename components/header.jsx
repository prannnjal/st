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
      setIsScrolled(scrollPosition > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed w-full top-0 z-50 transition-all duration-300 glass py-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full group-hover:bg-primary/10 transition-all"></div>
              <img
                src="/abs/logo.jpg"
                alt="Sant Paul High School Logo"
                className="h-16 w-auto object-contain relative z-10 drop-shadow-md"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold drop-shadow-sm transition-colors duration-300 text-primary">
                Sant Paul High School
              </h1>
              <p className="text-xs font-semibold tracking-wider uppercase transition-colors duration-300 text-primary/80">
                Learn • Play • Grow
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-2 items-center">
            {['About', 'Programs', 'Activities', 'Gallery', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="font-semibold px-4 py-2 rounded-full transition-all duration-300 text-sm text-foreground hover:bg-primary/10 hover:text-primary"
              >
                {item}
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ml-2"
            >
              Enroll Now
            </Link>
            <a
              href="https://octopod.co.in/student/admission/b6a895d7cb10f3166208e55d783c36d7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ml-2"
            >
              Fees Payment
            </a>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 rounded-full hover:bg-primary/10 transition-colors">
            {isOpen ?
              <X size={28} className="text-primary" /> :
              <Menu size={28} className="text-primary" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="lg:hidden mt-4 pb-6 flex flex-col gap-3 glass rounded-2xl p-4 animate-in slide-in-from-top-4 fade-in duration-300 border-t border-primary/10"
          >
            {['About', 'Programs', 'Activities', 'Gallery', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-foreground font-semibold px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <Link
                href="/contact"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-bold text-center shadow-md hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Link>
              <a
                href="https://octopod.co.in/student/admission/b6a895d7cb10f3166208e55d783c36d7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-center shadow-md hover:shadow-lg transition-all"
              >
                Fees Payment
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
