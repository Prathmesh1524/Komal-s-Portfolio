import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import PageTransiton from "@/component/PageTransition";
import StairTransition from "@/component/StairTransition";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "@/component/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Komal Gat - Dentist",
  description: "Portfolio of Komal Gat, BIG-registered Dentist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Header/>
            <StairTransition/>
            <PageTransiton>
              {children}
            </PageTransiton>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
