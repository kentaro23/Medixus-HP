export default function Contact() {
  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-line bg-white/85 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-2xl bg-gradient-to-br from-primary-strong to-primary p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">Contact</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-snug">まずは、お気軽にご相談ください。</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              導入検討・共同研究・パートナー連携まで、貴院の課題に合わせて最適な進め方をご提案します。
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p className="rounded-xl border border-white/30 bg-white/10 px-4 py-3">E-mail: contact@medixus.jp</p>
              <p className="rounded-xl border border-white/30 bg-white/10 px-4 py-3">受付時間: 平日 9:00 - 18:00</p>
              <p className="rounded-xl border border-white/30 bg-white/10 px-4 py-3">対象: 医療機関 / 事業パートナー</p>
            </div>
          </aside>

          <form className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input id="lastName" label="姓" placeholder="大原" />
              <Input id="firstName" label="名" placeholder="太郎" />
            </div>

            <Input id="email" label="メールアドレス" type="email" placeholder="you@example.com" />
            <Input id="organization" label="ご所属（任意）" placeholder="医療法人〇〇" />

            <label className="grid gap-2 text-sm font-semibold text-ink" htmlFor="category">
              お問い合わせ種別
              <select
                id="category"
                defaultValue=""
                className="h-11 rounded-xl border border-line bg-card px-4 text-sm text-ink outline-none transition focus:border-primary/60"
              >
                <option value="" disabled>
                  選択してください
                </option>
                <option>サービス導入のご相談</option>
                <option>共同研究・提携</option>
                <option>採用について</option>
                <option>その他</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-ink" htmlFor="message">
              メッセージ
              <textarea
                id="message"
                rows={5}
                placeholder="ご相談内容をご記入ください"
                className="rounded-xl border border-line bg-card px-4 py-3 text-sm text-ink outline-none transition focus:border-primary/60"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-strong px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              送信する
            </button>
          </form>
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
    <label className="grid gap-2 text-sm font-semibold text-ink" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-line bg-card px-4 text-sm text-ink outline-none transition focus:border-primary/60"
      />
    </label>
  );
}
