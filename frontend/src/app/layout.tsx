import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoftSell - Maximize the Value of Your Software Licenses",
  description:
    "SoftSell helps businesses sell unused software licenses quickly and at the best market rates. Turn your idle software assets into cash.",
  keywords:
    "software resale, license reselling, software asset management, sell software licenses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster richColors/>
        </ThemeProvider>
      </body>
    </html>
  );
}
