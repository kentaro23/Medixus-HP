import Image from "next/image";

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
          <div className="relative overflow-hidden rounded-3xl border border-brand-sub-bg bg-brand-sub-bg">
            <Image
              src="/images/generated/vision-future.jpg"
              alt="近未来の医療施設とデジタル診断環境"
              width={1376}
              height={768}
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/25 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/92 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">Clinical DX Promise</p>
              <h3 className="mt-2 text-xl font-extrabold text-brand-text">Automate Everything, Except Empathy.</h3>
              <p className="mt-2 text-sm text-brand-muted">
                技術は効率化を担い、医療従事者は人間らしいケアに集中する。Medixusの設計思想です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
