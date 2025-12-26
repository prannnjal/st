export default function Teachers() {
  const teachers = [
    {
      name: "Somdutta Gana",
      role: "Senior Teacher",
      specialty: "Early Childhood Education",
    },
    {
      name: "Bulbul Das",
      role: "Teacher",
      specialty: "Academic Development",
    },
    {
      name: "Arpita Devsharma",
      role: "Teacher",
      specialty: "STEM & Creative Learning",
    },
    {
      name: "Ranita Agasti",
      role: "Teacher",
      specialty: "STEM & Creative Learning",
    },
    {
      name: "Gapamala Mahapatra",
      role: "Teacher",
      specialty: "Holistic Development",
    },
    {
      name: "Munmun Das Gana",
      role: "Teacher",
      specialty: "Holistic Development",
    },
    {
      name: "Mangal Maity",
      role: "Teacher",
      specialty: "Sports & PE",
    },
    {
      name: "Pallabi Das",
      role: "Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Silpa Mandal",
      role: "Teacher",
      specialty: "Arts & Expression",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Best Teachers</h2>
          <p className="text-lg text-gray-700">Experienced, certified educators committed to your child's growth</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <div key={idx} className="text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl font-bold">
                {teacher.name.split(" ")[0][0]}
                {teacher.name.split(" ")[1][0]}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{teacher.role}</p>
              <p className="text-gray-700 text-sm">{teacher.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
