import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyanCareer AI - AI Career Guidance Platform",
  description: "MyanCareer AI is an AI-powered career guidance platform designed specifically for Myanmar's young professionals and job seekers. Features AI career assessment, roadmap generation, and resume building.",
  openGraph: {
    title: "MyanCareer AI - AI Career Guidance Platform",
    description: "AI-powered career guidance platform for Myanmar's young professionals. Personalized assessments, roadmaps, and resume builder.",
    url: "https://arkaryan.net/projects/mm-career-ai",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg", // Replace with actual project image if available
        width: 1200,
        height: 630,
        alt: "MyanCareer AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyanCareer AI - AI Career Guidance Platform",
    description: "AI-powered career guidance platform for Myanmar's young professionals.",
    images: ["https://arkaryan.net/profile.jpg"],
  },
};
