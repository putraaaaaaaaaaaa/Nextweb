import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./main.css";
import "./sec.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from '@next/third-parties/google'
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}
export const metadata: Metadata = {
  title: "NUEPEDIA - Top Up Game Termurah Dan Tercepat Se-Indonesia",
  description:
    "No #1 supplier top up game & voucher terlaris, murah, aman legal 100% buka 24 Jam dengan payment terlengkap Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <GoogleTagManager gtmId="GTM-55FVQXDD" />
      <body
        className={cn(
          "bg-background bg-gradient-theme text-foreground font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster position="top-center" />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
