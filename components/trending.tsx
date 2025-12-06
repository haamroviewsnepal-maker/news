"use client";

import { useEffect, useState } from "react";
import {
  Gem,
  Coins,
  Fuel,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import Link from "next/link";

interface RatesData {
  gold: { fine: string; tejjabi: string };
  silver: { price: string };
  stock_market: { nepse: string; gain_loss: string };
  fuel: { petrol: string; diesel: string; gas: string };
  currency: { usd: string; eur: string; inr: string };
}

export default function TrendingRates() {
  const [rates, setRates] = useState<RatesData | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/data/rates.json");
      const data = await res.json();
      setRates(data);
    };
    load();
  }, []);

  if (!rates) return null;

  const gainLoss = parseFloat(rates.stock_market.gain_loss);

  const items = [
    { title: "Fine Gold", value: rates.gold.fine, icon: <Gem className="text-yellow-500" size={16} />, link: "/gold" },
    { title: "Tejjabi Gold", value: rates.gold.tejjabi, icon: <Gem className="text-yellow-500" size={16} />, link: "/gold" },
    { title: "Silver", value: rates.silver.price, icon: <Coins className="text-gray-500" size={16} />, link: "/silver" },
    {
      title: "NEPSE",
      value: rates.stock_market.nepse,
      icon: <TrendingUp className="text-green-600" size={16} />,
      change: rates.stock_market.gain_loss,
      link: "/stock-market",
      type: gainLoss >= 0 ? "gain" : "loss",
    },
    { title: "Petrol", value: rates.fuel.petrol, icon: <Fuel className="text-red-600" size={16} />, link: "/fuel" },
    { title: "Diesel", value: rates.fuel.diesel, icon: <Fuel className="text-red-600" size={16} />, link: "/fuel" },
    { title: "Gas", value: rates.fuel.gas, icon: <Fuel className="text-red-600" size={16} />, link: "/fuel" },
    { title: "USD", value: rates.currency.usd, icon: <DollarSign className="text-blue-600" size={16} />, link: "/currency" },
    { title: "EUR", value: rates.currency.eur, icon: <DollarSign className="text-blue-600" size={16} />, link: "/currency" },
    { title: "INR", value: rates.currency.inr, icon: <DollarSign className="text-blue-600" size={16} />, link: "/currency" },
  ];

  const loopItems = [...items, ...items]; // infinite loop

  return (
    <div className="w-full bg-white py-3 border rounded-xl shadow-sm overflow-hidden">
      <div className="relative flex items-center">

        {/* AUTO SCROLL */}
        <div className="scroll-wrapper">
          <div className="scroll-content flex items-center">
            {loopItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="min-w-[140px] sm:min-w-[180px] px-3 py-2 border-l flex flex-col hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm truncate">
                  {item.icon}
                  {item.title}
                </div>

                <div className="text-gray-800 text-sm sm:text-lg font-semibold mt-1">
                  {item.value}
                </div>

                {item.change && (
                  <div
                    className={`flex items-center gap-1 mt-1 text-xs sm:text-sm font-semibold ${
                      gainLoss >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.change}
                    {gainLoss >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroll-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
          white-space: nowrap;
        }

        /* ❗ Faster + smoother animation for mobile */
        .scroll-content {
          animation: scroll-left 6s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
