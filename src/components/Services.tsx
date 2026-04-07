const problems = [
  { title: "事務業務の肥大化", value: "現場工数 +35%" },
  { title: "データ分断", value: "判断速度の低下" },
  { title: "地域格差", value: "医療アクセス不足" },
];

const services = [
  {
    title: "オンライン診療ハブ",
    subtitle: "Consultation Hub",
    summary: "問診・診察・処方連携をひとつに統合し、患者導線をシンプルに最適化。",
    bullets: ["ビデオ診療", "AI問診サポート", "処方箋連携"],
  },
  {
    title: "医療事務オートメーション",
    subtitle: "Office Automation",
    summary: "受付・会計・予約・書類作成を自動化し、オペレーション負荷を継続的に削減。",
    bullets: ["受付会計自動化", "予約最適化", "文書テンプレート化"],
  },
  {
    title: "患者データ統合基盤",
    subtitle: "Unified Data Layer",
    summary: "カルテ・検査・投薬情報を集約し、医師が必要な情報へ瞬時にアクセス可能に。",
    bullets: ["データ統合ビュー", "検査結果同期", "治療履歴トラッキング"],
  },
  {
    title: "セキュリティ運用設計",
    subtitle: "Security by Design",
    summary: "暗号化・アクセス制御・監査ログを標準化し、医療情報の安全性を担保。",
    bullets: ["アクセス権限管理", "監査ログ", "コンプライアンス対応"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-line bg-white/75 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Problem Statement</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem.title} className="rounded-2xl border border-line bg-card p-4">
                <p className="text-sm font-semibold text-ink">{problem.title}</p>
                <p className="mt-2 text-lg font-extrabold text-accent">{problem.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Medixusが提供する4つの変革</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            現場の課題を単体ツールで解くのではなく、診療体験全体を再設計するプロダクト群として提供します。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_38px_rgba(8,145,178,0.14)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">0{index + 1}</p>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">{service.subtitle}</span>
              </div>

              <h3 className="text-xl font-extrabold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {bullet}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
