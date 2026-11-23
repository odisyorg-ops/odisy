import React from "react";
import { HeartPulse } from "lucide-react";

const WelcomeBanner = ({ badge, title, subtitle }) => (
  <div className="mb-8 bg-gradient-to-r from-[#0a0a0a] to-[#536878] rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
    <div className="relative z-10 max-w-2xl">
      <span className="badge bg-white/20 text-white border-none mb-3 text-xs">{badge}</span>
      <h1
        className="font-bold tracking-tight text-white"
        style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: "1.2" }}
      >
        {title}
      </h1>
      <p className="text-white/80 mt-2 text-sm sm:text-base">{subtitle}</p>
    </div>
    <HeartPulse className="absolute -right-10 -bottom-10 size-64 text-white/5 pointer-events-none" />
  </div>
);

export default WelcomeBanner;