import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Facilities from "@/components/facilities"
import Classes from "@/components/classes"
import CTA from "@/components/cta"

import Blog from "@/components/blog"
import Gallery from "@/components/gallery"
import Campus from "@/components/campus"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Facilities />
      <Classes />
      <CTA />

      <Campus />
      <Blog />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
