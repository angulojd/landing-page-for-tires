import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  const whatsappLink = "https://wa.me/573016046740?text=Hola,%20me%20gustaría%20cotizar%20llantas"

  return (
    <section id="contacto" className="py-14 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12 lg:p-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 text-balance">
            Listo para equipar tu vehiculo?
          </h2>
          <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contactanos ahora por WhatsApp y recibe tu cotizacion personalizada en minutos. Sin compromisos.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="group"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Cotizar por WhatsApp
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
