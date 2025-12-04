"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Search, ArrowLeft } from "lucide-react"
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
}

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const [articles, setArticles] = useState<Article[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
  const [searchTerm, setSearchTerm] = useState(query)
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

        if (query) {
          performSearch(articlesData.articles, query)
        }
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [query])

  const performSearch = (articleList: Article[], searchQuery: string) => {
    const results = articleList.filter(
      (a) =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.content?.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredArticles(results)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch(articles, searchTerm)
  }

  const getCategoryColor = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.color || "#999"
  }

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

        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">खोज परिणाम</h1>

          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="search"
                placeholder="खोज गर्नुहोस्..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-3.5 h-5 w-5 text-muted-foreground" />
            </div>
            <Button type="submit">खोज</Button>
          </form>
        </div>

        {/* Results */}
        {filteredArticles.length > 0 ? (
          <div>
            <p className="text-sm text-muted-foreground mb-6">
              "{query}" को लागि {filteredArticles.length} परिणाम फेला परे
            </p>

            <div className="space-y-6">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.slug}`}
                  className="flex gap-4 group cursor-pointer border-b border-border pb-6 last:border-b-0 hover:bg-muted/50 p-4 rounded transition-colors"
                >
                  <div className="relative w-40 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="inline-block px-2 py-1 rounded text-xs font-semibold text-white"
                          style={{ backgroundColor: getCategoryColor(article.category) }}
                        >
                          {article.category.toUpperCase()}
                        </span>
                        <span className="text-sm text-muted-foreground">{article.time}</span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{article.author}</span>
                      <span>{article.views} दृश्य</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">कुनै परिणाम फेला पार्न सकिएन</p>
            <p className="text-sm text-muted-foreground mb-6">कृपया अलफ्लो शब्द वा अक्षर प्रयोग गर्नुहोस्</p>
            <Button asChild>
              <Link href="/">होमपेजमा फर्कनुहोस्</Link>
            </Button>
          </div>
        )}
      </main>

      <Footer categories={categories} />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  )
}
