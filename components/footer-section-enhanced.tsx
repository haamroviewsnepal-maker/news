"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import Image from "next/image"

export function FooterSectionEnhanced() {
  const [email, setEmail] = useState("")
  const { language } = useLanguage()

  const labels = {
    quickLinks: language === "en" ? "Quick Links" : "द्रुत लिङ्कहरू",
    home: language === "en" ? "Home" : "गृह",
    news: language === "en" ? "News" : "समाचार",
    categories: language === "en" ? "Categories" : "विषयवस्तु",
    about: language === "en" ? "About" : "बारेमा",
    newsCategories: language === "en" ? "Categories" : "विषयवस्तु",
    technology: language === "en" ? "Technology" : "प्रविधि",
    business: language === "en" ? "Business" : "बिजनेस",
    environment: language === "en" ? "Environment" : "पर्यावरण",
    health: language === "en" ? "Health" : "स्वास्थ्य",
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
        ? `© 2025 Haamro Views Nepal. All rights reserved. | Designed and developed by`
        : `© 2025 हाम्रो भ्यूज नेपाल। सर्वाधिकार सुरक्षित।`,
    codeshastra: "Codeshastra",
  }

  return (
    <footer className="bg-card/50 border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HVN</span>
              </div>

              {/* BRAND TITLE WITH ANIMATED SOFT GRADIENT */}
              <span className="font-extrabold text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Haamro Views Nepal
              </span>

              {/* Nepal flag only in Nepali */}
              {language === "ne" && (
                <Image
                  src="/backgroundlogo.png"
                  alt="Nepal Flag"
                  width={36}
                  height={36}
                  className="ml-1"
                />
                
              )}
              <Image
                  src="/nepal.png"
                  alt="Nepal Flag"
                  width={36}
                  height={36}
                  className="ml-1"
                />
            </div>

            <p className="text-muted-foreground text-sm mb-4">
              {language === "en"
                ? "Your trusted source for real-time, verified news and global insights."
                : "नेपालको विश्वस्त समाचार स्रोत"}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {labels.quickLinks}
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">{labels.home}</Link></li>
              <li><Link href="/about" className="hover:text-primary">{labels.about}</Link></li>
              <li><Link href="/contact" className="hover:text-primary">{labels.contactInfo}</Link></li>
              <li><Link href="/authors" className="hover:text-primary">{language === "en" ? "Authors" : "लेखकहरू"}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {labels.newsCategories}
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/category/technology" className="hover:text-primary">{labels.technology}</Link></li>
              <li><Link href="/category/business" className="hover:text-primary">{labels.business}</Link></li>
              <li><Link href="/category/health" className="hover:text-primary">{labels.health}</Link></li>
              <li><Link href="/opinions" className="hover:text-primary">{language === "en" ? "Opinions" : "विचारहरू"}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {labels.newsletter}
            </h4>

            <p className="text-sm text-muted-foreground mb-4">{labels.subscribe}</p>

            <form className="flex gap-2">
              <Input
                type="email"
                placeholder={language === "en" ? "Your email" : "तपाइँको ईमेल"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-10"
              />

              <Button
                type="submit"
                size="sm"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Lower Section */}
        <div className="border-t border-border pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            
            {/* Privacy Policy */}
            <div>
              <h4 className="font-semibold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {labels.privacyPolicy}
              </h4>
              <p className="text-sm text-muted-foreground">{labels.privacyDesc}</p>
            </div>

            {/* Terms */}
            <div>
              <h4 className="font-semibold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {labels.termsConditions}
              </h4>
              <p className="text-sm text-muted-foreground">{labels.termsDesc}</p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {labels.contactInfo}
              </h4>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{labels.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{labels.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
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
