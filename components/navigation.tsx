"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

interface Category {
  id: string
  name: string
  slug: string
  icon: string
}

export default function Navigation({ categories }: { categories: Category[] }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { language } = useLanguage()

  const navLabels = {
    home: language === "en" ? "Home" : "होमपेज",
    latest: language === "en" ? "Latest" : "ताजा",
    videos: language === "en" ? "Videos" : "भिडियोहरू",
    opinions: language === "en" ? "Opinions" : "विचारहरू",
    all: language === "en" ? "All" : "सबै",
  }

  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex items-center gap-1 overflow-x-auto py-10 scrollbar-hide">

          <Link href="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary whitespace-nowrap">
            {navLabels.home}
          </Link>

          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary whitespace-nowrap flex items-center gap-1">
                <span>{category.icon}</span>
                {category.name}
              </button>
              <div className="invisible group-hover:visible absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg z-40">
                <Link
                  href={`/category/${category.slug}`}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted first:rounded-t-lg last:rounded-b-lg"
                >
                  {navLabels.all} {category.name}
                </Link>
              </div>
            </div>
          ))}

         

          <Link
            href="/videos"
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
          >
            {navLabels.videos}
          </Link>

          <Link
            href="/opinions"
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
          >
            {navLabels.opinions}
          </Link>
        </div>
      </div>
    </nav>
  )
}
