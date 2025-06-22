import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Strait } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const jetBrains = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: ["400", "700"], // optional weights
//   display: "swap",
// });
const straitFont = Strait({
  subsets: ["latin"],
  weight: ["400"], // optional weights
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raj Maharjan",
  description: "HVAC SERVICE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={straitFont.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
