import Header from "@/components/header"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </main>
  )
}


