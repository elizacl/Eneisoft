import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Noise } from "@/components/ui/Noise";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ENEISOFT XVI 2026 | FISI UNMSM",
  description:
    "Encuentro Nacional de Estudiantes de Ingeniería de Sistemas y Computación - Facultad de Ingeniería de Sistemas e Informática, Universidad Nacional Mayor de San Marcos.",
  icons: {
    icon: "/logoEneisoft.jpg",
    shortcut: "/logoEneisoft.jpg",
    apple: "/logoEneisoft.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black cursor-none`}
      >
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Noise />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
