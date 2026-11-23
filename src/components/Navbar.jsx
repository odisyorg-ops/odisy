import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import WhatsAppCTA from '../ui/WhatsAppCTA';

// Navigation data: entries with `items` render as a dropdown, others as plain links
const NAV_GROUPS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    items: [
      { title: 'Websites & SaaS', desc: 'High-performance web apps & modern digital platforms.', href: '#services-web' },
      { title: 'Mobile Apps', desc: 'Native iOS & Android cross-platform solutions.', href: '#services-apps' },
      { title: 'Custom Software', desc: 'Bespoke enterprise software tailored to your workflow.', href: '#services-software' },
      { title: 'Automation Engines', desc: 'Automate complex business processes & tasks.', href: '#services-automation' },
      { title: 'AI & ML Solutions', desc: 'Intelligent agentic models & LLM integrations.', href: '#services-ai' },
    ],
  },
  { label: 'Contact', href: '#contact' },
];

// Shared style for top-level links/buttons
const LINK = 'px-4 py-2 text-sm font-bold text-black transition-colors hover:text-[#536878]';

// Hook: tracks scroll to style the bar (past 20px) and hide it while scrolling down
const useScrollNav = () => {
  const [state, setState] = useState({ isScrolled: false, isVisible: true });

  useEffect(() => {
    let prev = window.scrollY;
    const onScroll = () => {
      const pos = window.scrollY;
      setState({ isScrolled: pos > 20, isVisible: !(pos > prev && pos > 80) });
      prev = pos;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
};

// Brand logo (used in the top bar and the mobile overlay)
const Logo = () => (
  <a href="#" className="font-['Comfortaa'] font-bold text-black" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
    ODISY<span className="text-[#536878]">.</span>
  </a>
);

const Navbar = ({
  whatsappNumber = '+8801622214734',
  whatsappMessage = "Hi! I'd love to book a call to discuss a project.",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile overlay state
  const { isScrolled, isVisible } = useScrollNav();

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Shared CTA (desktop bar + mobile footer)
  const cta = <WhatsAppCTA phoneNumber={whatsappNumber} message={whatsappMessage} label="Book a call" />;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* TOP BAR: fixed, slides away on scroll down, blurred background once scrolled */}
      <nav
        className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'border-b border-black/10 bg-white/85 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}
        style={{ paddingBlock: isScrolled ? 'clamp(0.75rem, 2vh, 1.25rem)' : 'clamp(1.25rem, 3.5vh, 2rem)' }}
      >
        <div className="mx-12 flex items-center justify-between">
          <Logo />

          {/* Desktop links (lg and up) */}
          <div className="hidden items-center gap-2 lg:flex">
            {NAV_GROUPS.map(({ label, href, items }) =>
              items ? (
                // Dropdown is pure CSS: opens on hover or keyboard focus, no JS state needed
                <div key={label} className="group/nav relative">
                  <button className={`${LINK} flex items-center gap-1`}>
                    {label}
                    <ChevronDown size={14} className="transition-transform duration-300 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" />
                  </button>

                  <div className="invisible absolute left-0 top-full w-80 translate-y-2 scale-95 pt-4 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:scale-100 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:scale-100 group-focus-within/nav:opacity-100">
                    <ul className="space-y-1 rounded-2xl border border-[#536878]/30 bg-white p-4 shadow-2xl ring-1 ring-black/5">
                      {items.map(({ title, desc, href }) => (
                        <li key={title}>
                          <a href={href} className="group/item flex flex-col gap-1 rounded-xl p-3 transition-all hover:translate-x-1 hover:bg-[#536878]/15">
                            <span className="flex items-center justify-between text-sm font-semibold text-black">
                              {title}
                              <ArrowRight size={14} className="-translate-x-2 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                            </span>
                            <span className="line-clamp-2 text-[11px] font-medium text-slate-600">{desc}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a key={label} href={href} className={LINK}>{label}</a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">{cta}</div>

          {/* Mobile menu toggle (below lg) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            aria-expanded={isMenuOpen}
            className="rounded-xl border border-black/15 p-2 text-black transition-colors hover:bg-black/5 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY: always mounted, faded/slid via CSS ("invisible" also removes it from tab order) */}
      <div
        className={`fixed inset-0 z-[150] flex flex-col overflow-y-auto bg-white p-[clamp(1.5rem,5vw,2.5rem)] text-black transition-all duration-300 ${
          isMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-5 opacity-0'
        }`}
      >
        {/* Overlay header: logo + close button */}
        <div className="flex items-center justify-between">
          <Logo />
          <button onClick={closeMenu} aria-label="Close Menu" className="rounded-full border border-black/15 bg-black/5 p-3">
            <X size={24} />
          </button>
        </div>

        {/* Links: services listed under a section label, others as large links */}
        <div className="my-auto flex flex-col space-y-6 py-8">
          {NAV_GROUPS.map(({ label, href, items }) =>
            items ? (
              <div key={label} className="space-y-3">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#536878]">{label}</p>
                <div className="grid gap-3 border-l border-[#536878]/20 pl-2">
                  {items.map(({ title, desc, href }) => (
                    <a key={title} href={href} onClick={closeMenu} className="block py-1">
                      <p className="text-base font-bold active:text-[#536878]">{title}</p>
                      <p className="text-xs text-black/60">{desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={label} href={href} onClick={closeMenu} className="block text-2xl font-bold transition-colors hover:text-[#536878]">
                {label}
              </a>
            )
          )}
        </div>

        {/* Overlay footer CTA */}
        <div className="mt-auto border-t border-black/10 pt-6">{cta}</div>
      </div>
    </>
  );
};

export default Navbar;