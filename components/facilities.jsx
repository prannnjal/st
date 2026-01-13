export default function Facilities() {
  const facilities = [
    {
      title: "👨‍🏫 Experienced Faculties",
      description: "Dedicated, experienced and trained faculties from all over India",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "💻 Digital Classrooms",
      description: "Digital class for all students. Laboratories for all Core Subjects",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "🤝 Focus on Slow Learners",
      description: "Special focus on slow learners to ensure no child is left behind",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "🗣️ Fully English Campus",
      description: "Immersive English environment for better communication skills",
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "📹 360° Surveillance",
      description: "360° CCTV Surveillance for complete safety and security",
      color: "from-red-500 to-rose-500",
    },
    {
      title: "🏫 Flexible Boarding",
      description: "Day Scholar, Day Boarding and Hostel facilities available",
      color: "from-pink-500 to-fuchsia-500",
    },
    {
      title: "🪑 Spacious Classrooms",
      description: "Limited number of students in a spacious Classroom for personal attention",
      color: "from-cyan-500 to-sky-500",
    },
    {
      title: "🏆 Proven Results",
      description: "100% Result in Matriculation Exam 2022",
      color: "from-yellow-400 to-orange-400",
    },
  ]

  return (
    <section id="facilities" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Our Infrastructure</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Salient Features
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            World-class amenities designed to support your child's holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${facility.color}`}></div>

              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {facility.title.split(" ")[0]}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {facility.title.split(" ").slice(1).join(" ")}
              </h3>

              <p className="text-gray-600 leading-relaxed font-medium">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
