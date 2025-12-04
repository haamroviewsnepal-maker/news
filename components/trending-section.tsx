"use client"

import Link from "next/link"
import { TrendingUp } from "lucide-react"

interface TrendingItem {
  id: number
  title: string
  slug: string
  category: string
  trending_score: number
  mentions: number
}

interface Article {
  id: number
  title: string
  slug: string
}

export default function TrendingSection({
  trending,
  articles,
}: {
  trending: TrendingItem[]
  articles: Article[]
}) {
  return (
    <aside className="sticky top-20">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-red-600" />
          <h2 className="text-lg font-bold text-foreground">ट्रेन्डिङ</h2>
        </div>

        <div className="space-y-4">
          {trending.slice(0, 5).map((item, index) => (
            <Link
              key={item.id}
              href={`/article/${item.slug}`}
              className="flex gap-3 p-3 rounded-lg hover:bg-muted group transition-colors cursor-pointer"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground group-hover:text-red-600 transition-colors line-clamp-2">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{item.mentions} उल्लेख</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
