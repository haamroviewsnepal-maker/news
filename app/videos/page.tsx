"use client"

import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { FooterSectionEnhanced } from "@/components/footer-section-enhanced"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"
import { Play } from "lucide-react"

export default function VideosPage() {
  const { language } = useLanguage()
  const [videos, setVideos] = useState<any[]>([])
  const [categories, setCategories] = useState([])
  const [selectedVideo, setSelectedVideo] = useState<any>(null)

  useEffect(() => {
    const loadData = async () => {
      const [videosRes, categoriesRes] = await Promise.all([fetch("/data/videos.json"), fetch("/data/categories.json")])
      const videosData = await videosRes.json()
      const categoriesData = await categoriesRes.json()
      setVideos(videosData.videos)
      setCategories(categoriesData.categories)
      if (videosData.videos.length > 0) {
        setSelectedVideo(videosData.videos[0])
      }
    }
    loadData()
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Navigation categories={categories} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-12 text-foreground">{language === "en" ? "Videos" : "भिडियोहरू"}</h1>

        {selectedVideo && (
          <div className="mb-12">
            <div className="bg-black rounded-lg overflow-hidden mb-4 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">{selectedVideo.title}</h2>
            <p className="text-muted-foreground mb-4">{selectedVideo.description}</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span>
                {selectedVideo.views} {language === "en" ? "views" : "दृष्य"}
              </span>
              <span>{selectedVideo.duration}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="cursor-pointer group overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all"
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <Play className="h-12 w-12 text-white fill-white" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground line-clamp-2 mb-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <FooterSectionEnhanced />
    </div>
  )
}
