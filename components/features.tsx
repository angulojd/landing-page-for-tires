import { Shield, Truck, BadgeCheck, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Garantia de Calidad",
    description: "Todas nuestras llantas cuentan con garantia del fabricante.",
  },
  {
    icon: Truck,
    title: "Envio a Domicilio",
    description: "Entregamos tus llantas directamente en tu ubicacion.",
  },
  {
    icon: BadgeCheck,
    title: "Marcas Reconocidas",
    description: "Trabajamos con las mejores marcas del mercado automotriz.",
  },
  {
    icon: Clock,
    title: "Atencion Rapida",
    description: "Respuesta inmediata via WhatsApp para tu cotizacion.",
  },
]

export function Features() {
  return (
    <section id="nosotros" className="py-14 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-10 lg:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Por que elegirnos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos comprometemos a brindarte la mejor experiencia en la compra de tus llantas.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center gap-3 p-4 sm:p-6 bg-background rounded-xl"
            >
              <div className="p-3 bg-primary rounded-lg">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
