import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import TitleHandler from "@/components/TitleHandler";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raian Melon | Portfolio",
  description: "Web developer iz Istre sa puno znanja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en">
      <body className={inter.className + ' bg-[#000d09] text-white'}>
      <TitleHandler DefaultTitle={metadata.title}>
          <NavBar/>
          <main className={'px-16 min-h-[calc(100vh-90px)]'}>
              {children}
          </main>
      </TitleHandler>
      </body>
    </html>
  );
}
