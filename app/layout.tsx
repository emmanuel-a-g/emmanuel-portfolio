import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Emmanuel Garcia - Full Stack Developer",
  description:
    "Professional portfolio of Emmanuel Garcia, a full stack software developer specializing in modern web technologies.",
  keywords: [
    "Emmanuel Garcia",
    "El Paso, TX",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Emmanuel Garcia" }],
  creator: "Emmanuel Garcia",
  icons: {
    icon: "/favicon.ico", // place favicon.ico in public/
    shortcut: "/favicon.png", // optional alternative
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emmanuelgarcia.dev",
    title: "Emmanuel Garcia - Full Stack Developer",
    description:
      "Professional portfolio of Emmanuel Garcia, a full stack software developer.",
    siteName: "Emmanuel Garcia Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/milito/image/upload/v1663637865/mypage/hook300_jwlftp.jpg",
        width: 270,
        height: 316,
        alt: "A picture of Emmanuel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Garcia - Full Stack Developer",
    description:
      "Professional portfolio of Emmanuel Garcia, a full stack software developer.",
    images: [
      "https://res.cloudinary.com/milito/image/upload/v1663637865/mypage/hook300_jwlftp.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
