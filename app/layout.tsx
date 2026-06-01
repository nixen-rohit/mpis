"use client";

import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import { useState } from "react";
import Preloader from "@/components/Preloader";
import Footer from "@/layout/Footer";
import WhatsAppFloatingButton from "@/components/custom/WhatsAppFloatingButton";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
      className={`${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        className={`h-full font-poppins flex flex-col ${
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
           <WhatsAppFloatingButton
                  //without +91
                  phoneNumber="8076136446"
                  message="Hi, I visited your website!"
                />
          {children}
          <Footer />
        </main>
      </body>

      {/* <body className="font-poppins">
        <Navbar />
         
        {children}
        <Footer />
      </body> */}


    </html>
  );
}
