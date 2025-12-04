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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {featured.map((article, index) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className={`group relative overflow-hidden rounded-lg cursor-pointer card-hover ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div className={`relative ${index === 0 ? "h-96" : "h-56"} w-full`}>
              <Image
                src={article.image || "/five.webp"}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="inline-block px-2 py-1 bg-red-600 rounded text-xs font-semibold">
                  {article.category.toUpperCase()}
                </span>
                <span className="text-xs text-gray-200">{article.time}</span>
              </div>
              <h3
                className={`font-bold text-pretty line-clamp-3 group-hover:text-red-400 transition-colors ${
                  index === 0 ? "text-lg md:text-xl" : "text-base md:text-lg"
                }`}
              >
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
