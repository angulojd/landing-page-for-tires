import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Rodriguez",
    role: "Conductor particular",
    content: "Excelente servicio y precios muy competitivos. Las llantas Michelin que compre tienen un rendimiento increible. Totalmente recomendado.",
    rating: 5,
    initials: "CR",
  },
  {
    name: "Maria Gonzalez",
    role: "Empresaria de transporte",
    content: "Llevo 3 anos comprando llantas aqui para mi flota de camionetas. La atencion es rapida y siempre tienen disponibilidad.",
    rating: 5,
    initials: "MG",
  },
  {
    name: "Juan Perez",
    role: "Mecanico profesional",
    content: "Como mecanico, recomiendo Llantas Angulo a todos mis clientes. Productos originales y garantia real en cada compra.",
    rating: 5,
    initials: "JP",
  },
  {
    name: "Ana Martinez",
    role: "Conductora frecuente",
    content: "Me asesoraron perfectamente para elegir las llantas ideales para mi auto. El envio fue super rapido y sin problemas.",
    rating: 5,
    initials: "AM",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Clientes Satisfechos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestra mejor carta de presentacion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted/30 border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
