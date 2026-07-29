import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";
import { BackToTop } from "@/components/ui/back-to-top";
import LoadingScreen from "@/components/loading-screen";
import { metadata } from "./metadata";

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
            image: "https://arkaryan.net/profile.jpg",
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
               "YBS AI - Intelligent Public Transport",
               "MM Match - Telegram Dating Bot",
               "Solo VPN",
               "KG English",
               "DWMBlurGlass",
               "OneKit JavaScript Library",
               "MM Career AI",
               "PhotoBooth",
               "Exam System",
               "YHA AI Chat",
               "CSS-Labs",
               "Security Labs",
               "Programming Keyboard Trainer",
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
