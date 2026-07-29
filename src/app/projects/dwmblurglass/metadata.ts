import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DWMBlurGlass - Windows Blur Effects Tool",
  description: "DWMBlurGlass is a free and open-source application that enables customizable blur effects for Windows title bars and borders. Developed by Arkar Yan.",
  keywords: ["DWMBlurGlass", "Windows", "Blur Effects", "DWM", "Open Source", "C++", "Arkar Yan"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  openGraph: {
    title: "DWMBlurGlass - Windows Blur Effects Tool | Arkar Yan",
    description: "DWMBlurGlass is a free and open-source application that enables customizable blur effects for Windows title bars and borders, bringing back the classic Aero glass effect.",
    url: "https://arkaryan.net/projects/dwmblurglass",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg",
        width: 1200,
        height: 630,
        alt: "DWMBlurGlass by Arkar Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DWMBlurGlass - Windows Blur Effects Tool | Arkar Yan",
    description: "DWMBlurGlass is a free and open-source application that enables customizable blur effects for Windows title bars and borders.",
    images: ["https://arkaryan.net/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
  },
};