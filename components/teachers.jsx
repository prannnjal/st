export default function Teachers() {
  const teachers = [
    {
      name: "Somdutta Jana",
      role: "Vice Principal ",
      specialty: "Early Childhood Education",
    },
    {
      name: "Bulbul Das",
      role: "Coordinator",
      specialty: "Academic Development",
    },
    {
      name: "Arpita Devsharma",
      role: "Asst.Teacher",
      specialty: "STEM & Creative Learning",
    },
    {
      name: "Ranita Agasti",
      role: "Asst.Teacher",
      specialty: "STEM & Creative Learning",
    },
    {
      name: "Japamala Mahapatra",
      role: "Asst.Teacher",
      specialty: "Holistic Development",
    },
    {
      name: "Munmun Das Jana",
      role: "Asst.Teacher",
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
      name: "Shilpa Mandal",
      role: "Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Januka Das Paul",
      role: "DanceTeacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Sabila Garjish",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Shreya Maity",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Hasina Khatun",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Somashree Sahoo",
      role: "Astt.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Kalyan Bhattacharya",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Swarnasri Bera",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Amit Panda",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Sahidul Islam",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Arjit Maity",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Ushashi Tripathy",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Sajal Pradhan",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Sudipta Bera",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Madhunuita Maity",
      role: "Asst.Teacher",
      specialty: "Arts & Expression",
    },
    {
      name: "Sabyasachi Bhunia",
      role: "Asst.Teacher",
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
