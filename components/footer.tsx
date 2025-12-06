"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Category {
  id: string
  name: string
  slug: string
}

export default function Footer({ categories }: { categories: Category[] }) {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()

  const footerLabels = {
    title: language === "en" ? "Haamro Views Nepal" : "हाम्रो भ्यूज नेपाल",
    tagline: language === "en" ? "Nepal's Trusted News Source" : "नेपालको विश्वस्त समाचार स्रोत",
    categories: language === "en" ? "Categories" : "विषयवस्तु",
    information: language === "en" ? "Information" : "जानकारी",
    about: language === "en" ? "About Us" : "हाम्रो बारेमा",
    contact: language === "en" ? "Contact Us" : "सम्पर्क गर्नुहोस्",
    privacy: language === "en" ? "Privacy Policy" : "गोपनीयता नीति",
    terms: language === "en" ? "Terms & Conditions" : "सर्तहरू र शर्तहरू",
    newsletter: language === "en" ? "Newsletter" : "समाचार पत्रिका",
    newsletterDesc:
      language === "en" ? "Get latest news directly in your email" : "नयाँ समाचार सरासरी आफ्नो ईमेलमा पाउनुहोस्",
    subscribe: language === "en" ? "Subscribe" : "सदस्यता लिनुहोस्",
    authors: language === "en" ? "Authors" : "लेखकहरू",
    videos: language === "en" ? "Videos" : "भिडियोहरू",
    opinions: language === "en" ? "Opinions" : "विचारहरू",
    copyright: language === "en" ? "All Rights Reserved." : "सर्वाधिकार सुरक्षित।",
    disclaimer:
      language === "en"
        ? "This site is created for demonstration purposes."
        : "यो साइट काल्पनिक उद्देश्यका लागि बनाइएको हो।",
  }

  return (
    <footer className="bg-card/50 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
           <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HVN</span>
              </div>
              <span className="font-bold text-lg">Haamro Views Nepal</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted source for real-time, verified news and global insights.
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

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">{footerLabels.categories}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {categories.slice(0, 4).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">{footerLabels.information}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  {footerLabels.about}
                </Link>
              </li>
              <li>
                <Link href="/authors" className="hover:text-primary transition-colors">
                  {footerLabels.authors}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  {footerLabels.contact}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  {footerLabels.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  {footerLabels.terms}
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-primary transition-colors">
                  {footerLabels.videos}
                </Link>
              </li>
              <li>
                <Link href="/opinions" className="hover:text-primary transition-colors">
                  {footerLabels.opinions}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">{footerLabels.newsletter}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {footerLabels.newsletterDesc}
            </p>

            <form className="flex gap-2">
              <Input
                type="email"
                placeholder={language === "en" ? "Your email" : "ईमेल..."}
                className="flex-1 h-10"
              />
              <Button
                type="submit"
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {footerLabels.title}. {footerLabels.copyright}
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70">
            {footerLabels.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
