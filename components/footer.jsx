export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white py-16 relative overflow-hidden" style={{ backgroundColor: 'rgb(56, 189, 248)' }}>
      <div className="absolute top-10 left-1/4 w-48 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/3 w-56 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">SIGN OUR NEWSLETTER</h2>
          <p className="text-lg mb-6 text-gray-300">We will send updates once a week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-12">
            <input
              type="email"
              placeholder="Your email here"
              className="w-full sm:flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-600 transition whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
          
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/abs/logo.png" 
              alt="AEON Public School Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
                aria-label={`Social media ${i}`}
              >
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/abs/logo.png" 
                alt="AEON Public School Logo" 
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-2xl font-bold">AEON</h3>
            </div>
            <p className="text-gray-400">
              Providing world-class education and care for children aged 3 months to 10 years. 🌈
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-white transition">
                  Classes
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#classes" className="hover:text-white transition">
                  Pre-Primary
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-white transition">
                  Primary Classes (1-6)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Special Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Extracurriculars
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:info@apswb.in" className="hover:text-white transition flex items-center gap-2">
                  <span>📧</span>
                   aeon.aps@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919732555080" className="hover:text-white transition flex items-center gap-2">
                  <span>📞</span>
                  +91  9732555080
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <p>Reapara Palai More</p>
                  <p>Nandigram</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} AEON Public School. All rights reserved. | Admissions Open for 2025-2026 🎓
          </p>
        </div>
      </div>
    </footer>
  )
}
