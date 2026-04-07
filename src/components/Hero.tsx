import Image from "next/image";

const trustBadges = ["全国150+拠点導入支援", "24h対応設計", "医療情報セキュリティ配慮"];

const dataNodes = [
  { label: "診療データ", value: "+42%" },
  { label: "業務効率", value: "30%改善" },
  { label: "患者満足", value: "+18pt" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pt-36">
      <div className="pointer-events-none absolute inset-0 section-grid opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[-7rem] top-12 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-5rem] top-20 h-64 w-64 rounded-full bg-brand-accent/30 blur-3xl animate-pulse-node" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-primary/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
            Healthcare DX Platform
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-brand-text sm:text-5xl lg:text-6xl">
            医療の未来を、
            <span className="block text-brand-primary">データで再定義する。</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Medixusは、業務自動化とデータ統合を一体で設計し、
            医療従事者が患者に向き合う時間を増やす次世代の医療DXプラットフォームです。
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#services"
              className="primary-button rounded-lg px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
            >
              ソリューションを見る
            </a>
            <a
              href="#contact"
              className="secondary-button rounded-lg px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
            >
              デモ相談を予約
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <span key={badge} className="stat-badge rounded-full px-3 py-1 text-xs font-semibold">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:0.16s]">
          <div className="relative overflow-hidden rounded-3xl border border-brand-sub-bg bg-white brand-shadow">
            <Image
              src="/images/generated/hero-future.jpg"
              alt="近未来の医療オペレーションセンター"
              width={1376}
              height={768}
              className="h-[380px] w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/30 to-transparent" />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-white/95 p-4 sm:inset-x-5 sm:bottom-5 sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-muted">Realtime Operations Board</p>
                <span className="rounded-full bg-brand-accent px-2.5 py-1 text-[11px] font-bold text-brand-text">Live</span>
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                {dataNodes.map((node) => (
                  <div key={node.label} className="rounded-xl bg-brand-sub-bg/70 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{node.label}</p>
                    <p className="mt-1 text-sm font-bold text-brand-primary">{node.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
