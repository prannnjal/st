export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-primary text-white overflow-hidden pt-20 pb-10">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] animate-pulse-soft"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section - Glass Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center mb-16 mx-auto max-w-4xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-white to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Join Our Community
          </h2>
          <p className="text-lg mb-8 text-gray-600 font-medium">
            Get the latest news, updates, and educational tips delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-6 py-4 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all placeholder:text-gray-400 text-gray-800"
            />
            <button className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <img
                  src="/abs/logo.jpg"
                  alt="Sant Paul High School Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold leading-tight">Sant Paul<br />High School</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 font-medium">
              Nurturing young minds with a perfect blend of academics, creativity, and values. Providing a safe haven for your child's growth. 🌟
            </p>
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
                  aria-label={`Social media ${i}`}
                >
                  <div className="w-4 h-4 border-2 border-current rounded-sm"></div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Classes', 'Facilities', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.split(' ')[0].toLowerCase()}`} className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-accent">Our Programs</h4>
            <ul className="space-y-3">
              {['Pre-Primary', 'Primary Classes (1-6)', 'Special Programs', 'Extracurricular Activities', 'Summer Camp'].map((item) => (
                <li key={item}>
                  <a href="/programs" className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-accent">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:aeon.aps@gmail.com" className="group flex items-start gap-3 text-white/80 hover:text-white transition-all">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                    <span>📧</span>
                  </div>
                  <span className="mt-1">aeon.aps@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+917634050751" className="group flex items-start gap-3 text-white/80 hover:text-white transition-all">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                    <span>📞</span>
                  </div>
                  <div className="mt-1">
                    <p>+91 7634050751</p>
                    <p className="text-sm text-white/50">+91 7634050752/3/4/5</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span>📍</span>
                </div>
                <div className="mt-1">
                  <p>Near S.R.C High School</p>
                  <p>Patepur(Vaishali)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            © {currentYear} Sant Paul High School. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
