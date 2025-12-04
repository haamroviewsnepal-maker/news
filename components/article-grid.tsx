"use client"

import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Eye } from "lucide-react"

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  image: string
  date: string
  time: string
  category: string
  author: string
  views: number
  comments: number
}

interface Category {
  id: string
  name: string
  slug: string
  color: string
}

export default function ArticleGrid({ articles, categories }: { articles: Article[]; categories: Category[] }) {
  const getCategoryColor = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.color || "#999"
  }

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">ताजा समाचार</h2>

      <div className="space-y-4 md:space-y-6">
        {articles.map((article, index) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="flex flex-col md:flex-row gap-4 group cursor-pointer border-b border-border pb-4 md:pb-6 last:border-b-0 hover:bg-muted/30 p-2 md:p-0 rounded transition-colors"
          >
            <div className="relative w-full md:w-40 h-40 md:h-32 flex-shrink-0 overflow-hidden rounded-lg card-hover">
              <Image
                src={article.image || "/five.webp"}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading={index > 5 ? "lazy" : "eager"}
              />
              
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className="inline-block px-2 py-1 rounded text-xs font-semibold text-white"
                    style={{ backgroundColor: getCategoryColor(article.category) }}
                  >
                    {article.category.toUpperCase()}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground">{article.time}</span>
                </div>

                <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-red-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs md:text-sm text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>
              </div>

              <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
                <span>{article.author}</span>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3 md:h-4 md:w-4" />
                  {article.views}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                  {article.comments}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
