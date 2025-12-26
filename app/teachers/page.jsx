import Header from "@/components/header"
import Teachers from "@/components/teachers"
import Footer from "@/components/footer"

export default function TeachersPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Teachers />
      </div>
      <Footer />
    </main>
  )
}


