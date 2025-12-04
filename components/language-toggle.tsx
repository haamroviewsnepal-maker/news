"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-transparent"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline text-xs font-medium">{language === "en" ? "नेपाली" : "English"}</span>
    </Button>
  )
}
