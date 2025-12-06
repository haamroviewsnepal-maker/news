"use client"

import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { FooterSectionEnhanced } from "@/components/footer-section-enhanced"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const { language } = useLanguage()
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
      title: "Contact Us",
      description: "Get in touch with Haamro Views Nepal",
      address: "Bedkot Municipality, Kanchanpur, Nepal",
      phone_number: "+977 9843867481",
      email_address: "haamroviewsnepal@gmail.com",
      hours: "Contact Hours: Mon–Fri, 9AM–5PM NPT",
    },
    ne: {
      title: "सम्पर्क गर्नुहोस्",
      description: "हाम्रो भ्यूज नेपालसँग सम्पर्कमा रहनुहोस्",
      address: "बेदकोट नगरपालिका, कञ्चनपुर, नेपाल",
      phone_number: "+९७७ ९८४३८६७४८१",
      email_address: "haamroviewsnepal@gmail.com",
      hours: "सम्पर्क समय: सोम–शुक्र, ९ बजे – ५ बजे (NPT)",
    },
  }

  const lang = language === "en" ? content.en : content.ne

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Navigation categories={categories} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="max-w-5xl">

          {/* PAGE TITLE */}
          <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {lang.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-12">{lang.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* MAP SECTION */}
            <div className="w-full h-80 md:h-full overflow-hidden rounded-xl shadow-md border border-border">
              <iframe
                title="Bedkot Municipality Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.0639511138874!2d80.29887!3d28.825663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a2c015ebd919af%3A0x8bbd182d4c8768e7!2sBedkot%20Municipality!5e0!3m2!1sen!2snp!4v1706000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-8">
              
              {/* Address */}
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-1">
                      {language === "en" ? "Address" : "ठेगाना"}
                    </h3>
                    <p className="text-muted-foreground">{lang.address}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-1">
                      {language === "en" ? "Phone" : "फोन"}
                    </h3>
                    <p className="text-muted-foreground">{lang.phone_number}</p>
                    <p className="text-xs text-muted-foreground mt-2">{lang.hours}</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
                      {language === "en" ? "Email" : "इमेल"}
                    </h3>
                    <p className="text-muted-foreground">{lang.email_address}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <FooterSectionEnhanced />
    </div>
  )
}
