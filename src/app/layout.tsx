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
  title: "Arkar Yan - Full-Stack Developer Portfolio",
  description: "Professional portfolio of Arkar Yan, a Full-Stack Developer with expertise in React.js, Next.js, Node.js, PHP, and mobile development.",
  keywords: ["Arkar Yan", "Full-Stack Developer", "React.js", "Next.js", "Node.js", "PHP", "Flutter", "Web Development", "Mobile Development"],
  authors: [{ name: "Arkar Yan" }],
  openGraph: {
    title: "Arkar Yan - Full-Stack Developer",
    description: "Professional portfolio showcasing web and mobile development projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkar Yan - Full-Stack Developer",
    description: "Professional portfolio showcasing web and mobile development projects",
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
