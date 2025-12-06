"use client"

import Link from "next/link"
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Music4,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"

export default function FooterSocialBar() {
  return (
    <div className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:items-start items-left md:text-left text-center gap-5">

        {/* Heading */}
        <h3 className="text-xl font-semibold text-blue-700">
          सोसल मिडिया
        </h3>

        <div className="flex flex-col gap-4">

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/haamroviewsnepal2025?mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <Facebook size={18} />
            </div>
            <span className="text-sm text-foreground">Like us on Facebook</span>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/+9779843867481"
            target="_blank"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white">
              <MessageCircle size={18} />
            </div>
            <span className="text-sm text-foreground">Chat with us on WhatsApp</span>
          </Link>

          {/* Email */}
          <Link
            href="mailto:haamroviewsnepal@gmail.com"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center text-white">
              <Mail size={18} />
            </div>
            <span className="text-sm text-foreground">Email us</span>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+9779843867481"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <Phone size={18} />
            </div>
            <span className="text-sm text-foreground">Call Us</span>
          </Link>

          {/* Twitter */}
          <Link
            href="#"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center text-white">
              <Twitter size={18} />
            </div>
            <span className="text-sm text-foreground">Follow us on Twitter</span>
          </Link>

          {/* YouTube */}
          <Link
            href="https://www.youtube.com/@HaamroViews"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white">
              <Youtube size={20} />
            </div>
            <span className="text-sm text-foreground">Subscribe YouTube Channel</span>
          </Link>

          {/* Instagram */}
          <Link
            href="#"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <div className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center text-white">
              <Instagram size={18} />
            </div>
            <span className="text-sm text-foreground">Follow us on Instagram</span>
          </Link>

          {/* TikTok (Music4 icon) */}
          <Link
            href="#"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white">
              <Music4 size={18} />
            </div>
            <span className="text-sm text-foreground">Follow us on Tiktok</span>
          </Link>

        </div>

      </div>
    </div>
  )
}
