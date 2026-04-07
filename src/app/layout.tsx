import type { Metadata } from "next";
import { Manrope, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Medixus | Healthcare, Redefined.",
  description:
    "医療DXの最前線。テクノロジーの力で、すべての人に最高の医療を届ける。",
  openGraph: {
    title: "Medixus | Healthcare, Redefined.",
    description:
      "医療DXの最前線。テクノロジーの力で、すべての人に最高の医療を届ける。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${manrope.variable} ${notoSansJp.variable}`}>
      <body className="min-h-screen bg-page text-ink antialiased">{children}</body>
    </html>
  );
}
