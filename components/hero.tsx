import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const whatsappLink = "https://wa.me/1234567890?text=Hola,%20me%20gustaría%20cotizar%20llantas"

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-balance">
              Calidad en cada kilometro
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Encuentra las mejores llantas para tu vehiculo. Calidad, durabilidad y el mejor precio del mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Solicitar Cotizacion
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#productos">
                  Ver Productos
                </a>
              </Button>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/5] w-full max-w-lg mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-secondary rounded-2xl overflow-hidden">
              <Image
                src="/images/tire-hero.jpg"
                alt="Llanta de alta calidad"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
