import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DitheringShader } from "@/components/ui/dithering-shader";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const viewport: Viewport = {
  themeColor: "#029dce",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alexanderpowell.me'),
  title: {
    default: 'Alexander Powell',
    template: '%s | Alexander Powell',
  },
  description:
    'Full stack developer based in the UK with 15+ years of experience across the full breadth of product — from design and analysis through to development, DevOps, and deployment.',
  openGraph: {
    siteName: 'Alexander Powell',
    type: 'website',
    images: [{ url: '/img/me.jpg' }],
  },
  twitter: {
    card: 'summary',
    site: '@theblindfrog',
    creator: '@theblindfrog',
    images: ['/img/me.jpg'],
  },
  icons: {
    icon: [
      { url: "/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/img/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/img/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} antialiased text-gray-900 leading-relaxed border-t-4 border-primary-500 relative`}
        suppressHydrationWarning
      >
        <div className="absolute bottom-0 inset-x-0 -z-10 h-[60vh] bg-red-500">
          <DitheringShader
            shape="wave"
            type="8x8"
            colorBack="#FFFFFF"
            colorFront="#3182ce"
            pxSize={4}
            speed={0.3}
          />
        </div>
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col min-h-screen">
          <header className="mb-12 md:mb-20">
            <Header />
          </header>

          <main className="flex-grow relative">
            
            <div className="relative z-10 md:px-24 md:mx-2">{children}</div>
            <Analytics />
            <SpeedInsights />
            <div className="absolute w-full h-full top-0 z-1 left-0 bg-white blur-2xl"></div>
            </main>

          <div className="flex flex-col justify-end h-[400px]">
            <Footer />
          </div>
        </div>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-141183275-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-141183275-1');
          `}
        </Script>
      </body>
    </html>
  );
}
