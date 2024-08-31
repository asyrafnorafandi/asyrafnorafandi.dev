import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/particles";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Asyraf Norafandi | Senior DevOps Engineer",
  description: "Bridging Code to Cloud with DevOps Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackground>
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 z-10">
            {children}
          </div>
        </ParticlesBackground>
      </body>
      <GoogleAnalytics gaId="G-EJ5FCMTW57" />
    </html>
  );
}
