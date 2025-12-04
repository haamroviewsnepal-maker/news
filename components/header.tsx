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
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <Image  src="/logo.png" alt="Logo" width={38} height={38} className="object-contain" />
            </div>
            <span className="hidden sm:inline text-xl font-bold text-foreground">{t("title")}</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8">
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

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="md:hidden"
            >
              <Search className="h-5 w-5" />
            </Button>
            <LanguageToggle />
            <Button variant="outline" className="hidden md:inline-flex bg-transparent">
              {t("signIn")}
            </Button>
          </div>
        </div>

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
