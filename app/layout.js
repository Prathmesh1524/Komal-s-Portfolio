import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import PageTransiton from "@/component/PageTransition";
import StairTransition from "@/component/StairTransition";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prathmesh's Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          <StairTransition />
          <PageTransiton>
            {children}
          </PageTransiton>
        </LanguageProvider>
      </body>
    </html>
  );
}
