import Header from "@/components/header"
import Activities from "@/components/activities"
import Footer from "@/components/footer"

export default function ActivitiesPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Activities />
      </div>
      <Footer />
    </main>
  )
}


