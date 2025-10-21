import { Features } from "@/modules/features"
import Footer from "@/modules/footer"
import { Hero } from "@/modules/hero"
import Pricing from "@/modules/pricing"

const Page = () => {
  return (
    <main className="font-body">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  )
}

export default Page