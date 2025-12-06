"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import FeaturedSection from "@/components/featured-section"
import ArticleGrid from "@/components/article-grid"
import TrendingSection from "@/components/trending-section"
import { FooterSectionEnhanced } from "@/components/footer-section-enhanced"
import { useLanguage } from "@/contexts/language-context"
import FooterSocialBar from "@/components/FooterSocialBar"
import DailyInfoSection from "@/components/DailyInfoSection"
import AdComponent from "@/components/AdComponent"
import TrendingRates from "@/components/trending"

export default function Home() {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])
  const [trending, setTrending] = useState([])
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    const loadData = async () => {
      try {
        const [articlesRes, categoriesRes, trendingRes] = await Promise.all([
          fetch("/data/articles.json"),
          fetch("/data/categories.json"),
          fetch("/data/trending.json"),
        ])

        const articlesData = await articlesRes.json()
        const categoriesData = await categoriesRes.json()
        const trendingData = await trendingRes.json()

        setArticles(articlesData.articles)
        setCategories(categoriesData.categories)
        setTrending(trendingData.trending)
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">{language === "en" ? "Loading..." : "लोड हुँदै छ..."}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation categories={categories} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdComponent />
        <TrendingRates />
        <FeaturedSection articles={articles} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          <div className="lg:col-span-3">
            <ArticleGrid articles={articles} categories={categories} />
          </div>

          <aside className="lg:col-span-1">
            <TrendingSection trending={trending} articles={articles} />
          </aside>
        </div>
          <DailyInfoSection />
         <FooterSocialBar />
      </main>
    
      <FooterSectionEnhanced />
    </div>
  )
}
