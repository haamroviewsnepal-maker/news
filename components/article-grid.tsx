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

export default function ArticleGrid({
  articles,
  categories,
}: {
  articles: Article[]
  categories: Category[]
}) {
  const getCategoryColor = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.color || "#999"
  }

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">ताजा समाचार</h2>

      <div className="grid grid-cols-1 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all bg-white"
          >
            {/* TITLE ABOVE IMAGE */}
            <h3 className="text-3xl font-bold p-4 pb-2 group-hover:text-red-600 transition-colors">
              {article.title}
            </h3>

            {/* IMAGE */}
            <div className="relative w-full h-56 md:h-64">
              <Image
                src={article.image || "/five.webp"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CATEGORY + TIME */}
            <div className="flex items-center gap-3 px-4 mt-3">
              <span
                className="text-xs px-2 py-1 rounded text-white font-semibold"
                style={{ backgroundColor: getCategoryColor(article.category) }}
              >
                {article.category.toUpperCase()}
              </span>

              <span className="text-xs text-gray-500">{article.time}</span>
            </div>

            {/* EXCERPT */}
            <p className="text-sm text-gray-700 px-4 mt-2 line-clamp-3">
              {article.excerpt}
            </p>

            {/* STATS */}
            <div className="flex items-center gap-4 text-xs text-gray-500 px-4 py-4">
              <span>{article.author}</span>

              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" /> {article.views}
              </div>

              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" /> {article.comments}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
