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
      {/* TOP BAR */}
      <div className="w-full bg-gradient-to-r from-emerald-600 via-green-500 to-lime-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-yellow-300" />
            <span className="font-medium tracking-wide">
              {language === "en" ? "Nepal Time:" : "नेपाली समय:"} {nepaliTime}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Link href="#" target="_blank" className="hover:opacity-80 transition">
              <Facebook size={20} className="text-white" />
            </Link>
            <Link href="#" target="_blank" className="hover:opacity-80 transition">
              <Instagram size={20} className="text-white" />
            </Link>
            <Link href="#" target="_blank" className="hover:opacity-80 transition">
              <Youtube size={22} className="text-white" />
            </Link>
          </div>
        </div>
      </div>

{/* NAVIGATION BAR - FULL WIDTH */}
<nav className="border-b border-border w-full bg-white">

  {/* Full-Width Inner Container */}
  <div className="w-full px-4 sm:px-6 lg:px-8">

    <div className="flex items-center gap-2 overflow-x-auto py-6 scrollbar-hide">

      {/* HOME — BLUE */}
      <Link
        href="/"
        className="px-4 py-2 text-lg font-bold whitespace-nowrap 
        bg-blue-600 text-white rounded-lg shadow-md"
      >
        {navLabels.home}
      </Link>

      {/* CATEGORIES — PURPLE */}
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className="px-4 py-2 text-lg font-bold whitespace-nowrap flex items-center gap-2
          bg-green-600 text-white rounded-lg shadow-md"
        >
          <span>{category.icon}</span>
          {category.name}
        </Link>
      ))}

      {/* VIDEOS — PINK */}
      <Link
        href="/videos"
        className="px-4 py-2 text-lg font-bold whitespace-nowrap 
        bg-pink-600 text-white rounded-lg shadow-md"
      >
        {navLabels.videos}
      </Link>

      {/* OPINIONS — ORANGE */}
      <Link
        href="/opinions"
        className="px-4 py-2 text-lg font-bold whitespace-nowrap 
        bg-orange-600 text-white rounded-lg shadow-md"
      >
        {navLabels.opinions}
      </Link>

    </div>

    {/* BREAKING NEWS */}
    <div className="w-full overflow-hidden bg-red-700 text-white">
      <p className="scroll-text whitespace-nowrap text-lg py-2 px-4 
        bg-red-700 text-white font-semibold tracking-wide shadow-md 
        border-l-4 border-yellow-400">
        🔥राष्ट्रिय तथा स्थानीय घटनाक्रमका ताजा विवरण—नेपालका मुख्य समाचारहरू एकै ठाउँमा…
      </p>
    </div>

  </div>
</nav>

    </>
  )
}
