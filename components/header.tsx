"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageToggle from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [categories, setCategories] = useState([])

  const { t, language } = useLanguage()

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch("/data/categories.json")
        const data = await res.json()
        setCategories(data.categories)
      } catch (error) {
        console.error("Failed to load categories:", error)
      }
    }
    loadCategories()
  }, [])

  return (
    <header className="sticky top-0 z-50 shadow bg-white text-black">

      {/* ⭐ LAYER 1 — TOP MINI BAR */}
      <div className="w-full bg-gradient-to-r from-green-600 via-purple-600 to-red-600 text-white text-sm py-1">
        <p className="scroll-text whitespace-nowrap text-lg py-2">
  🔥 Breaking News: Haamro Views Nepal — ताजा अपडेट, अन्तर्राष्ट्रिय प्रतिक्रिया र विकासका महत्वपूर्ण समाचारहरू एकै स्थानमा… Haamro Views Nepal तपाईंलाई दिनभरिका सबै महत्वपूर्ण घटनाहरू छिटो, सही र विश्‍वासयोग्य रूपमा प्रस्तुत गर्दछ।
</p>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          {/* Left side: Time or small info */}
          <span>{language === "en" ? "For truthful, factual, and impartial news." : "सत्य तथ्य र निष्पक्ष  सामाचारको लागि"}</span>
          

          {/* Right side: Language toggle */}
          <LanguageToggle />
        </div>
      </div>
      <div className="w-full mx-auto px-4 py-3 flex items-center justify-between bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">

        {/* LEFT: Logo + Title + Flag */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />

          {/* Title + optional flag */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-white-900 tracking-wide">
              {t("title")}
            </span>

            {language === "ne" && (
              <Image
                src="/nepal.png"
                alt="Nepal Flag"
                width={38}
                height={38}
                className="rounded shadow"
              />
            )}
          </div>
        </Link>

        {/* RIGHT: Desktop Search + Sign In */}
        <div className="hidden md:flex items-center gap-3">
          <form action="/search" className="relative">
            <input
              type="search"
              name="q"
              placeholder={t("searchPlaceholder")}
              className="px-4 py-2 rounded border bg-white text-black w-64"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
          </form>

          <Button variant="outline">{t("signIn")}</Button>
        </div>

        {/* MOBILE: Search + Menu */}
        <div className="flex  items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <Search className="h-6 w-6 text-gray-800" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowMobileMenu(true)}
          >
            <Menu className="h-7 w-7 text-gray-800" />
          </Button>
        </div>

      </div>

      {/* ⭐ LAYER 3 — MOBILE SEARCH BAR */}
      {showMobileSearch && (
        <div className="px-4 pb-3">
          <form action="/search" className="flex gap-2">
            <input
              type="search"
              name="q"
              className="flex-1 px-4 py-2 border rounded-lg"
              placeholder={t("searchPlaceholder")}
            />
            <Button size="sm">{t("searchButton")}</Button>
          </form>
        </div>
      )}

      {/* ⭐ MOBILE MENU */}
      <MobileMenu
        open={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        categories={categories}
      />
    </header>
  )
}  
