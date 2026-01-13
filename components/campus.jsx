export default function Campus() {
  return (
    <section id="campus" className="py-24 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">




        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-secondary group hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">Modern Infrastructure</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Purpose-built campus with air-conditioned classrooms, smart boards, science labs, computer labs, and
              library facilities.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary group hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Sports & Recreation</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Dedicated sports grounds, play areas, indoor games facility, swimming pool, and equipment for various
              sports activities.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-accent group hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">Safe & Secure</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              24/7 CCTV surveillance, trained security staff, medical facility, well-trained staff, and strict safety
              protocols.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full hover:bg-primary/90 transition font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
          >
            Schedule Campus Tour
          </a>
        </div>
      </div>
    </section>
  )
}
