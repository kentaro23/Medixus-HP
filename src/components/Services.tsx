const services = [
  {
    title: "オンライン診療オーケストレーション",
    copy: "問診・診察・フォローアップを一貫管理し、患者導線をシームレスに統合。",
    points: ["予約最適化", "ビデオ診療連携", "処方連携"],
  },
  {
    title: "バックオフィス自動化",
    copy: "受付・会計・書類業務を段階的に自動化し、医療従事者の間接業務を削減。",
    points: ["受付会計処理", "文書生成", "請求フロー整備"],
  },
  {
    title: "統合データインサイト",
    copy: "分断された患者情報を統合し、診療判断と経営判断の精度を高める。",
    points: ["データ統合", "運用ダッシュボード", "分析レポート"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-text sm:text-4xl">医療DXを加速させるソリューション</h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
            病院経営・現場オペレーション・患者体験を横断して、導入効果を定量化できるソリューションを提供します。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-brand-sub-bg bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-[0_20px_30px_rgba(15,23,42,0.09)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">0{index + 1}</span>
                <span className="stat-badge rounded-full px-2.5 py-1 text-[11px] font-bold">Core</span>
              </div>
              <h3 className="text-xl font-extrabold leading-snug text-brand-text">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{service.copy}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-brand-sub-bg bg-brand-sub-bg/70 px-3 py-1 text-xs font-semibold text-brand-text"
                  >
                    {point}
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
