"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import Image from "next/image"

// Category Type
interface Category {
  id: string
  name: string
  slug: string
  icon: string
  color?: string
  description?: string
}

// Categories JSON Structure
interface CategoriesResponse {
  categories: Category[]
}

export function FooterSectionEnhanced() {
  const [email, setEmail] = useState<string>("")
  const [dynamicCategories, setDynamicCategories] = useState<Category[]>([])

  const { language } = useLanguage()

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch("/data/categories.json")
        const data: CategoriesResponse = await res.json()
        setDynamicCategories(data.categories)
      } catch (error) {
        console.error("Failed to load categories:", error)
      }
    }
    loadCategories()
  }, [])

  const labels = {
    quickLinks: language === "en" ? "Quick Links" : "द्रुत लिङ्कहरू",
    home: language === "en" ? "Home" : "गृह",
    newsCategories: language === "en" ? "Categories" : "विषयवस्तु",
    newsletter: language === "en" ? "Newsletter" : "समाचार पत्रिका",
    subscribe:
      language === "en"
        ? "Subscribe to get the latest news delivered to your inbox."
        : "आफ्नो इनबक्समा नयाँ समाचार पाउन सदस्य बनुहोस्।",
    privacyPolicy: language === "en" ? "Privacy Policy" : "गोपनीयता नीति",
    privacyDesc:
      language === "en"
        ? "Your privacy is important to us. We collect and use your information only for providing better services."
        : "तपाईंको गोपनीयता हाम्रो लागि महत्त्वपूर्ण छ।",
    termsConditions: language === "en" ? "Terms & Conditions" : "सर्तहरू र शर्तहरू",
    termsDesc:
      language === "en"
        ? "By using Haamro Views Nepal, you agree to our terms and conditions."
        : "हाम्रो भ्यूज नेपाल प्रयोग गरेर तपाइँ हाम्रा सर्तहरूसँग सहमत हुनुहुन्छ।",
    contactInfo: language === "en" ? "Contact Info" : "सम्पर्क जानकारी",
    email: "haamroviewsnepal@gmail.com",
    phone: "+977 9843867481",
    copyright:
      language === "en"
        ? `© 2025 Haamro Views Nepal. All rights reserved. | Design inspired by`
        : `© 2025 हाम्रो भ्यूज नेपाल। सर्वाधिकार सुरक्षित।`,
    codeshastra: "Codeshastra",
  }

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-t border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                 <Image
                src="/logo.png"
                alt="Nepal Flag"
                width={90}
                height={90}
                className="ml-1"
              />
              </div>

              <span className="font-extrabold text-2xl text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Haamro Views Nepal
              </span>

              <Image
                src="/nepal.png"
                alt="Nepal Flag"
                width={36}
                height={36}
                className="ml-1"
              />
            </div>

            <p className="text-white-foreground text-sm mb-4">
              {language === "en"
                ? "Your trusted source for real-time, verified news and global insights."
                : "नेपालको विश्वस्त समाचार स्रोत"}
            </p>

            <div className="flex gap-3">
              <a href="#"><Facebook className="w-5 h-5 text-white-foreground" /></a>
              <a href="#"><Twitter className="w-5 h-5 text-white-foreground" /></a>
              <a href="#"><Instagram className="w-5 h-5 text-white-foreground" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gradient">{labels.quickLinks}</h4>

            <ul className="space-y-2 text-sm text-white-foreground">
              <li><Link href="/">{labels.home}</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">{labels.contactInfo}</Link></li>
              <li><Link href="/authors">{language === "en" ? "Authors" : "लेखकहरू"}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-gradient">{labels.newsCategories}</h4>

            <ul className="space-y-2 text-sm text-white-foreground">
              {dynamicCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${cat.slug}`}
                    className="hover:text-primary flex items-center gap-2"
                  >
                    <span>{cat.icon}</span> {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-gradient">{labels.newsletter}</h4>

            <p className="text-sm text-white-foreground mb-4">{labels.subscribe}</p>

            <form className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === "en" ? "Your email" : "तपाइँको ईमेल"}
              />
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div>
              <h4 className="font-semibold mb-3 text-gradient">{labels.privacyPolicy}</h4>
              <p className="text-sm text-white-foreground">{labels.privacyDesc}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gradient">{labels.termsConditions}</h4>
              <p className="text-sm text-white-foreground">{labels.termsDesc}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gradient">{labels.contactInfo}</h4>
              <div className="space-y-2 text-sm text-white-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> {labels.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {labels.phone}
                </div>
              </div>
            </div>

          </div>

          <div className="text-center text-sm text-white-foreground border-t border-border pt-8">
            <p>
              {labels.copyright}{" "}
              <a
                href="https://portfolio-hari-singh.vercel.app/"
                target="_blank"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold"
              >
                {labels.codeshastra}
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
