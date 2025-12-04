"use client"

import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, Eye } from "lucide-react"

export default function OpinionsPage() {
  const { language } = useLanguage()
  const [opinions, setOpinions] = useState<any[]>([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const [opinionsRes, categoriesRes] = await Promise.all([
        fetch("/data/opinions.json"),
        fetch("/data/categories.json"),
      ])
      const opinionsData = await opinionsRes.json()
      const categoriesData = await categoriesRes.json()
      setOpinions(opinionsData.opinions)
      setCategories(categoriesData.categories)
    }
    loadData()
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Navigation categories={categories} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-12 text-foreground">
          {language === "en" ? "Opinions & Analysis" : "विचार र विश्लेषण"}
        </h1>

        <div className="space-y-8">
          {opinions.map((opinion) => (
            <div
              key={opinion.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                <div className="md:col-span-1">
                  <img
                    src={opinion.image || "/placeholder.svg"}
                    alt={opinion.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                      <img
                        src={opinion.authorImage || "/placeholder.svg"}
                        alt={opinion.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{opinion.author}</p>
                      <p className="text-xs text-muted-foreground">{new Date(opinion.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{opinion.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{opinion.excerpt}</p>
                  <Link
                    href={`/opinion/${opinion.slug}`}
                    className="text-primary font-semibold hover:underline inline-block mb-4"
                  >
                    {language === "en" ? "Read Full Article →" : "पूरा लेख पढ्नुहोस् →"}
                  </Link>
                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{opinion.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{opinion.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer categories={categories} />
    </div>
  )
}
