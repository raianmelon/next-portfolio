import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import TitleHandler from "@/components/TitleHandler";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raian Melon | Izrada web stranica",
  description: "Transformiranje vaših ideja u web stranice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="hr">
    <body className={inter.className + ' bg-background text-white'}>
    <TitleHandler DefaultTitle={metadata.title}>
        <NavBar/>
        <main className={'min-h-[calc(100vh-90px)] overflow-x-hidden'}>
            {children}
        </main>
        <Footer/>
    </TitleHandler>
    </body>
    <GoogleAnalytics gaId="G-K9VFYGBKL8" />
    </html>
    );
}
