import type React from "react"
import type { Metadata } from "next"
import { LanguageProvider } from "@/contexts/language-context"
import { StickyContactIcons } from "@/components/sticky-contact-icons"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.haamroviewsnepal.com"),

  title: {
    default: "Haamro Views Nepal – नेपालको विश्वस्त समाचार स्रोत",
    template: "%s | Haamro Views Nepal",
  },

  description:
    "नेपालको शीर्षस्थ समाचार पोर्टल — राजनीति, खेलकुद, व्यवसाय, स्वास्थ्य, मनोरञ्जन र विश्व समाचारहरू विश्वसनीय रूपमा प्राप्त गर्नुहोस्।",

  keywords: [
    "Nepal News",
    "Nepali News",
    "Latest Nepal News",
    "Haamro Views Nepal",
    "Politics Nepal",
    "Sports Nepal",
    "Business Nepal",
    "Entertainment Nepal",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },  

  openGraph: {
    type: "website",
    locale: "ne_NP",
    url: "https://www.haamroviewsnepal.com",
    siteName: "Haamro Views Nepal",
    title: "Haamro Views Nepal – नेपालको विश्वस्त समाचार स्रोत",
    description:
      "नेपालको विश्वस्त समाचार स्रोत— राजनीति, खेलकुद, व्यवसाय, स्वास्थ्य, मनोरञ्जन र विश्व समाचारहरू प्राप्त गर्नुहोस्।",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haamro Views Nepal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Haamro Views Nepal",
    description:
      "नेपालको विश्वस्त समाचार स्रोत — ताजा खबरहरू राजनीति, खेलकुद, व्यवसाय, स्वास्थ्य र मनोरञ्जनबाट।",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://www.haamroviewsnepal.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ne">
      <body className="bg-background text-foreground">
        <LanguageProvider>
          <StickyContactIcons />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
