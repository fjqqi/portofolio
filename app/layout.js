import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Navbar } from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"], // Use an array of strings
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const backgroundStyle = {
  background: `linear-gradient(113.822deg, rgba(47, 88, 79, 0.2) 23%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(#FFFFFF, #FFFFFF)`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable}  ${geistMono.variable} antialiased`}
        style={backgroundStyle}
      >
        <Navbar />
        <div className="min-w-screen mt-32 overflow-hidden lg:mt-40">{children}</div>
      </body>
    </html>
  );
}
