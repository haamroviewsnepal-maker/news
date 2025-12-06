"use client"

import Link from "next/link"
import { X } from "lucide-react"

interface Category {
  id: string
  name: string
  slug: string
  icon: string
}

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  categories: Category[]
}

export default function MobileMenu({ open, onClose, categories }: MobileMenuProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"  // removed md:hidden
      onClick={onClose}
    >
      <div
        className="w-72 h-full bg-white shadow-2xl p-4 overflow-y-auto animate-slideInLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON — previously hidden on desktop due to md:hidden */}
        <button
          onClick={onClose}
          className="mb-4 flex justify-end text-gray-700 hover:text-black"
        >
          <X className="h-6 w-6" />
        </button>

        {/* MAIN MENU */}
        <nav className="flex flex-col gap-4">

          <Link
            href="/"
            onClick={onClose}
            className="text-lg font-bold text-blue-600 hover:text-blue-800"
          >
            Home
          </Link>

          <hr className="border-gray-200" />

          <h3 className="font-semibold text-gray-700">Categories</h3>

          <div className="flex flex-col gap-2 pb-10">

            {categories
              .filter(cat => cat.slug.trim() !== "")
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-2 py-1 text-gray-900 hover:text-blue-600"
                >
                  <span className="text-xl">{cat.icon}</span>
                  {cat.name}
                </Link>
              ))}

          </div>
        </nav>
      </div>
    </div>
  )
}
