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
      } catch {
        console.error("Failed to load categories")
      }
    }
    loadCategories()
  }, [])

  return (
    <>
      {/* ⭐ TOP STICKY BAR */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-green-600 via-purple-600 to-red-600 text-white text-sm py-1 shadow">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="text-sm font-bold text-white">
            {language === "en"
              ? "For truthful, factual, and impartial news."
              : "सत्य, तथ्य र निष्पक्ष समाचारको लागि"}
          </span>
          <LanguageToggle />
        </div>
      </div>

      {/* ⭐ MAIN HEADER */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow">
        <div className="w-full mx-auto px-4 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
            <div className="flex items-center gap-2">
              <span className="text-4xl font-extrabold tracking-wide text-white">
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

          {/* MOBILE BUTTONS */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="text-white"
            >
              <Search className="h-6 w-6 text-white" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMobileMenu(true)}
              className="text-white"
            >
              <Menu className="h-7 w-7 text-white" />
            </Button>
          </div>
        </div>

        {/* ⭐ MOBILE SEARCH BAR */}
        {showMobileSearch && (
          <div className="px-4 pb-3">
            <form action="/search" className="flex gap-2">
              <input
                type="search"
                name="q"
                placeholder={t("searchPlaceholder")}
                className="flex-1 px-4 py-2 border rounded-lg text-black"
              />
              <Button size="sm">{t("searchButton")}</Button>
            </form>
          </div>
        )}

        {/* ⭐ MOBILE MENU DRAWER */}
        <MobileMenu
          open={showMobileMenu}
          onClose={() => setShowMobileMenu(false)}
          categories={categories}
        />
      </header>
    </>
  )
}
