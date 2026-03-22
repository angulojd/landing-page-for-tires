import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-semibold">Llantas Angulo</span>
            <p className="text-sm text-muted-foreground">
              Calidad en cada kilometro
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="#productos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Productos
            </Link>
            <Link
              href="#nosotros"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Llantas Angulo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
