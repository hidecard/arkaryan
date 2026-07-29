import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KG English - Interactive English Learning App",
  description: "KG English is an interactive educational mobile application designed to enhance English language learning for young students through gamified experiences. Developed by Arkar Yan.",
  keywords: ["KG English", "English Learning", "Education", "Mobile App", "Flutter", "Gamified", "Arkar Yan"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  openGraph: {
    title: "KG English - Interactive English Learning App | Arkar Yan",
    description: "KG English is an interactive educational mobile application designed to enhance English language learning for young students through gamified experiences.",
    url: "https://arkaryan.net/projects/kg-english",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg",
        width: 1200,
        height: 630,
        alt: "KG English by Arkar Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KG English - Interactive English Learning App | Arkar Yan",
    description: "KG English is an interactive educational mobile application designed to enhance English language learning for young students through gamified experiences.",
    images: ["https://arkaryan.net/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
  },
};