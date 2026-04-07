const stats = [
  { value: "150+", label: "導入支援医療機関" },
  { value: "30%", label: "平均業務効率化" },
  { value: "24h", label: "予約受付対応" },
  { value: "98%", label: "運用継続率" },
];

const comparison = [
  { name: "受付待ち時間", before: 78, after: 42 },
  { name: "事務処理時間", before: 86, after: 54 },
  { name: "予約調整負荷", before: 70, after: 38 },
];

export default function Results() {
  return (
    <section id="results" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-sub-bg bg-white p-6 sm:p-8 brand-shadow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Results</p>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-text sm:text-4xl">確かな導入実績と効果</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
              定量データに基づく改善サイクルで、医療現場の生産性向上と患者体験改善を同時に実現します。
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <article
                key={stat.label}
                className="animate-count-in rounded-2xl border border-brand-sub-bg bg-brand-sub-bg/60 p-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-display text-3xl font-extrabold text-brand-primary">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold text-brand-muted">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-brand-sub-bg bg-brand-bg p-5">
            <p className="text-sm font-bold text-brand-text">Before / After DX</p>
            <div className="mt-4 space-y-4">
              {comparison.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between text-xs font-semibold text-brand-muted">
                    <span>{item.name}</span>
                    <span>Before {item.before}% / After {item.after}%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-brand-sub-bg">
                      <div className="h-full rounded-full bg-brand-dark" style={{ width: `${item.before}%` }} />
                    </div>
                    <div className="h-2 rounded-full bg-brand-sub-bg">
                      <div className="h-full rounded-full bg-brand-accent" style={{ width: `${item.after}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
