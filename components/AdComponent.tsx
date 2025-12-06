"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface AdItem {
  id: number
  title: string
  image: string
  url: string
  description?: string
}

export default function AdComponent() {
  const [ad, setAd] = useState<AdItem | null>(null)

  useEffect(() => {
    fetch("/data/ad.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setAd(data[0]) // ⭐ show only ONE ad
        }
      })
  }, [])

  if (!ad) return null

  return (
    <div className="border rounded-lg shadow-sm p-3 bg-white my-4">
      <Link href={ad.url} target="_blank">
        <div className="relative w-full h-40 rounded overflow-hidden mb-2">
          <Image src={ad.image} alt={ad.title} fill className="object-cover" />
        </div>

        <h3 className="font-bold text-lg">{ad.title}</h3>

        {ad.description && (
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{ad.description}</p>
        )}
      </Link>
    </div>
  )
}
