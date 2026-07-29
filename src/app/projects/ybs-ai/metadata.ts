import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YBS AI - Intelligent Public Transport Guide",
  description: "YBS AI is a comprehensive bus route guide application for Yangon, Myanmar, featuring interactive maps, AI-powered route assistance, and offline functionality. Developed by Arkar Yan.",
  keywords: ["YBS AI", "Yangon Bus Guide", "Public Transport", "AI Route Assistant", "Myanmar", "Bus Route", "Interactive Maps", "Arkar Yan"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  openGraph: {
    title: "YBS AI - Intelligent Public Transport Guide | Arkar Yan",
    description: "YBS AI is a comprehensive bus route guide application for Yangon, Myanmar, featuring interactive maps, AI-powered route assistance, and offline functionality.",
    url: "https://arkaryan.net/projects/ybs-ai",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg",
        width: 1200,
        height: 630,
        alt: "YBS AI - Intelligent Public Transport Guide by Arkar Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YBS AI - Intelligent Public Transport Guide | Arkar Yan",
    description: "YBS AI is a comprehensive bus route guide application for Yangon, Myanmar, featuring interactive maps, AI-powered route assistance, and offline functionality.",
    images: ["https://arkaryan.net/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
  },
};