"use client"

import { Sparkles, Trophy, Users, BookOpen, Globe, Brain } from "lucide-react"

export default function About() {
  const features = [
    {
      title: "Creative Learning",
      description: "Art, music, dance & creative expression through playful activities",
      icon: <Sparkles className="w-8 h-8 text-white" />,
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "STEM Excellence",
      description: "Hands-on science, tech, engineering & math through interactive projects",
      icon: <Brain className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-indigo-400",
    },
    {
      title: "Sports & Fitness",
      description: "Football, basketball, swimming, yoga & athletic development programs",
      icon: <Trophy className="w-8 h-8 text-white" />,
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Smart Learning",
      description: "Interactive classrooms with smart boards & tech-enabled education",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: "from-amber-500 to-orange-400",
    },
    {
      title: "Global Values",
      description: "Character building, cultural awareness & environmental sustainability",
      icon: <Globe className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-violet-400",
    },
    {
      title: "Life Skills",
      description: "Critical thinking, teamwork, communication & leadership development",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "from-cyan-500 to-sky-400",
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Our Vision</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-6">
            Why Choose Sant Paul High School?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            We make learning fun, safe, and enriching for every child, fostering a love for knowledge that lasts a lifetime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent opacity-20 blur-xl rounded-full"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Your Child's Future <span className="text-secondary">Starts Here</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sant Paul High School is a premier educational institution dedicated to providing exceptional learning
                experiences. We believe in nurturing young minds with a perfect blend of academics, sports, arts, and life skills.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our commitment is to make learning extraordinary through innovative teaching methods, experienced
                educators, safe infrastructure, and a child-centric approach that values every child's individual growth
                and development.
              </p>
              <div className="pt-4">
                <a href="#contact" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-primary/90 transition-all hover:scale-105">
                  Discover More
                </a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-black/10 rounded-3xl transform rotate-3 scale-95 transition-transform group-hover:rotate-6 group-hover:scale-100 duration-500"></div>
            <div className="glass-card p-2 rounded-3xl relative z-10 transform transition-transform group-hover:rotate-[-2deg] duration-500">
              <img
                src="/abs/WhatsApp Image 2026-01-13 at 12.39.54 PM.jpeg"
                alt="School Campus"
                className="rounded-2xl w-full h-auto object-cover shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-[100px] transition-all duration-500 group-hover:scale-150`}></div>

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
