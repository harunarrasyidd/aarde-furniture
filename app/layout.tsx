import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AARDE Furniture | Interior Custom Jepara",

  description:
    "AARDE Furniture menghadirkan furniture interior custom premium dengan craftsmanship Jepara untuk hunian, villa, workspace, hospitality, dan proyek komersial.",

  keywords: [
    "Furniture Jepara",
    "Interior Custom",
    "Kitchen Set Jepara",
    "Wardrobe Custom",
    "Furniture Premium",
    "Interior Jepara",
    "Custom Furniture",
    "AARDE Furniture",
  ],

  authors: [{ name: "AARDE Furniture" }],

  creator: "AARDE Furniture",

  metadataBase: new URL("https://aardefurniture.com"),

  openGraph: {
    title: "AARDE Furniture",

    description:
      "Interior Custom Premium dengan craftsmanship Jepara.",

    url: "https://aardefurniture.com",

    siteName: "AARDE Furniture",

    images: [
      {
        url: "/banner-share.webp",
        width: 1200,
        height: 630,
        alt: "AARDE Furniture",
      },
    ],

    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "AARDE Furniture",

    description:
      "Furniture Interior Custom Premium Jepara.",

    images: ["/banner-share.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="bg-[#F8F6F2] text-stone-900 antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}