"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "en" | "ne"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  t: (key: string) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<Record<Language, any>>({
    en: {},
    ne: {},
  })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const stored = (localStorage.getItem("language") as Language) || "en"
    setLanguage(stored)
    document.documentElement.lang = stored
  }, [])

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const res = await fetch("/data/translations.json")
        const data = await res.json()
        setTranslations(data)
      } catch (error) {
        console.error("Error loading translations:", error)
      }
    }

    loadTranslations()
  }, [])

  const toggleLanguage = () => {
    const newLanguage: Language = language === "en" ? "ne" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    document.documentElement.lang = newLanguage
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  const value = {
    language,
    toggleLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
