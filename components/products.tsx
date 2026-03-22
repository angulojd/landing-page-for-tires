import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Llantas para Auto",
    description: "Ideales para vehiculos de uso diario. Excelente agarre y durabilidad.",
    image: "/images/tire-hero.jpg",
  },
  {
    id: 2,
    name: "Llantas para Camioneta",
    description: "Resistencia y rendimiento para vehiculos de carga y uso rudo.",
    image: "/images/tire-hero.jpg",
  },
  {
    id: 3,
    name: "Llantas Deportivas",
    description: "Maximo rendimiento y agarre para los amantes de la velocidad.",
    image: "/images/tire-hero.jpg",
  },
]

export function Products() {
  const whatsappLink = "https://wa.me/1234567890?text=Hola,%20me%20gustaría%20cotizar%20llantas"

  return (
    <section id="productos" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Nuestros Productos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Contamos con una amplia variedad de llantas para todo tipo de vehiculos y necesidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button variant="outline" size="sm" asChild className="group/btn">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Cotizar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
