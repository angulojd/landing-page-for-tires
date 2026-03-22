import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const whatsappLink = "https://wa.me/573016046740?text=Hola,%20me%20gustaría%20cotizar%20llantas"

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-20 pb-10 lg:pt-16 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="flex flex-col gap-5 lg:gap-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-balance">
              Calidad en cada kilometro
            </h1>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-lg">
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

          <div className="relative w-full max-w-sm sm:max-w-lg mx-auto lg:max-w-none">
            <div className="relative aspect-[4/3] sm:aspect-square lg:aspect-[4/5] bg-secondary rounded-2xl overflow-hidden">
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
