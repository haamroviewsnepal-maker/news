"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

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
        : "आपनो इनबक्समा नयाँ समाचार पाउन सदस्य बनुहोस्।",
    privacyPolicy: language === "en" ? "Privacy Policy" : "गोपनीयता नीति",
    privacyDesc:
      language === "en"
        ? "Your privacy is important to us. We collect and use your information only for providing better services. Read our full privacy policy to understand how we protect your data and respect your privacy rights."
        : "तपाइँको गोपनीयता हामरो लागि महत्त्वपूर्ण छ। हामी तपाइँको जानकारी केवल राम्रो सेवा प्रदान गर्न प्रयोग गर्छौँ।",
    termsConditions: language === "en" ? "Terms & Conditions" : "सर्तहरू र शर्तहरू",
    termsDesc:
      language === "en"
        ? "By using Haamro Views Nepal, you agree to our terms and conditions. These terms govern your use of our website and services. We reserve the right to update these terms. Please review them periodically for any changes."
        : "हामरो भ्यूज नेपाल प्रयोग गरेर तपाइँ हामरो सर्तहरूसँत सहमत हुनुहुन्छ।",
    contactInfo: language === "en" ? "Contact Info" : "सम्पर्क जानकारी",
    email: "haamroviewsnepal@gmail.com",
    phone: "+977 9843867481",
    copyright:
      language === "en"
        ? `© 2025 Haamro Views Nepal. All rights reserved. | Design inspired by`
        : `© 2025 हामरो भ्यूज नेपाल। सर्वाधिकार सुरक्षित।`,
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
                <span className="text-red font-bold">HVN</span>
              </div>
              <span className="font-bold text-lg">Haamro Views Nepal</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {language === "en"
                ? "Your trusted source for real-time, verified news and global insights."
                : "नेपालको विश्वस्त समाचार स्रोत"}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/haamroviewsnepal2025?mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>

              <a href="https://www.youtube.com/@HaamroViews" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2c-.3-1.2-1.3-2.1-2.5-2.3C18.7 3.5 12 3.5 12 3.5s-6.7 0-9 .4c-1.2.2-2.2 1.1-2.5 2.3C0 8 0 12 0 12s0 4 .5 5.8c.3 1.2 1.3 2.1 2.5 2.3 2.3.4 9 .4 9 .4s6.7 0 9-.4c1.2-.2 2.2-1.1 2.5-2.3.4-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.7 15.3V8.7L15.8 12l-6.1 3.3z" />
                </svg>
              </a>

              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>

              <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{labels.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  {labels.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  {labels.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  {labels.contactInfo}
                </Link>
              </li>
              <li>
                <Link href="/authors" className="hover:text-primary transition-colors">
                  {language === "en" ? "Authors" : "लेखकहरू"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">{labels.newsCategories}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/category/technology" className="hover:text-primary transition-colors">
                  {labels.technology}
                </Link>
              </li>
              <li>
                <Link href="/category/business" className="hover:text-primary transition-colors">
                  {labels.business}
                </Link>
              </li>
              <li>
                <Link href="/category/health" className="hover:text-primary transition-colors">
                  {labels.health}
                </Link>
              </li>
              <li>
                <Link href="/opinions" className="hover:text-primary transition-colors">
                  {language === "en" ? "Opinions" : "विचारहरू"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">{labels.newsletter}</h4>
            <p className="text-sm text-muted-foreground mb-4">{labels.subscribe}</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder={language === "en" ? "Your email" : "तपाइँको ईमेल"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-10"
              />
              <Button type="submit" size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Privacy Policy */}
            <div>
              <h4 className="font-semibold mb-3">{labels.privacyPolicy}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{labels.privacyDesc}</p>
            </div>

            {/* Terms & Conditions */}
            <div>
              <h4 className="font-semibold mb-3">{labels.termsConditions}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{labels.termsDesc}</p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-3">{labels.contactInfo}</h4>
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

          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            <p>
              {labels.copyright}{" "}
              <a
                href="https://portfolio-hari-singh.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
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
