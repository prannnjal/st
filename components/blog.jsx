export default function Blog() {
  const blogs = [
    {
      title: "Best Preschool in City - Quality Education Standards",
      excerpt:
        "Discover what makes a preschool exceptional. We focus on play-based learning, safety, experienced teachers, and holistic child development that prepares children for lifelong learning.",
      image: "/abs/WhatsApp Image 2026-01-13 at 12.39.57 PM.jpeg",
      date: "March 15, 2025"
    },
    {
      title: "Importance of STEM Education in Early Childhood",
      excerpt:
        "Learn why Science, Technology, Engineering, and Math education starting from early years develops critical thinking, problem-solving skills, and creativity in children.",
      image: "/abs/WhatsApp Image 2026-01-13 at 12.39.53 PM.jpeg",
      date: "March 10, 2025"
    },
    {
      title: "How to Choose the Right School for Your Child",
      excerpt:
        "A comprehensive guide to evaluating schools based on curriculum, infrastructure, teacher quality, safety measures, extracurricular programs, and overall educational philosophy.",
      image: "/abs/WhatsApp Image 2026-01-13 at 12.41.25 PM (1).jpeg",
      date: "March 5, 2025"
    },
    {
      title: "Holistic Development: Beyond Academic Excellence",
      excerpt:
        "Understand how modern education combines academics with sports, arts, values education, and life skills to create well-rounded individuals prepared for future challenges.",
      image: "/abs/WhatsApp Image 2026-01-13 at 12.41.25 PM.jpeg",
      date: "February 28, 2025"
    },
  ]

  return (
    <section id="blog" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Updates & Insights</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest From Our Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Explore articles about education, child development, and school excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogs.map((blog, idx) => (
            <div key={idx} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src={blog.image || "/abs/logo.jpg"} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                  {blog.date}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors leading-tight">{blog.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{blog.excerpt}</p>
                <a
                  href="#"
                  className="text-primary font-bold hover:text-secondary transition inline-flex items-center gap-2 group/link"
                >
                  Read full article <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  )
}
