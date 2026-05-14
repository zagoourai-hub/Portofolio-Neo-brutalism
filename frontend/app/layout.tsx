import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-neobrutalism.example.com"),
  title: {
    default: "Bigboss | Fullstack Developer",
    template: "%s | Bigboss",
  },
  description:
    "Portfolio static Fullstack Developer dengan tema Neo Brutalism, menampilkan profil, skill, project, pengalaman, dan kontak.",
  keywords: [
    "portfolio developer",
    "fullstack developer",
    "Next.js developer",
    "Neo Brutalism",
    "shadcn/ui",
    "web developer Indonesia",
  ],
  authors: [{ name: "Raka Mahendra" }],
  creator: "Raka Mahendra",
  publisher: "Raka Mahendra",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bigboss | Fullstack Developer",
    description:
      "Portfolio static Fullstack Developer dengan tema Neo Brutalism.",
    url: "/",
    siteName: "Bigboss Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bigboss | Fullstack Developer",
    description:
      "Portfolio static Fullstack Developer dengan tema Neo Brutalism.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${dmSans.variable} ${spaceMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
