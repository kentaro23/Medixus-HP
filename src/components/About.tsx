const milestones = [
  { year: "2025", title: "Medixus創業", detail: "医療DXに特化したプロダクト設計を開始。" },
  { year: "2025", title: "PoC実装", detail: "現場ヒアリングを元に運用要件を具体化。" },
  { year: "2026", title: "統合基盤公開", detail: "診療導線と業務導線を統合する基盤を提供。" },
  { year: "Next", title: "全国展開", detail: "地域医療のアクセス格差を縮小する導入モデルを拡大。" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="animate-fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">About</p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-text sm:text-4xl">なぜ、Medixusなのか。</h2>
          <p className="mt-5 text-sm leading-relaxed text-brand-muted sm:text-base">
            日本の医療現場では、患者に向き合うべき時間が事務業務や情報分断によって失われています。
            Medixusは「業務」「データ」「体験」を同時に改善するアプローチで、医療現場の価値創出を支援します。
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
            私たちはシステムを提供するだけでなく、導入後の運用定着と改善サイクルまで伴走し、
            持続可能なDXの実装を実現します。
          </p>
        </div>

        <div className="glass-card rounded-3xl border border-brand-sub-bg p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-primary">Milestones</p>
          <ol className="mt-5 space-y-4 border-l border-brand-sub-bg pl-5">
            {milestones.map((item) => (
              <li key={item.year + item.title} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand-primary bg-white" />
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-accent">{item.year}</p>
                <h3 className="mt-1 text-base font-extrabold text-brand-text">{item.title}</h3>
                <p className="mt-1 text-sm text-brand-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
