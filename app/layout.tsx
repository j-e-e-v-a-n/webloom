import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Navbar } from "@/Components/export";
import { ThemeProvider } from "@/Components/themeProvider";
import { Toaster } from "@/Components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"; // Importing Analytics

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const baseUrl = "https://weblo0m.vercel.app";

export const metadata = {
  title: "WebLoom | Expert Web Development Solutions",
  description:
    "Discover WebLoom, where we specialize in high-quality web development services, including custom landing pages and SEO optimization.",
  openGraph: {
    title: "WebLoom | Expert Web Development Solutions",
    description:
      "Discover WebLoom, where we specialize in high-quality web development services, including custom landing pages and SEO optimization.",
    url: baseUrl,
    images: [
      {
        url: baseUrl + "/webcodge-logo.png",
        width: 1200,
        height: 630,
        alt: "WebLoom banner image showcasing web development services",
      },
    ],
    siteName: "WebLoom",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    site: "@weblo0m",
    title: "WebLoom | Expert Web Development Solutions",
    description:
      "Discover WebLoom, where we specialize in high-quality web development services, including custom landing pages and SEO optimization.",
    images: [baseUrl + "/webcodge-logo.png"],
  },
  keywords:
    "WebLoom, web development, landing pages, SEO, custom websites, webloomdev.s",
  authors: [{ name: "WebLoom", url: baseUrl }],
  generator: "Next.js",
  referrer: "no-referrer",
  creator: "Webloom dev",
  publisher: "WebLoom",
  category: "Web Development, Digital Services",
  classification: "Professional Services, Personal Branding",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics /> {/* Analytics component is added here */}
      </body>
    </html>
  );
}
