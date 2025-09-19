import type { Metadata } from "next";
import { Playfair_Display as PlayfairDisplay, Inter as InterFont } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const playfairDisplay = PlayfairDisplay({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair"
});

const interFont = InterFont({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Pondicherry Premium Construction and Design | JASC - Jackson Arch Studio and Construction",
  description:
    "JASC offers Pondicherry premium construction and design services, including interior, exterior, and commercial building solutions with high-quality craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts Embed */}
        <link rel="stylesheet" href="https://use.typekit.net/abcd123.css" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${interFont.variable} font-havelock antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
