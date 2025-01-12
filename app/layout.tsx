import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Navbar } from "@/Components/export";
import { ThemeProvider } from "@/Components/themeProvider";
import { Toaster } from "@/Components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"; // Importing Analytics
import Head from "next/head"; // Import the Head component for adding custom head tags

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
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PQDM42QT');`,
          }}
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQDM42QT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
