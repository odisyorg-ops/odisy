import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import bannerPic1 from "../assets/banner (1).jpg";
import bannerPic2 from "../assets/banner (2).jpg";
import bannerPic3 from "../assets/banner (3).jpg";
import bannerPic4 from "../assets/banner (4).jpg";
import bannerPic5 from "../assets/banner (5).jpg";
import bannerPic6 from "../assets/banner (6).jpg";
import bannerPic7 from "../assets/banner (7).jpg";

// --- CONSTANTS / DEFAULTS ---
const DEFAULT_TAGS = [
  "Websites",
  "Mobile App",
  "Custom Software",
  "Automation",
  "AI & ML Solution",
];

const ROTATING_WORDS = [
  "design",
  "develop",
  "deploy",
  "scale",
  "automate",
];

// Map imported banner pictures to the card elements
const BANNER_IMAGES = [
  bannerPic1,
  bannerPic2,
  bannerPic3,
  bannerPic4,
  bannerPic5,
  bannerPic6,
  bannerPic7,
];

const CARDS_DATA = BANNER_IMAGES.map((img, i) => ({
  id: `card-${i}`,
  image: img,
}));

// --- SUB-COMPONENTS ---

// Smooth, self-contained inline text rotator using Comfortaa
export const RotatingText = ({
  words = ROTATING_WORDS,
  interval = 2200,
  className = "text-[#536878]",
}) => {
  const [index, setIndex] = useState(0);
  const [widths, setWidths] = useState([]);
  const measureRefs = useRef([]);

  // Rotate words
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  // Measure every word's real width (hidden copies)
  useLayoutEffect(() => {
    const measure = () => {
      setWidths(measureRefs.current.map((el) => (el ? el.offsetWidth : 0)));
    };

    measure();

    // Re-measure once Comfortaa has actually loaded
    if (document.fonts?.ready) document.fonts.ready.then(measure);

    // Re-measure when the font size changes (responsive resizing)
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [words]);

  const currentWidth = widths[index];

  return (
    <motion.span
      className="relative inline-flex overflow-hidden align-bottom py-[0.1em] -my-[0.1em]"
      initial={false}
      animate={{ width: currentWidth ?? "auto" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Hidden measuring copies */}
      <span
        aria-hidden="true"
        className="pointer-events-none invisible absolute left-0 top-0 whitespace-nowrap"
      >
        {words.map((word, i) => (
          <span
            key={word}
            ref={(el) => (measureRefs.current[i] = el)}
            className={`absolute left-0 top-0 inline-block whitespace-nowrap font-['Comfortaa'] ${className}`}
          >
            {word}
          </span>
        ))}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block whitespace-nowrap font-['Comfortaa'] ${className}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

export const ServiceTickerPill = ({ tags = DEFAULT_TAGS }) => (
  <div>
    <div className="flex items-center gap-[clamp(0.5rem,1.5vw,0.75rem)] justify-center">
      {/* Subtle live indicator dot */}
      <span className="relative flex h-[clamp(0.5rem,1.2vw,0.75rem)] w-[clamp(0.5rem,1.2vw,0.75rem)]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-700 opacity-75" />
        <span className="relative inline-flex h-full w-full rounded-full bg-emerald-800" />
      </span>
      <span className="text-[clamp(0.813rem,1.8vw,0.95rem)] font-medium">Available For Work</span>
    </div>
  </div>
);

// --- MAIN BANNER COMPONENT ---
const Banner = ({
  tags = DEFAULT_TAGS,
  rotatingWords = ROTATING_WORDS,
  whatsappNumber = "8801622214734",
  whatsappMessage = "Hi! I'd love to discuss a project with you.",
  ctaLabel = "let's talk...",
}) => {
  return (
    <section 
      className="relative flex w-full flex-col justify-between overflow-hidden bg-white text-[#111111] font-['Comfortaa']"
      style={{
        minHeight: "100vh",
        paddingTop: "clamp(6rem, 15vh, 10rem)",
      }}
    >
      {/* Top / Center Hero Copy & CTA */}
      <div 
        className="z-10 mx-auto flex w-full flex-col items-center text-center"
        style={{
          maxWidth: "min(90vw, 56rem)",
          paddingLeft: "clamp(1rem, 4vw, 2rem)",
          paddingRight: "clamp(1rem, 4vw, 2rem)",
        }}
      >
        {/* Mini Service Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "clamp(1.25rem, 3.5vh, 2rem)" }}
        >
          <ServiceTickerPill tags={tags} />
        </motion.div>

        {/* Fluid Typography Heading using clamp() */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="font-bold tracking-tight text-[#111111] font-['Comfortaa']"
          style={{
            fontSize: "clamp(1.7rem, 6.2vw, 4rem)",
            lineHeight: "clamp(1.1, 1.2, 1.25)",
          }}
        >
          We <RotatingText words={rotatingWords} className="text-[#536878]" />{" "}
          products
          <br />
          that mean something
        </motion.h1>

        {/* WhatsApp CTA Button with Aura */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          style={{ marginTop: "clamp(2rem, 5vh, 3rem)" }}
        >
          <WhatsAppCTA
            phoneNumber={whatsappNumber}
            message={whatsappMessage}
            label={ctaLabel}
          />
        </motion.div>
      </div>

      {/* Bottom Horizontal Marquee with Imported Images (Fluid Scaling Cards) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
        className="relative w-full overflow-hidden"
        style={{
          marginTop: "clamp(3rem, 8vh, 6rem)",
          paddingBottom: "clamp(1rem, 3vh, 2rem)",
          paddingTop: "clamp(1.5rem, 4vh, 2.5rem)",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          className="flex w-max"
          style={{ gap: "clamp(1rem, 2vw, 1.5rem)", paddingInline: "clamp(0.5rem, 1.5vw, 1rem)" }}
        >
          {[...CARDS_DATA, ...CARDS_DATA].map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="group relative shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-neutral-100 shadow-xl"
              style={{
                width: "clamp(16rem, 32vw, 24rem)",
                height: "clamp(16rem, 32vw, 24rem)",
              }}
            >
              <img
                src={card.image}
                alt={`Banner Showcase ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;