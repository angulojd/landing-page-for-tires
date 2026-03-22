"use client"

import Image from "next/image"

const brands = [
  { name: "Michelin", logo: "/brands/michelin.svg" },
  { name: "Bridgestone", logo: "/brands/bridgestone.svg" },
  { name: "Goodyear", logo: "/brands/goodyear.svg" },
  { name: "Continental", logo: "/brands/continental.svg" },
  { name: "Pirelli", logo: "/brands/pirelli.svg" },
  { name: "Hankook", logo: "/brands/hankook.svg" },
  { name: "Yokohama", logo: "/brands/yokohama.svg" },
  { name: "Dunlop", logo: "/brands/dunlop.svg" },
]

export function Brands() {
  return (
    <section id="marcas" className="py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Marcas de Confianza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con las mejores marcas del mundo para garantizar calidad y seguridad en cada kilometro
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-marquee w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 mx-5 sm:mx-8 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={60}
                  className="h-8 sm:h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-6 lg:mt-8">
          Y muchas marcas mas disponibles para ti
        </p>
      </div>
    </section>
  )
}
