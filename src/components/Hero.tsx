const trustBadges = ["北里大学連携", "医療機関導入準備中", "セキュア運用設計"];

const flowCards = [
  { label: "Input", value: "音声・問診・予約", tone: "from-primary/20 to-primary/5" },
  { label: "AI Engine", value: "統合解析 + 自動化", tone: "from-accent/25 to-accent/5" },
  { label: "Output", value: "現場負担を最小化", tone: "from-primary/15 to-accent/10" },
];

export default function Hero() {
  return (
    <section id="top" className="section-shell pt-32 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-25" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-accent/12 blur-3xl animate-pulse-ring" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            NanoBanana Pro Direction
          </p>

          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            医療の未来を、<br />
            <span className="text-shimmer">デジタルの力で再設計する。</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Medixusは、医療現場に散らばる業務とデータをひとつに統合し、
            医師と看護師が患者に向き合う時間を最大化する医療DXプラットフォームを提供します。
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#services"
              className="rounded-full bg-gradient-to-r from-primary to-primary-strong px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              ソリューションを見る
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line bg-white px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-primary/40"
            >
              資料請求・お問い合わせ
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-line bg-white/85 px-3 py-1.5 text-xs font-semibold text-ink-soft"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:0.14s]">
          <div className="glass-panel ring-gradient rounded-3xl p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">DX Workflow</p>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">Live Design</span>
            </div>

            <div className="space-y-4">
              {flowCards.map((card) => (
                <div key={card.label} className={`rounded-2xl bg-gradient-to-r p-4 ${card.tone}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">{card.label}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{card.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Stat value="30%" label="事務時間削減" />
              <Stat value="24h" label="予約受付" />
              <Stat value="AA" label="安全基準" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-line/80 bg-white/85 p-3 text-center">
      <p className="font-display text-xl font-extrabold text-ink">{value}</p>
      <p className="mt-1 text-[11px] font-semibold text-ink-soft">{label}</p>
    </div>
  );
}
