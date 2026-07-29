import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OneKit - Modern JavaScript Library",
  description: "OneKit is a lightweight, powerful JavaScript library that provides everything you need for modern web development: DOM manipulation, animations, reactive state management, routing, API integration, and more. Developed by Arkar Yan.",
  keywords: ["OneKit", "JavaScript Library", "DOM Manipulation", "Animations", "State Management", "Routing", "Web Development", "Arkar Yan"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  openGraph: {
    title: "OneKit - Modern JavaScript Library | Arkar Yan",
    description: "OneKit is a lightweight, powerful JavaScript library that provides everything you need for modern web development.",
    url: "https://arkaryan.net/projects/onekit",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg",
        width: 1200,
        height: 630,
        alt: "OneKit - Modern JavaScript Library by Arkar Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneKit - Modern JavaScript Library | Arkar Yan",
    description: "OneKit is a lightweight, powerful JavaScript library that provides everything you need for modern web development.",
    images: ["https://arkaryan.net/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
  },
};