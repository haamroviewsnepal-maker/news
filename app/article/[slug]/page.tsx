"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Share2, MessageCircle, Eye, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface Article {
  id: number
  title: string
  slug: string
  category: string
  author: string
  date: string
  time: string
  image: string
  content: string
  excerpt: string
  views: number
  comments: number
}

interface Category {
  id: string
  name: string
  slug: string
  color: string
}

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string

  const [article, setArticle] = useState<Article | null>(null)
  const [articles, setArticles] = useState<Article[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [articlesRes, categoriesRes] = await Promise.all([
          fetch("/data/articles.json"),
          fetch("/data/categories.json"),
        ])

        const articlesData = await articlesRes.json()
        const categoriesData = await categoriesRes.json()

        setArticles(articlesData.articles)
        setCategories(categoriesData.categories)

        const found = articlesData.articles.find((a: Article) => a.slug === slug)
        setArticle(found)
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Navigation categories={categories} />
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Navigation categories={categories} />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">समाचार फेला पार्न सकिएन</h1>
          <Link href="/">
            <Button>होमपेजमा फर्कनुहोस्</Button>
          </Link>
        </div>
      </div>
    )
  }

  const getCategoryColor = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.color || "#999"
  }

  const relatedArticles = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation categories={categories} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>फर्कनुहोस्</span>
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
           
            <span className="text-muted-foreground text-sm">{article.time}</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4 text-pretty">{article.title}</h1>

          <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-4">
              <span>{article.author}</span>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {article.views}
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                {article.comments}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg leading-relaxed text-foreground mb-6">{article.excerpt}</p>
              <p className="text-base leading-relaxed text-foreground">{article.content}</p>
            </div>

            {/* Share Section */}
            <div className="border-t border-border pt-6 mt-8">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-foreground">साझा गर्नुहोस्:</span>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  फेसबुक
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  ट्विटर
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  लिङ्क प्रतिलिपि
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Related Articles */}
            <div className="bg-card border border-border rounded-lg p-6 sticky top-20">
              <h3 className="text-lg font-bold text-foreground mb-4">सम्बन्धित समाचार</h3>
              <div className="space-y-4">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/article/${related.slug}`} className="block group">
                    <div className="relative w-full h-24 rounded mb-2 overflow-hidden">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer categories={categories} />
    </div>
  )
}
