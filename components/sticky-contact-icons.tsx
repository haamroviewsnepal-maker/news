"use client"

import { MessageCircle, Mail, Phone, Facebook } from "lucide-react"

export function StickyContactIcons() {
  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/+9779843867481"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all animate-bounce hover:animate-none"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Email */}
      <a
        href="mailto:haamroviewsnepal@gmail.com"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all animate-bounce hover:animate-none"
        style={{ animationDelay: "0.2s" }}
        title="Send Email"
      >
        <Mail className="w-6 h-6" />
      </a>

      {/* Phone */}
      <a
        href="tel:+9779843867481"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all animate-bounce hover:animate-none"
        style={{ animationDelay: "0.4s" }}
        title="Call Us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/haamroviewsnepal2025?mibextid=rS40aB7S9Ucbxw6v"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all animate-bounce hover:animate-none"
        style={{ animationDelay: "0.6s" }}
        title="Visit us on Facebook"
      >
        <Facebook className="w-6 h-6" />
      </a>
    </div>
  )
}
