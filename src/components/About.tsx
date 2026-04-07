const milestones = [
  { year: "2025", title: "Medixus創業", detail: "医療DXに特化したプロダクト開発を開始。" },
  { year: "2025", title: "PoC開始", detail: "現場ヒアリングと運用検証を通じて業務要件を明確化。" },
  { year: "2026", title: "統合基盤ローンチ", detail: "診療導線・予約・事務を一体管理する基盤を提供。" },
  { year: "Next", title: "全国展開", detail: "医療アクセス格差の縮小に向け、導入モデルを拡大。" },
];

export default function About() {
  return (
    <section id="about" className="section-shell py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About Medixus</p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">なぜ、Medixusなのか。</h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            <p>
              医療の質は高い一方で、現場には煩雑な事務処理と情報分断が残り、ケアに集中する時間を圧迫しています。
              Medixusはこの構造課題を、プロダクトと運用設計の両面から解決します。
            </p>
            <p>
              私たちのアプローチは、単発の業務改善ではなく、診療前後を含む医療体験全体の再設計です。
              テクノロジーを黒子として機能させ、医療従事者が患者と向き合う時間を取り戻します。
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <Metric value="2025" label="創業" />
            <Metric value="100%" label="自動化対象" />
            <Metric value="24/7" label="運用設計" />
          </div>
        </div>

        <div className="glass-panel rounded-3xl border border-line p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Milestones</p>
          <ol className="mt-5 space-y-5 border-l border-line pl-5">
            {milestones.map((item) => (
              <li key={item.year + item.title} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-white" />
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">{item.year}</p>
                <h3 className="mt-1 text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white/85 p-4 text-center">
      <p className="font-display text-2xl font-extrabold text-shimmer">{value}</p>
      <p className="mt-1 text-xs font-semibold text-ink-soft">{label}</p>
    </div>
  );
}
