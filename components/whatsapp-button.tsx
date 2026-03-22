"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappLink = "https://wa.me/1234567890?text=Hola,%20me%20gustaría%20cotizar%20llantas"

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
