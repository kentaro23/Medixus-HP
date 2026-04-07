export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-brand-dark/30 bg-brand-dark">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <aside className="border-b border-white/10 p-7 text-white lg:border-b-0 lg:border-r lg:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">Contact</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight">貴院のDXを、ここから始めましょう。</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                専任チームが現場課題を整理し、導入プランを提案します。
                まずは課題感だけでも、お気軽にご相談ください。
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/80">
                <p className="rounded-lg border border-white/15 bg-white/5 px-4 py-3">contact@medixus.jp</p>
                <p className="rounded-lg border border-white/15 bg-white/5 px-4 py-3">平日 9:00 - 18:00</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="primary-button rounded-lg px-4 py-2 text-sm font-bold">
                  資料ダウンロード
                </a>
                <a href="#" className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-brand-dark">
                  導入相談を予約
                </a>
              </div>
            </aside>

            <form className="grid gap-5 bg-white p-7 lg:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input id="lastName" label="姓" placeholder="大原" />
                <Input id="firstName" label="名" placeholder="太郎" />
              </div>

              <Input id="email" label="メールアドレス" type="email" placeholder="you@example.com" />
              <Input id="organization" label="ご所属（任意）" placeholder="医療法人〇〇" />

              <label className="grid gap-2 text-sm font-semibold text-brand-text" htmlFor="category">
                お問い合わせ種別
                <select
                  id="category"
                  defaultValue=""
                  className="h-11 rounded-lg border border-brand-sub-bg bg-brand-bg px-4 text-sm text-brand-text outline-none transition focus:border-brand-primary"
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>サービス導入のご相談</option>
                  <option>共同研究・パートナーシップ</option>
                  <option>採用について</option>
                  <option>その他</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-semibold text-brand-text" htmlFor="message">
                メッセージ
                <textarea
                  id="message"
                  rows={5}
                  placeholder="ご相談内容をご記入ください"
                  className="rounded-lg border border-brand-sub-bg bg-brand-bg px-4 py-3 text-sm text-brand-text outline-none transition focus:border-brand-primary"
                />
              </label>

              <button type="submit" className="primary-button rounded-lg px-6 py-3 text-sm font-bold">
                送信する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-brand-text" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-lg border border-brand-sub-bg bg-brand-bg px-4 text-sm text-brand-text outline-none transition focus:border-brand-primary"
      />
    </label>
  );
}
