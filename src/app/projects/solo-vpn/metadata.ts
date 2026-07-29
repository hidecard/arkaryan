import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solo VPN - Java Native VPN Application",
  description: "Solo VPN is a Java Native VPN application focusing on secure network protocols, data encryption, and high-performance connectivity. Developed by Arkar Yan.",
  keywords: ["Solo VPN", "VPN", "Java Native", "OpenVPN", "WireGuard", "IKEv2", "AES-256", "Network Security", "Arkar Yan"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  openGraph: {
    title: "Solo VPN - Java Native VPN Application | Arkar Yan",
    description: "Solo VPN is a Java Native VPN application focusing on secure network protocols, data encryption, and high-performance connectivity.",
    url: "https://arkaryan.net/projects/solo-vpn",
    siteName: "Arkar Yan - Portfolio",
    type: "website",
    images: [
      {
        url: "https://arkaryan.net/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Solo VPN by Arkar Yan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo VPN - Java Native VPN Application | Arkar Yan",
    description: "Solo VPN is a Java Native VPN application focusing on secure network protocols, data encryption, and high-performance connectivity.",
    images: ["https://arkaryan.net/profile.jpg"],
    creator: "@hidecard1",
    site: "@hidecard1",
  },
  robots: {
    index: true,
    follow: true,
  },
};