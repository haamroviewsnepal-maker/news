"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Facebook, Instagram, Youtube, Clock } from "lucide-react"

interface Category {
  id: string
  name: string
  slug: string
  icon: string
}

export default function Navigation({ categories }: { categories: Category[] }) {
  const { language } = useLanguage()

  const navLabels = {
    home: language === "en" ? "Home" : "होमपेज",
    latest: language === "en" ? "Latest" : "ताजा",
    videos: language === "en" ? "Videos" : "भिडियोहरू",
    opinions: language === "en" ? "Opinions" : "विचारहरू",
    all: language === "en" ? "All" : "सबै",
  }

  const [nepaliTime, setNepaliTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kathmandu",
      }
      setNepaliTime(new Intl.DateTimeFormat("en-US", options).format(new Date()))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* BEAUTIFUL TOP BAR */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm">

          {/* Time (with icon) */}
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-yellow-300" />
            <span className="font-medium tracking-wide">
              {language === "en" ? "Nepal Time:" : "नेपाली समय:"} {nepaliTime}
            </span>
          </div>

          {/* Social Icons with Colors */}
          <div className="flex items-center gap-5">
            <Link
              href="https://www.facebook.com/haamroviewsnepal2025?mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <Facebook size={20} className="text-blue-300" />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <Instagram size={20} className="text-pink-300" />
            </Link>

            <Link
              href="https://www.youtube.com/@HaamroViews"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <Youtube size={22} className="text-red-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
{/* NAVIGATION BAR */}
<nav className="border-b border-border bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center gap-2 overflow-x-auto py-6 scrollbar-hide">

      {/* Home */}
      <Link
        href="/"
        className="px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all 
        hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 
        hover:text-white rounded-lg"
      >
        {navLabels.home}
      </Link>

      {/* Categories */}
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className="px-4 py-2 text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-all
          hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 
          hover:text-white rounded-lg"
        >
          <span>{category.icon}</span>
          {category.name}
        </Link>
      ))}

      {/* Videos */}
      <Link
        href="/videos"
        className="px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all 
        hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 
        hover:text-white rounded-lg"
      >
        {navLabels.videos}
      </Link>

      {/* Opinions */}
      <Link
        href="/opinions"
        className="px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all 
        hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 
        hover:text-white rounded-lg"
      >
        {navLabels.opinions}
      </Link>

    </div>
  </div>
</nav>

    </>
  )
}
