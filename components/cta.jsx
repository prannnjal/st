export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-700 to-secondary"></div>

      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-[100px] animate-pulse-soft"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-md">
          Admission Open <span className="text-accent">2025-2026</span>
        </h2>
        <p className="text-2xl md:text-3xl mb-8 text-white/90 font-medium">Making Learning Extraordinary</p>
        <p className="text-lg mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Give your child the gift of quality education in a nurturing environment designed for growth, creativity, and
          excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#contact"
            className="group relative px-10 py-5 bg-white text-primary rounded-full font-bold text-xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Book a Visit</span>
            <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="px-10 py-5 rounded-full border-2 border-white/30 text-white font-bold text-xl hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  )
}
