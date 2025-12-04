"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle, Share2 } from "lucide-react"
import Link from "next/link"

export default function OpinionPage({ params }: { params: { slug: string } }) {
  const { language } = useLanguage()
  const [opinion, setOpinion] = useState<any>(null)
  const [allOpinions, setAllOpinions] = useState<any[]>([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [opinionsRes, categoriesRes] = await Promise.all([
          fetch("/data/opinions.json"),
          fetch("/data/categories.json"),
        ])
        const opinionsData = await opinionsRes.json()
        const categoriesData = await categoriesRes.json()

        setAllOpinions(opinionsData.opinions)
        setCategories(categoriesData.categories)

        const foundOpinion = opinionsData.opinions.find((o: any) => o.slug === params.slug)
        setOpinion(foundOpinion || null)
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!opinion) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <Navigation categories={categories} />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-center text-muted-foreground">
            {language === "en" ? "Opinion not found" : "विचार फेला परेन"}
          </p>
        </main>
        <Footer categories={categories} />
      </div>
    )
  }

  const relatedOpinions = allOpinions.filter((o) => o.id !== opinion.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Navigation categories={categories} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        {/* Featured Image */}
        <img
          src={opinion.image || "/placeholder.svg"}
          alt={opinion.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={opinion.authorImage || "/placeholder.svg"}
            alt={opinion.author}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-bold text-foreground">{opinion.author}</p>
            <p className="text-sm text-muted-foreground">{new Date(opinion.date).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Title and Content */}
        <h1 className="text-4xl font-bold mb-6 text-foreground">{opinion.title}</h1>

        <div className="flex gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>{opinion.views}</span>
            <span>{language === "en" ? "views" : "दृष्य"}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>
              {opinion.comments} {language === "en" ? "comments" : "मन्तव्य"}
            </span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-foreground leading-relaxed mb-6">{opinion.excerpt}</p>
          <p className="text-foreground leading-relaxed whitespace-pre-wrap">{opinion.content}</p>
        </div>

        {/* Share Section */}
        <div className="border-t border-b border-border py-6 mb-12">
          <p className="font-semibold text-foreground mb-4">
            {language === "en" ? "Share this article" : "यो लेख साझा गर्नुहोस्"}
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Share2 className="h-4 w-4" />
              Facebook
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors">
              <Share2 className="h-4 w-4" />
              Twitter
            </button>
          </div>
        </div>

        {/* Related Opinions */}
        {relatedOpinions.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {language === "en" ? "More Opinions" : "अन्य विचारहरू"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedOpinions.map((rel) => (
                <Link key={rel.id} href={`/opinion/${rel.slug}`}>
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <img src={rel.image || "/placeholder.svg"} alt={rel.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold text-foreground line-clamp-2 mb-2">{rel.title}</h3>
                      <p className="text-sm text-muted-foreground">{rel.author}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer categories={categories} />
    </div>
  )
}
