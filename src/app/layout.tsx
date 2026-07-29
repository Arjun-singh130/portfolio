import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/next";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Arjun Singh | Full Stack Developer",
    template: "%s | Arjun Singh",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and WordPress. I build fast, scalable, and user-focused web applications.",
  keywords: [
    "Arjun Singh",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "WordPress Developer",
  ],
  authors: [{ name: "Arjun Singh" }],
  creator: "Arjun Singh",

  metadataBase: new URL("https://arjun-singh.vercel.app"),

  openGraph: {
    title: "Arjun Singh | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and WordPress.",
    url: "https://arjun-singh.vercel.app",
    siteName: "Arjun Singh Portfolio",
    images: [
      {
        url: "/og-2.jpg",
        width: 1200,
        height: 630,
        alt: "Arjun Singh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arjun Singh | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and WordPress.",
    images: ["/og-2.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorGlow/>
        {children}
      </body>
    </html>
  );
}
