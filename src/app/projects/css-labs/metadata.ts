import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS-Labs - CSS Layout Learning Tool",
  description: "CSS-Labs is a web-based tool designed to help developers learn and experiment with CSS layouts (Flexbox and Grid) with live preview and code generation. Developed by Arkar Yan.",
  keywords: ["CSS-Labs", "CSS Layouts", "Flexbox", "Grid", "Web Development", "Learning Tool", "Arkar Yan"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  openGraph: {
    title: "CSS-Labs - CSS Layout Learning Tool | Arkar Yan",
    description: "CSS-Labs is a web-based tool designed to help developers learn and experiment with CSS layouts (Flexbox and Grid) with live preview and code generation.",
    url: "https://arkaryan.net/projects/css-labs",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg",
        width: 1200,
        height: 630,
        alt: "CSS-Labs by Arkar Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS-Labs - CSS Layout Learning Tool | Arkar Yan",
    description: "CSS-Labs is a web-based tool designed to help developers learn and experiment with CSS layouts (Flexbox and Grid) with live preview and code generation.",
    images: ["https://arkaryan.net/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
  },
};