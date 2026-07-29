import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Arkar Yan - Full Stack Developer | Software Architect",
    template: "%s | Arkar Yan",
  },
  description: "Arkar Yan is a full-stack developer, software architect, and educator based in Yangon, Myanmar. With 9+ years of experience in enterprise SaaS, AI solutions, cybersecurity advocacy, and software architecture. Creator of YBS AI, MM Match, Solo VPN, KG English, DWMBlurGlass, OneKit, and many more open-source projects.",
  keywords: ["Arkar Yan", "Software Engineer", "Full Stack Developer", "Project Manager", "Instructor", "Founder", "Software Architect", "MERN", "Laravel", "Flutter", "Cybersecurity", "SaaS", "Next.js", "React.js", "Node.js", "PHP", "Web Development", "Mobile Development", "k Square", "Myanmar Cyber Ghost", "TypeScript", "Tailwind CSS", "YBS AI", "MM Match", "Solo VPN", "KG English", "DWMBlurGlass", "OneKit", "AI Solutions", "Yangon Myanmar"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arkaryan.net/"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arkar Yan - Full Stack Developer & Software Architect",
    description: "Arkar Yan is a full-stack developer, software architect, and educator based in Yangon, Myanmar. Creator of YBS AI, MM Match, Solo VPN, KG English, DWMBlurGlass, OneKit, and many more projects.",
    type: "website",
    url: "https://arkaryan.net/",
    siteName: "Arkar Yan - Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Arkar Yan - Full Stack Developer & Software Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkar Yan - Full Stack Developer & Software Architect",
    description: "Arkar Yan is a full-stack developer, software architect, and educator based in Yangon, Myanmar. Creator of YBS AI, MM Match, Solo VPN, KG English, DWMBlurGlass, OneKit, and many more projects.",
    images: ["/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};