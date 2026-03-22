"use client"

const brands = [
  { name: "Michelin", logo: "MICHELIN" },
  { name: "Bridgestone", logo: "BRIDGESTONE" },
  { name: "Goodyear", logo: "GOODYEAR" },
  { name: "Continental", logo: "CONTINENTAL" },
  { name: "Pirelli", logo: "PIRELLI" },
  { name: "Hankook", logo: "HANKOOK" },
  { name: "Yokohama", logo: "YOKOHAMA" },
  { name: "Dunlop", logo: "DUNLOP" },
]

export function Brands() {
  return (
    <section id="marcas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marcas de Confianza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con las mejores marcas del mundo para garantizar calidad y seguridad en cada kilometro
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group bg-background border border-border rounded-xl p-8 flex items-center justify-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-lg md:text-xl font-bold tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Y muchas marcas mas disponibles para ti
        </p>
      </div>
    </section>
  )
}
