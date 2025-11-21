import type { Metadata } from "next";
import "./globals.css";
import { Paytone_One, Athiti } from "next/font/google";
import { GSAPProvider } from "@/provider/gsapProvider";
import { Nav } from "@/components/navigation/nav";
import { Footer } from "@/components/navigation/footer";

const paytoneOne = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-paytone-one",
  preload: true,
});

const athiti = Athiti({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-athiti",
  style: "normal",
  preload: true,
});

export const metadata: Metadata = {
  title: "MicKam Ltd",
  description: "Build your World",
  keywords: "Building, Construction, Architecture, Engineering, Design",
  authors: [{ name: "John" }],
  openGraph: {
    title: "MicKam Ltd - Build your World",
    description:
      "Discover MicKam Ltd, where innovation meets sustainability in building the world of tomorrow.",
    url: "https://mickamltd.vercel.app/",
    siteName: "MicKam Ltd",
    images: [
      {
        url: "https://mickamltd.vercel.app/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "MicKam Ltd - Build your World",
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MicKam Ltd - Build your World",
    description:
      "Discover MicKam Ltd, where innovation meets sustainability in building the world of tomorrow.",
    images: ["https://mickamltd.vercel.app/og_image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* <meta
          name="google-site-verification"
          content="yM8uv0TXDO21p5vj5KHRXwUHJWiuIN25IucmFOlwMPs"
        /> */}
      </head>
      <GSAPProvider>
        <body
          className={`${athiti.variable} ${paytoneOne.variable} antialiased`}
        >
          <Nav />
          <main className="md:mt-12">{children}</main>
          <Footer />
        </body>
      </GSAPProvider>
    </html>
  );
}
