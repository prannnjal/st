export default function Services() {
  const services = [
    {
      title: "Infants",
      description:
        "Lectus placerat a ultricies a,interdum donec eget metus auguen u Fusce mollis imperdiet interdum donec eget metus auguen unc vel lorem.",
      image: "/abs/WhatsApp Image 2026-01-13 at 12.33.24 PM.jpeg",
    },
    {
      title: "Toddlers",
      description:
        "Lectus placerat a ultricies a,interdum donec eget metus auguen u Fusce mollis imperdiet interdum donec eget metus auguen unc vel lorem.",
      image: "/abs/WhatsApp Image 2026-01-13 at 12.39.52 PM.jpeg",
    },
    {
      title: "Pre School",
      description:
        "Lectus placerat a ultricies a, interdum donec eget metus auguen u Fusce mollis imperdiet interdum donec eget metus auguen unc vel lorem.",
      image: "/abs/WhatsApp Image 2026-01-13 at 12.39.53 PM.jpeg",
    },
  ]

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={service.image || "/abs/logo.jpg"} alt={service.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
