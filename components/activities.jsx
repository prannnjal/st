export default function Activities() {
  const activities = [
    {
      title: "🎨 Arts & Crafts",
      description: "Creative expression through painting, drawing, and craft activities",
      color: "from-pink-400 to-orange-400",
    },
    {
      title: "🎵 Music & Dance",
      description: "Rhythm, movement, and musical expression classes",
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "⚽ Sports & Games",
      description: "Football, basketball, swimming, and various athletic activities",
      color: "from-green-400 to-teal-400",
    },
    {
      title: "🔬 Science Club",
      description: "Hands-on experiments and scientific exploration",
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "📚 Reading Club",
      description: "Storytelling, library visits, and reading activities",
      color: "from-yellow-400 to-orange-400",
    },
    {
      title: "🌱 Gardening",
      description: "Learning about nature through planting and caring for gardens",
      color: "from-green-400 to-emerald-400",
    },
  ]

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Activities</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-semibold">
            Engaging activities that promote learning, creativity, and physical development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${activity.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group text-white`}
            >
              <div className="text-5xl mb-4 group-hover:rotate-12 transition-transform duration-300">
                {activity.title.split(" ")[0]}
              </div>
              <h3 className="text-2xl font-bold mb-3">{activity.title.split(" ").slice(1).join(" ")}</h3>
              <p className="text-white/90 font-semibold">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


