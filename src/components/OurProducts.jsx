import React from "react";
import { ArrowUpRight } from "lucide-react";
import healthDash from "../assets/healthDash.jpg"

const FEATURED_PRODUCT = {
  id: "meddashboard",
  name: "MedDashboard OS",
  category: "Clinic Management Suite",
  year: "2026",
  href: "#meddashboard",
  image: healthDash,
  tag: "LIVE SYSTEM",
};

const SECONDARY_PRODUCTS = [
  {
    id: "telecare",
    name: "TeleCare Connect",
    category: "Virtual Consultations",
    year: "2026",
    href: "#telecare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "pathai",
    name: "PathAI Diagnostics",
    category: "Radiology & Lab AI",
    year: "2026",
    href: "#pathai",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "medsupply",
    name: "MedSupply Ledger",
    category: "Pharmacy & Cold-Chain",
    year: "2026",
    href: "#medsupply",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "vitalsync",
    name: "VitalSync Ward",
    category: "Inpatient Telemetry",
    year: "2026",
    href: "#vitalsync",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
  },
];

const ProductCard = ({ item, isHero = false }) => (
  <a href={item.href} className="group block focus:outline-none">
    {/* Rounded Media Container */}
    <div
      className="relative w-full overflow-hidden shadow-sm rounded-2xl"
      style={{
        
        aspectRatio: isHero ? "16 / 9" : "16 / 10",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
      />

      {/* Subtle Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

      
    </div>

    
  </a>
);

const OurProducts = () => {
  return (
    <section
      id="products"
      className="min-h-screen w-full bg-white text-[#0a0a0a] font-['Comfortaa'] flex flex-col justify-center"
      style={{
        paddingBlock: "clamp(4rem, 7vh, 6.5rem)",
        paddingInline: "clamp(1.25rem, 5vw, 4rem)",
      }}
    >
      <div className="w-full mx-auto" style={{ maxWidth: "min(92vw, 76rem)" }}>
        {/* Centered Header matching reference */}
        <div
          className="text-center mx-auto"
          style={{ marginBottom: "clamp(2.25rem, 4.5vh, 3.75rem)" }}
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-bold uppercase tracking-widest"
            style={{
              fontSize: "clamp(0.6rem, 0.72vw, 0.7rem)",
              marginBottom: "clamp(0.75rem, 1.2vh, 1rem)",
            }}
          >
            <span className="size-1.5 rounded-full bg-[#005f73]" />
            Selected Products
          </span>

          <h2
            className="font-bold tracking-tight text-[#0a0a0a]"
            style={{
              fontSize: "clamp(1.85rem, 3.6vw, 3.15rem)",
              lineHeight: "1.15",
            }}
          >
            Products we’re{" "}
            <span className="text-slate-400 font-semibold">proud</span> of
          </h2>
        </div>

        {/* Row 1: Full-Width Featured Hero Showcase */}
        <div style={{ marginBottom: "clamp(1.5rem, 2.8vw, 2.5rem)" }}>
          <ProductCard item={FEATURED_PRODUCT} isHero />
        </div>

        {/* Row 2 & 3: Fluid 2x2 Grid (Auto-stacks cleanly on narrow screens without sm:/md:/lg:) */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 32rem), 1fr))",
            gap: "clamp(1.5rem, 2.6vw, 2.25rem)",
          }}
        >
          {SECONDARY_PRODUCTS.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>

        {/* Centered Dark Pill CTA Button matching reference */}
        {/* <div
          className="flex justify-center"
          style={{ marginTop: "clamp(2.75rem, 5vh, 4.25rem)" }}
        >
          <a
            href="#all-products"
            className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] text-white font-bold hover:bg-[#005f73] transition-colors shadow-md"
            style={{
              paddingBlock: "clamp(0.75rem, 1.2vh, 0.95rem)",
              paddingInline: "clamp(1.5rem, 2.4vw, 2.1rem)",
              fontSize: "clamp(0.75rem, 0.88vw, 0.85rem)",
            }}
          >
            Explore all products
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default OurProducts;