"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappLink = "https://wa.me/573016046740?text=Hola,%20me%20gustaría%20cotizar%20llantas"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight">
              Llantas Angulo
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
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

          <div className="hidden md:block">
            <Button asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Cotizar Ahora
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="#productos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="#nosotros"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button asChild className="w-full mt-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Cotizar Ahora
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
