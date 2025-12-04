"use client"

import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { FooterSectionEnhanced } from "@/components/footer-section-enhanced"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const { language, t } = useLanguage()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const loadCategories = async () => {
      const res = await fetch("/data/categories.json")
      const data = await res.json()
      setCategories(data.categories)
    }
    loadCategories()
  }, [])

  const content = {
    en: {
      title: "About Haamro Views Nepal",
      description: "Our Mission",
      mission:
        "Haamro Views Nepal is dedicated to providing accurate, timely, and unbiased news coverage to the people of Nepal. We believe in the power of journalism to inform, educate, and empower society.",
      vision: "To be the most trusted and respected news platform in Nepal and South Asia.",
      values: [
        { title: "Integrity", desc: "We maintain the highest standards of journalistic integrity and ethics." },
        { title: "Accuracy", desc: "Every story is thoroughly researched and fact-checked before publication." },
        { title: "Independence", desc: "We operate independently, free from political or corporate influence." },
        { title: "Inclusivity", desc: "We provide voice to all sections of society, especially the marginalized." },
      ],
      team: "Our Team",
      teamDesc:
        "Our team consists of experienced journalists, editors, and technical professionals dedicated to bringing you the best news coverage.",
    },
    ne: {
      title: "हामरो भ्यूज नेपाल बारेमा",
      description: "हाम्रो लक्ष्य",
      mission:
        "हामरो भ्यूज नेपाल नेपालको मानिसहरूलाई सटीक, समयोपयोगी र निरपेक्ष समाचार कभरेज प्रदान गर्न समर्पित छ। हामी पत्रकारिताको शक्तिमा विश्वास गर्छौँ जसले समाजलाई सूचित, शिक्षित र सशक्त बनाउन सक्छ।",
      vision: "नेपाल र दक्षिण एशियामा सबैभन्दा विश्वस्त र सम्मानित समाचार प्ल्यातफर्म बन्न।",
      values: [
        { title: "सतता", desc: "हामी पत्रकारिता नैतिकता र सिद्धान्तको उच्चतम मान बनाए राख्छौँ।" },
        { title: "सटीकता", desc: "प्रत्येक कहानी प्रकाशन गर्नुअघि गहिरो अनुसन्धान र तथ्य परीक्षण गरिन्छ।" },
        { title: "स्वतन्त्रता", desc: "हामी स्वतन्त्र रूपमा काम गर्छौँ, राजनीतिक वा कर्पोरेट प्रभावमुक्त।" },
        { title: "समावेशिता", desc: "हामी समाजको सबै तहको आवाज दिन्छौँ, विशेषत हाशिएमा पारिएकाहरूको।" },
      ],
      team: "हाम्रो टोली",
      teamDesc: "हाम्रो टोली अनुभवी पत्रकारहरू, सम्पादकहरू र प्राविधिक विशेषज्ञहरूको समावेश छ।",
    },
  }

  const lang = language === "en" ? content.en : content.ne

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Navigation categories={categories} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{lang.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{lang.description}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground">हाम्रो लक्ष्य</h2>
            <p className="text-foreground mb-6">{lang.mission}</p>
            <p className="text-foreground text-lg font-semibold">{lang.vision}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">मूल मूल्यहरू</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lang.values.map((value, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">{lang.team}</h2>
            <p className="text-foreground">{lang.teamDesc}</p>
          </section>
        </div>
      </main>

      <FooterSectionEnhanced />
    </div>
  )
}
