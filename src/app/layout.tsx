import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";
import { BackToTop } from "@/components/ui/back-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arkar Yan - Full Stack Developer",
  description: "Visionary Software Architect and Educator with 10+ years experience. Led 200+ projects in enterprise SaaS, AI solutions, and cybersecurity advocacy. Founder of k Square, specializing in MERN, Laravel, and Flutter development.",
  keywords: ["Arkar Yan", "Software Engineer", "Full Stack Developer", "Project Manager", "Instructor", "Founder", "Software Architect", "MERN", "Laravel", "Flutter", "Cybersecurity", "SaaS", "Next.js", "React.js", "Node.js", "PHP", "Web Development", "Mobile Development", "k Square", "Myanmar Cyber Ghost", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Arkar Yan" }],
  creator: "Arkar Yan",
  publisher: "Arkar Yan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arkaryan.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arkar Yan - Full Stack Developer & Software Architect",
    description: "10+ years experience in software architecture, project management, and cybersecurity advocacy. Founder of k Square and Myanmar Cyber Ghost.",
    type: "website",
    url: "https://arkaryan.vercel.app",
    siteName: "Arkar Yan - Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Arkar Yan - Full Stack Developer & Software Architect",
      },
      {
        url: "/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Arkar Yan - Full Stack Developer & Software Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkar Yan - Full Stack Developer & Software Architect",
    description: "10+ years experience in software architecture, project management, and cybersecurity advocacy. Founder of k Square.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F67B1SFD7W"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F67B1SFD7W');
            `,
          }}
        />
        
        {/* Structured Data for SEO */}
        <StructuredData
          type="Person"
          data={{
            name: "Arkar Yan",
            url: "https://arkaryan.vercel.app",
            jobTitle: "Full Stack Developer & Software Architect",
            description: "Visionary Software Architect and Educator with 10+ years experience in enterprise SaaS, AI solutions, and cybersecurity advocacy.",
            email: "arkaryan.info@gmail.com",
            worksFor: {
              "@type": "Organization",
              name: "k Square",
              description: "Software development and cybersecurity company",
              url: "https://ksquare.com",
            },
            knowsAbout: [
              "Software Development",
              "Web Development",
              "Mobile Development",
              "Cybersecurity",
              "Project Management",
              "Software Architecture",
              "MERN Stack",
              "Laravel",
              "Flutter",
              "Next.js",
              "React.js",
              "Node.js",
              "TypeScript",
              "Tailwind CSS",
            ],
            sameAs: [
              "https://twitter.com/hidecard1",
              "https://linkedin.com/in/arkaryan",
              "https://github.com/hidecard",
              "https://facebook.com/hidecard1",
            ],
          }}
        />
        <StructuredData
          type="WebSite"
          data={{
            name: "Arkar Yan - Portfolio",
            url: "https://arkaryan.vercel.app",
            description: "Professional portfolio showcasing software development projects, skills, and experience.",
            author: {
              "@type": "Person",
              name: "Arkar Yan",
            },
            publisher: {
              "@type": "Organization",
              name: "Arkar Yan Portfolio",
            },
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              name: "Arkar Yan Portfolio",
              url: "https://arkaryan.vercel.app",
            },
          }}
        />
        <StructuredData
          type="Organization"
          data={{
            name: "k Square",
            url: "https://ksquare.com",
            description: "Software development and cybersecurity company founded by Arkar Yan",
            founder: {
              "@type": "Person",
              name: "Arkar Yan",
            },
            sameAs: [
              "https://twitter.com/hidecard1",
              "https://linkedin.com/in/arkaryan",
              "https://github.com/hidecard",
            ],
          }}
        />
      </head>
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
          <BackToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
