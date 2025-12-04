"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"
import { useState } from "react"

export function FooterSection() {
  const [email, setEmail] = useState("")

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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Environment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Health
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get the latest news delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
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
              <h4 className="font-semibold mb-3">Privacy Policy</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your privacy is important to us. We collect and use your information only for providing better services.
                Read our full privacy policy to understand how we protect your data and respect your privacy rights.
              </p>
            </div>

            {/* Terms & Conditions */}
            <div>
              <h4 className="font-semibold mb-3">Terms & Conditions</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By using Haamro Views Nepal, you agree to our terms and conditions. These terms govern your use of our
                website and services. We reserve the right to update these terms. Please review them periodically for
                any changes.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-3">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>haamroviewsnepal@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+977 9843867481</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            <p>
              &copy; 2025 Haamro Views Nepal. All rights reserved. | Design inspired by{"Hari Singh Joshi"}
              <a href="https://portfolio-hari-singh.vercel.app/" target="_blank" rel="noopener noreferrer">
                Codeshastra
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
