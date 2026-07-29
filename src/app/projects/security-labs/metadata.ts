import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Labs Web Platform - Cybersecurity Learning",
  description: "Security Labs is a web-based interactive learning platform designed to teach practical cybersecurity concepts through hands-on labs and curated resources. Developed by Arkar Yan.",
  keywords: ["Security Labs", "Cybersecurity", "Learning Platform", "Web Security", "SQL Injection", "XSS", "CORS", "Arkar Yan"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  openGraph: {
    title: "Security Labs Web Platform - Cybersecurity Learning | Arkar Yan",
    description: "Security Labs is a web-based interactive learning platform designed to teach practical cybersecurity concepts through hands-on labs and curated resources.",
    url: "https://arkaryan.net/projects/security-labs",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Security Labs by Arkar Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Labs Web Platform - Cybersecurity Learning | Arkar Yan",
    description: "Security Labs is a web-based interactive learning platform designed to teach practical cybersecurity concepts through hands-on labs and curated resources.",
    images: ["https://arkaryan.net/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
  },
};