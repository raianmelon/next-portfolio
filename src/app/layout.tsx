import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import TitleHandler from "@/components/TitleHandler";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raian Melon | Izrada web stranica",
  description: "Transformiranje ideja u web stranice.",
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
          <main className={'px-4 md:px-16 min-h-[calc(100vh-90px)] overflow-x-hidden'}>
              {children}
          </main>
          <Footer/>
      </TitleHandler>
      </body>
    </html>
  );
}
