"use client"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageToggle from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN ROW */}
        <div className="flex items-center justify-between h-20">

          {/* LEFT: LOGO + TITLE */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="/backgroundlogo.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </Link>

          {/* CENTER: Search Bar (Desktop Only) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-full max-w-md">
              <form action="/search" method="get">
                <input
                  type="search"
                  name="q"
                  placeholder={t("searchPlaceholder")}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
              </form>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile search button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="md:hidden"
            >
              <Search className="h-6 w-6" />
            </Button>

            {/* Language Toggle */}
            <LanguageToggle />

            {/* Sign In (Desktop Only) */}
            <Button variant="outline" className="hidden md:inline-flex bg-transparent">
              {t("signIn")}
            </Button>
          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        {showMobileSearch && (
          <div className="pb-4 md:hidden">
            <div className="relative">
              <form action="/search" method="get" className="flex gap-2">
                <input
                  type="search"
                  name="q"
                  placeholder={t("searchPlaceholder")}
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                />
                <Button type="submit" size="sm">
                  {t("searchButton")}
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
