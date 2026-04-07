const vmvCards = [
  {
    tag: "Vision",
    title: "すべての人へ、最高水準の医療体験を。",
    en: "Redefine Healthcare for Everyone.",
    body: "地域・時間・人的リソースの制約を越えて、質の高い医療を持続可能な形で届ける。",
  },
  {
    tag: "Mission",
    title: "医療従事者が、人に向き合える時間を増やす。",
    en: "Automate Everything Except Empathy.",
    body: "受付・会計・予約・書類作成などの業務を自動化し、診療とケアの密度を高める。",
  },
  {
    tag: "Value",
    title: "妥協しない品質で、現場の信頼に応える。",
    en: "Zero Compromise, Clinical Grade Quality.",
    body: "安全性・可用性・説明可能性を重視し、医療現場で継続運用できるプロダクトを構築する。",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="section-shell py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our Philosophy</p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Vision / Mission / Value</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            Nanobanana Proの方向性に基づき、信頼性と先進性を両立する医療DXブランド体験を設計しています。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {vmvCards.map((card, index) => (
            <article
              key={card.tag}
              className="glass-panel rounded-3xl border border-line p-7 shadow-[0_18px_40px_rgba(8,145,178,0.11)] animate-fade-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 text-primary">
                  {index + 1}
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{card.tag}</p>
              </div>

              <h3 className="text-xl font-extrabold leading-snug text-ink">{card.title}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">{card.en}</p>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
