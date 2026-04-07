import type { Metadata } from "next";
import { Noto_Sans_JP, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["500", "600", "700", "800"],
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Medixus | 医療DXを加速するプラットフォーム",
  description:
    "Medixusは医療現場の業務自動化・データ統合・患者体験改善を支援する医療DXプラットフォームです。",
  openGraph: {
    title: "Medixus | 医療DXを加速するプラットフォーム",
    description:
      "医療従事者が患者に向き合える時間を増やす。Medixusの医療DXソリューション。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${plusJakartaSans.variable} ${notoSansJp.variable}`}>
      <body className="min-h-screen bg-brand-bg text-brand-text antialiased">{children}</body>
    </html>
  );
}
