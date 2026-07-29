import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MM Match - Tinder-style Dating Bot",
  description: "MM Match is a complete Telegram dating bot with swipe functionality, built with Vercel and Turso for scalable performance supporting up to 100,000 users. Developed by Arkar Yan.",
  keywords: ["MM Match", "Telegram Bot", "Dating Bot", "Tinder-style", "Telegraf", "Node.js", "Turso", "Vercel", "Arkar Yan"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  openGraph: {
    title: "MM Match - Tinder-style Dating Bot | Arkar Yan",
    description: "MM Match is a complete Telegram dating bot with swipe functionality, built with Vercel and Turso for scalable performance supporting up to 100,000 users.",
    url: "https://arkaryan.net/projects/mm-match",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg",
        width: 1200,
        height: 630,
        alt: "MM Match - Tinder-style Dating Bot by Arkar Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MM Match - Tinder-style Dating Bot | Arkar Yan",
    description: "MM Match is a complete Telegram dating bot with swipe functionality, built with Vercel and Turso for scalable performance supporting up to 100,000 users.",
    images: ["https://arkaryan.net/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
  },
};