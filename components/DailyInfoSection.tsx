"use client";

import { useEffect, useState } from "react";

export default function DailyInfoSection() {
  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* MAP ONLY */}
        <div className="w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md border border-border">
          <iframe
            title="Bedkot Municipality Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.2695039495!2d85.31369394113017!3d27.699763132908927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199d227be36f%3A0x743a972579c61870!2sKathmandu%20Metropolitan%20City%20Office%20Ward%20No.%2010!5e0!3m2!1sen!2sin!4v1765025296169!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            style={{ border: 0 }}
          ></iframe>
        </div>

      </div>
    </div>
  );
}
