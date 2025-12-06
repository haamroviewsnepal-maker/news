"use client"

import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function AuthorsPage() {
  const { language } = useLanguage()
  const [authors, setAuthors] = useState<any[]>([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const [authorsRes, categoriesRes] = await Promise.all([
        fetch("/data/authors.json"),
        fetch("/data/categories.json"),
      ])
      const authorsData = await authorsRes.json()
      const categoriesData = await categoriesRes.json()
      setAuthors(authorsData.authors)
      setCategories(categoriesData.categories)
    }
    loadData()
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Navigation categories={categories} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        
      
        <div className="flex items-center gap-4 mb-8">
          
          {/* MAIN LOGO */}
          <Image 
            src="/backgroundlogo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
          />

          {/* PAGE TITLE WITH GRADIENT */}
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {language === "en" ? "Our Authors" : "हाम्रो लेखकहरू"}
          </h1>

          {/* NEPAL FLAG (only when Nepali language is selected) */}
          {language === "ne" && (
            <Image
              src="/nepal.png"
              alt="Nepal Flag"
              width={40}
              height={40}
              className="object-contain"
            />
          )}

        </div>

        {/* SUBTITLE WITH SOFT GRADIENT */}
        <p className="text-lg mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {language === "en"
            ? "Meet the talented journalists and writers behind Haamro Views Nepal"
            : "हामरो भ्यूज नेपाल पछाडिका प्रतिभाशाली पत्रकार र लेखकहरू"}
        </p>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <div
              key={author.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={author.image || "/placeholder.svg"}
                alt={author.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                {/* AUTHOR NAME WITH GRADIENT */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {author.name}
                </h3>

                {/* AUTHOR TITLE WITH SMALLER GRADIENT */}
                <p className="text-sm bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
                  {language === "en" ? author.titleEn : author.title}
                </p>

                <p className="text-sm text-muted-foreground mb-4">
                  {language === "en" ? author.bioEn : author.bio}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-t border-border pt-4">
                  <span>
                    {author.articles} {language === "en" ? "articles" : "लेखहरू"}
                  </span>
                </div>

                <a
                  href={`mailto:${author.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-colors text-sm font-medium w-full justify-center"
                >
                  <Mail className="h-4 w-4" />
                  {language === "en" ? "Contact" : "सम्पर्क"}
                </a>

              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer categories={categories} />
    </div>
  )
}
