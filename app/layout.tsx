"use client";

import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import { useState } from "react";
import Preloader from "@/components/Preloader";
import Footer from "@/layout/Footer"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      {/* <body
  className={`h-full flex flex-col ${
    preloaderDone ? "overflow-auto" : "overflow-hidden"
  }`}
>
  {!preloaderDone && (
    <Preloader onComplete={() => setPreloaderDone(true)} />
  )}

  <main
    className={`min-h-screen w-full transition-opacity duration-700 ${
      preloaderDone ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <Navbar />
    {children}
     <Footer />
  </main>


  
</body> */}

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
