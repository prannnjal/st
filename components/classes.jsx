"use client"

import { useState } from "react"
import { ChevronDown, Star, Sparkles, BookOpen, Rocket, Award } from "lucide-react"

export default function Classes() {
  const [expandedClass, setExpandedClass] = useState(0)

  const classes = [
    {
      grade: "Pre-Primary",
      subtitle: "Nursery, LKG, UKG",
      ageGroup: "2.5 to 5.5 years",
      focus: "Play-based learning with colorful activities",
      color: "from-pink-500 to-rose-400",
      icon: <Sparkles className="w-6 h-6" />,
      highlights: [
        "Child-centric play-based curriculum",
        "Montessori-inspired methods",
        "Art, music, dance & creative play",
        "Safe & nurturing environment",
        "Interactive smart learning",
      ],
    },
    {
      grade: "Grade 1",
      subtitle: "Foundational Years",
      ageGroup: "5.5 to 6.5 years",
      focus: "Structured learning with fun activities",
      color: "from-blue-500 to-indigo-400",
      icon: <Rocket className="w-6 h-6" />,
      highlights: [
        "Interactive & engaging teaching",
        "Low student-teacher ratio",
        "Hands-on storytelling activities",
        "Emotional intelligence building",
        "Reading & math foundations",
      ],
    },
    {
      grade: "Grade 2-3",
      subtitle: "Exploratory Years",
      ageGroup: "6.5 to 8.5 years",
      focus: "Critical thinking & project-based learning",
      color: "from-teal-500 to-emerald-400",
      icon: <BookOpen className="w-6 h-6" />,
      highlights: [
        "STEAM integrated curriculum",
        "Creative inquiry-based learning",
        "Digital literacy introduction",
        "Group projects & collaboration",
        "Environmental awareness",
      ],
    },
    {
      grade: "Grade 4-6",
      subtitle: "Growth Years",
      ageGroup: "8.5 to 11.5 years",
      focus: "Academic excellence & personality development",
      color: "from-amber-500 to-orange-400",
      icon: <Award className="w-6 h-6" />,
      highlights: [
        "Concept-based real-world learning",
        "Leadership & communication skills",
        "Coding & robotics programs",
        "Field trips & guest lectures",
        "Career orientation",
      ],
    },
  ]

  return (
    <section id="classes" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[url('/abs/grid-pattern.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Academic Excellence</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Classes & Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Specially designed programs for every age group, fostering growth from toddlers to 6th grade.
          </p>
        </div>

        <div className="space-y-6">
          {classes.map((classItem, idx) => (
            <div
              key={idx}
              onClick={() => setExpandedClass(expandedClass === idx ? -1 : idx)}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 ${expandedClass === idx ? 'ring-2 ring-primary/20' : ''}`}
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${classItem.color}`}></div>

              <div className="p-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${classItem.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {classItem.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{classItem.grade}</h3>
                      <p className="text-secondary font-semibold text-sm uppercase tracking-wide mb-1">{classItem.subtitle}</p>
                      {expandedClass !== idx && (
                        <p className="text-gray-500 text-sm font-medium">{classItem.focus}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden md:block text-right">
                      <p className="text-gray-900 font-bold">{classItem.ageGroup}</p>
                      <p className="text-gray-500 text-sm">Age Group</p>
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${expandedClass === idx ? "rotate-180 bg-primary text-white" : "text-gray-600 group-hover:bg-primary/10 group-hover:text-primary"}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className={`grid transition-all duration-500 ease-in-out ${expandedClass === idx ? "grid-rows-[1fr] opacity-100 mt-8 pt-8 border-t border-gray-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent fill-accent" />
                      What Makes This Program Special
                    </h4>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                      {classItem.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 items-center">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${classItem.color}`}></div>
                          <span className="text-gray-700 font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex justify-end">
                      <a
                        href="#contact"
                        className={`inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-bold bg-gradient-to-r ${classItem.color} shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
