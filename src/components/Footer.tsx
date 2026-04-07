export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2v20M2 12h20" /></svg>
          </div>
          <span className="text-xl font-bold">Medixus</span>
        </div>
        <p className="text-white/60 text-sm mb-8">Healthcare, Redefined.</p>
        <p className="text-sm text-white/40">&copy; 2025 Medixus Inc.</p>
      </div>
    </footer>
  );
}
