import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Brands } from "@/components/brands"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Brands />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
