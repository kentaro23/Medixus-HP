const footerLinks = [
  { href: "#vision", label: "Philosophy" },
  { href: "#services", label: "Solutions" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-line bg-white/85 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 2v20M2 12h20" />
              </svg>
            </span>
            <p className="font-display text-lg font-extrabold text-ink">Medixus</p>
          </div>
          <p className="mt-2 text-sm text-ink-soft">Healthcare, Redefined. 医療DXで、現場に時間を取り戻す。</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-6 w-full max-w-7xl px-6 lg:px-8">
        <p className="text-xs text-ink-soft">© {new Date().getFullYear()} Medixus Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
