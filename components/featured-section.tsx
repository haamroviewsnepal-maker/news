"use client"

import Image from "next/image"
import Link from "next/link"

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
}

export default function FeaturedSection({ articles }: { articles: Article[] }) {
  const featured = articles.slice(0, 3)

  return (
    <section className="mb-8">
      {featured.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.slug}`}
          className="block group border-b pb-4 mb-6"
        >
          {/* Title ABOVE image */}
          <h3 className="text-3xl md:text-2xl font-bold mb-3 group-hover:text-red-600 text-blue-600 transition-colors">
            {article.title}
          </h3>

          {/* Image */}
          <div className="relative w-full h-64 rounded overflow-hidden">
            <Image
              src={article.image || "/five.webp"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Category + Time Row */}
          <div className="flex items-center gap-3 text-sm text-gray-600 mt-3">
            <span className="text-gray-400">{article.time}</span>
          </div>

          {/* Excerpt / Body */}
          <p className="text-gray-700 mt-2 line-clamp-3">
            {article.excerpt}
          </p>
        </Link>
      ))}
    </section>
  )
}
