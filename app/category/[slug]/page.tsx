"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Search } from "lucide-react"
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
  excerpt: string
  views: number
  comments: number
}

interface Category {
  id: string
  name: string
  slug: string
  color: string
  icon: string
}

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.slug as string

  const [articles, setArticles] = useState<Article[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  const currentCategory = categories.find((c) => c.slug === categorySlug)

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

        const categoryArticles = articlesData.articles.filter((a: Article) => a.category === categorySlug)
        setFilteredArticles(categoryArticles)
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [categorySlug])

  useEffect(() => {
    if (!searchTerm) {
      const categoryArticles = articles.filter((a) => a.category === categorySlug)
      setFilteredArticles(categoryArticles)
    } else {
      const searchResults = articles.filter(
        (a) =>
          a.category === categorySlug &&
          (a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(searchTerm.toLowerCase())),
      )
      setFilteredArticles(searchResults)
    }
  }, [searchTerm, articles, categorySlug])

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation categories={categories} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>फर्कनुहोस्</span>
        </Link>

       

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="search"
              placeholder="यो श्रेणीमा खोज गर्नुहोस्..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 top-3.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="group flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-4">
                  <div className="flex items-center gap-2 mb-3">
                  
                    <span className="text-xs text-muted-foreground">{article.time}</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{article.excerpt}</p>

                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
                    <span>{article.author}</span>
                    <span>{article.views} दृश्य</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">कुनै समाचार फेला पार्न सकिएन</p>
            <Button onClick={() => setSearchTerm("")}>खोज मेटाउनुहोस्</Button>
          </div>
        )}

        {/* Results Count */}
        {filteredArticles.length > 0 && (
          <div className="mt-8 text-center text-sm text-muted-foreground">
            कुल {filteredArticles.length} समाचार फेला परे
          </div>
        )}
      </main>

      <Footer categories={categories} />
    </div>
  )
}
