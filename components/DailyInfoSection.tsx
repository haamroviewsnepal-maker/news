"use client"

import { useEffect, useState } from "react"
import { TrendingUp, DollarSign, MapPin, Gem, Coins, Fuel } from "lucide-react"

export default function DailyInfoSection() {
  const [rates, setRates] = useState<any>(null)

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data/rates.json")
      const data = await res.json()
      setRates(data)
    }
    loadData()
  }, [])

  if (!rates) return null

  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE — MAP */}
        <div className="w-full h-80 md:h-full rounded-xl overflow-hidden shadow-md border border-border">
          <iframe
            title="Bedkot Municipality Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.2695039495!2d85.31369394113017!3d27.699763132908927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199d227be36f%3A0x743a972579c61870!2sKathmandu%20Metropolitan%20City%20Office%20Ward%20No.%2010!5e0!3m2!1sen!2sin!4v1765025296169!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* RIGHT SIDE — DAILY RATES */}
        <div className="space-y-6">

          {/* Gold */}
          <div className="bg-card p-5 rounded-lg border border-border shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <Gem className="text-yellow-500" size={24} />
              <h3 className="font-bold text-xl text-yellow-600">Gold Rates</h3>
            </div>
            <p className="mt-2 text-muted-foreground">Fine Gold: {rates.gold.fine}</p>
            <p className="text-muted-foreground">Tejjabi Gold: {rates.gold.tejjabi}</p>
          </div>

          {/* Silver */}
          <div className="bg-card p-5 rounded-lg border border-border shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <Coins className="text-gray-500" size={24} />
              <h3 className="font-bold text-xl text-gray-600">Silver</h3>
            </div>
            <p className="mt-2 text-muted-foreground">Price: {rates.silver.price}</p>
          </div>

          {/* Stock Market */}
          <div className="bg-card p-5 rounded-lg border border-border shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-green-600" size={24} />
              <h3 className="font-bold text-xl text-green-700">Stock Market</h3>
            </div>
            <p className="mt-2 text-muted-foreground">NEPSE: {rates.stock_market.nepse}</p>
            <p className="text-muted-foreground">Gain/Loss: {rates.stock_market.gain_loss}</p>
          </div>

          {/* Fuel Rates */}
          <div className="bg-card p-5 rounded-lg border border-border shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <Fuel className="text-red-600" size={24} />
              <h3 className="font-bold text-xl text-red-700">Fuel Rates</h3>
            </div>
            <p className="mt-2 text-muted-foreground">Petrol: {rates.fuel.petrol}</p>
            <p className="text-muted-foreground">Diesel: {rates.fuel.diesel}</p>
            <p className="text-muted-foreground">Gas: {rates.fuel.gas}</p>
          </div>

          {/* Currency */}
          <div className="bg-card p-5 rounded-lg border border-border shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <DollarSign className="text-blue-600" size={24} />
              <h3 className="font-bold text-xl text-blue-700">Currency Exchange</h3>
            </div>
            <p className="mt-2 text-muted-foreground">USD: {rates.currency.usd}</p>
            <p className="text-muted-foreground">EUR: {rates.currency.eur}</p>
            <p className="text-muted-foreground">INR: {rates.currency.inr}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
