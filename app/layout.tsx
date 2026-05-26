"use client";

import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import { useState } from "react";
import Preloader from "@/components/Preloader";
import Footer from "@/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
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
      className={`${poppins.variable} ${jetbrainsMono.variable} h-full antialiased`}
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
