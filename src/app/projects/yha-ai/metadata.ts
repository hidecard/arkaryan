import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YHA - AI Chat Application",
  description: "YHA - AI is a sleek, modern, and responsive AI-powered chat application designed to empower users to explore AI, coding, and computer science concepts. Developed by Arkar Yan.",
  keywords: ["YHA AI", "AI Chat", "Chat Application", "Gemini AI", "AI Assistant", "Web Application", "Arkar Yan"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  openGraph: {
    title: "YHA - AI Chat Application | Arkar Yan",
    description: "YHA - AI is a sleek, modern, and responsive AI-powered chat application designed to empower users to explore AI, coding, and computer science concepts.",
    url: "https://arkaryan.net/projects/yha-ai",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg",
        width: 1200,
        height: 630,
        alt: "YHA - AI Chat Application by Arkar Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YHA - AI Chat Application | Arkar Yan",
    description: "YHA - AI is a sleek, modern, and responsive AI-powered chat application designed to empower users to explore AI, coding, and computer science concepts.",
    images: ["https://arkaryan.net/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
  },
};