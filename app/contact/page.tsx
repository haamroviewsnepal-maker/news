"use client"

import type React from "react"

import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { FooterSectionEnhanced } from "@/components/footer-section-enhanced"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const { language, t } = useLanguage()
  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const loadCategories = async () => {
      const res = await fetch("/data/categories.json")
      const data = await res.json()
      setCategories(data.categories)
    }
    loadCategories()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const content = {
    en: {
      title: "Contact Us",
      description: "Get in touch with Haamro Views Nepal",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      successMessage: "Thank you! Your message has been sent successfully.",
      address: "Kathmandu, Nepal",
      phone_number: "+977-1-4123456",
      email_address: "info@haamroviewsnepal.com",
      hours: "Contact Hours: Mon-Fri, 9AM-5PM NPT",
    },
    ne: {
      title: "सम्पर्क गर्नुहोस्",
      description: "हामरो भ्यूज नेपालसँग सम्पर्कमा रहनुहोस्",
      fullName: "पूरा नाम",
      email: "इमेल ठेगाना",
      phone: "फोन नम्बर",
      subject: "विषय",
      message: "सन्देश",
      send: "सन्देश पठाउनुहोस्",
      successMessage: "धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइयो।",
      address: "काठमाडौं, नेपाल",
      phone_number: "+977-1-4123456",
      email_address: "info@haamroviewsnepal.com",
      hours: "सम्पर्क समय: सोम-शुक्र, ९बजे-५बजे NPT",
    },
  }

  const lang = language === "en" ? content.en : content.ne

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Navigation categories={categories} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="max-w-5xl">
          <h1 className="text-4xl font-bold mb-2 text-foreground">{lang.title}</h1>
          <p className="text-lg text-muted-foreground mb-12">{lang.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{lang.fullName}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{lang.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{lang.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{lang.subject}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{lang.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>
                <Button type="submit" className="w-full">
                  {lang.send}
                </Button>
                {submitted && <div className="p-4 bg-green-50 text-green-800 rounded-lg">{lang.successMessage}</div>}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">{lang.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">{lang.phone_number}</p>
                    <p className="text-xs text-muted-foreground mt-2">{lang.hours}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
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
