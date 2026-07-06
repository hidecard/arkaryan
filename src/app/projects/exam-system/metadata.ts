import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Exam System - Educational Platform",
  description: "A secure online examination system featuring PDF rendering, real-time question fetching from Google Sheets, and content protection mechanisms.",
  openGraph: {
    title: "Secure Exam System - Educational Platform",
    description: "Secure online examination system with PDF rendering and content protection. Integrated with Google Sheets API.",
    url: "https://arkaryan.net/projects/exam-system",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg", // Replace with actual project image if available
        width: 1200,
        height: 630,
        alt: "Secure Exam System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Exam System - Educational Platform",
    description: "Secure online examination system with PDF rendering and content protection.",
    images: ["https://arkaryan.net/profile.jpg"],
  },
};
