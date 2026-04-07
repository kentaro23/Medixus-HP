"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#vision", label: "Vision" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-sub-bg/90 bg-brand-bg/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="トップへ">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-primary text-white brand-shadow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
              <path d="M12 2v20M2 12h20" />
            </svg>
          </span>
          <span className="font-display text-lg font-extrabold text-brand-text">Medixus</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-muted transition-colors hover:text-brand-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="primary-button rounded-lg px-4 py-2 text-sm font-bold transition-transform hover:-translate-y-0.5"
          >
            導入相談
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-brand-sub-bg bg-white/90 text-brand-text md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="メニューを開閉"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" className="border-t border-brand-sub-bg bg-brand-bg px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md py-1.5 text-sm font-semibold text-brand-text"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="primary-button mt-1 w-fit rounded-lg px-4 py-2 text-sm font-bold"
              onClick={() => setMobileOpen(false)}
            >
              導入相談
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
