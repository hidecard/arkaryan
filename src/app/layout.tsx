import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";
import { BackToTop } from "@/components/ui/back-to-top";
import LoadingScreen from "@/components/loading-screen";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    description: "10+ years experience in software architecture, project management, and cybersecurity advocacy. Founder of k Square and Myanmar Cyber Ghost.",
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
            url: "https://arkaryan.net/",
            jobTitle: "Full Stack Developer & Software Architect",
            description: "Visionary Software Architect and Educator with 10+ years experience in enterprise SaaS, AI solutions, and cybersecurity advocacy.",
            email: "info@arkaryan.net",
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
            url: "https://arkaryan.net/",
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
              url: "https://arkaryan.net/",
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
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen>
            {children}
          </LoadingScreen>
          <BackToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
