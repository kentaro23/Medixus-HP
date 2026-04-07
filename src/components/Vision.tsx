const pillars = [
  {
    title: "Trust",
    body: "臨床現場で継続利用できる信頼性を、運用設計レベルで担保します。",
  },
  {
    title: "Safety",
    body: "医療データの保護と説明責任を前提とした安全なDXアーキテクチャ。",
  },
  {
    title: "Speed",
    body: "導入から定着までを短縮し、成果創出までの時間を最小化します。",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div className="animate-fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Vision</p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-text sm:text-4xl">
            テクノロジーが、命の現場を支える力になる。
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-brand-muted sm:text-base">
            私たちが目指すのは、デジタル技術が黒子となり、医療従事者が患者と向き合う時間を最大化できる環境。
            システム導入ではなく、医療体験そのものの再設計としてDXを実行します。
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-brand-sub-bg bg-white p-4 brand-shadow">
                <h3 className="text-sm font-extrabold text-brand-primary">{pillar.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-muted">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:0.14s]">
          <div className="relative overflow-hidden rounded-3xl border border-brand-sub-bg bg-brand-sub-bg p-6 sm:p-7">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[72px] bg-brand-accent/40" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">Clinical DX Promise</p>
            <h3 className="mt-3 text-2xl font-extrabold text-brand-text">Automate Everything, Except Empathy.</h3>
            <ul className="mt-5 space-y-3 text-sm text-brand-muted">
              <li className="rounded-xl bg-white px-4 py-3">受付・会計・書類作成の自動化で現場負荷を軽減</li>
              <li className="rounded-xl bg-white px-4 py-3">統合データ基盤で診療判断スピードを向上</li>
              <li className="rounded-xl bg-white px-4 py-3">患者体験を崩さないUI/UX設計を徹底</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
