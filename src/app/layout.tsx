import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arkar Yan - Software Engineer | Project Manager | Instructor | Founder",
  description: "Visionary Software Architect and Educator with 10+ years experience. Led 200+ projects in enterprise SaaS, AI solutions, and cybersecurity advocacy. Founder of k Square, specializing in MERN, Laravel, and Flutter development.",
  keywords: ["Arkar Yan", "Software Engineer", "Project Manager", "Instructor", "Founder", "Software Architect", "MERN", "Laravel", "Flutter", "Cybersecurity", "SaaS", "Next.js", "React.js", "Node.js", "PHP", "Web Development", "Mobile Development", "k Square", "Myanmar Cyber Ghost"],
  authors: [{ name: "Arkar Yan" }],
  openGraph: {
    title: "Arkar Yan - Software Engineer & Founder",
    description: "10+ years experience in software architecture, project management, and cybersecurity advocacy. Founder of k Square and Myanmar Cyber Ghost.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkar Yan - Software Engineer & Founder",
    description: "10+ years experience in software architecture, project management, and cybersecurity advocacy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
