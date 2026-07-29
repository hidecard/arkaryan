import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhotoBooth - Interactive Web Photo Booth",
  description: "PhotoBooth is a fun, interactive web-based PhotoBooth application that lets you capture memorable moments with cute frames, effects, and customizable layouts. Developed by Arkar Yan.",
  keywords: ["PhotoBooth", "Photo Booth", "Web Application", "Camera", "Photo Effects", "HTML5", "JavaScript", "Arkar Yan"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  openGraph: {
    title: "PhotoBooth - Interactive Web Photo Booth | Arkar Yan",
    description: "PhotoBooth is a fun, interactive web-based PhotoBooth application that lets you capture memorable moments with cute frames, effects, and customizable layouts.",
    url: "https://arkaryan.net/projects/photobooth",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg",
        width: 1200,
        height: 630,
        alt: "PhotoBooth by Arkar Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoBooth - Interactive Web Photo Booth | Arkar Yan",
    description: "PhotoBooth is a fun, interactive web-based PhotoBooth application that lets you capture memorable moments with cute frames, effects, and customizable layouts.",
    images: ["https://arkaryan.net/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
  },
};