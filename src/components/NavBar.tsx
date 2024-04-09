'use client'
import Image from "next/image";
import Link from "next/link";
import {FilledButton} from "@/components/Buttons";
import { useState } from 'react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <nav className={'px-4 md:px-16 py-4 flex justify-between items-center border-b-2 border-b-dark-green'}>
            <Link href={'/'}><Image className={'rounded-full'} src={'logo.svg'} alt={'Logo Raian Melon'} width={50} height={50} /></Link>

            <div className={'md:hidden'}>
                {isMenuOpen ? (
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                ) : (
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                )}
            </div>



            <div className={`hidden md:flex gap-10 items-center`}>
                <NavButton href={'/'}>Pocetna</NavButton>
                <NavButton href={'#href'}>Projekti</NavButton>
                <NavButton href={'#href'}>Usluge</NavButton>
                <NavButton href={'#href'}>O meni</NavButton>
                <FilledButton href={'#href'}>Kontakt</FilledButton>
            </div>
        </nav>
        {isMenuOpen && (
            <div className={`flex flex-col gap-10 z-10 items-center justify-start text-xl mt-12 transition-all fixed w-full h-screen ${isMenuOpen ? 'bg-[#000d09FF] opacity-1' : 'bg-[#000d0900] opacity-0'}`}>
                <NavButton href={'/'}>Pocetna</NavButton>
                <NavButton href={'#href'}>Projekti</NavButton>
                <NavButton href={'#href'}>Usluge</NavButton>
                <NavButton href={'#href'}>O meni</NavButton>
                <FilledButton className={'ml-0'} href={'#href'}>Kontakt</FilledButton>
            </div>
        )}
    </>
    )
}
function NavButton ({children, href}: {children: React.ReactNode, href: string}) {
    return (
        <Link href={href} className={'after:content-[""] text-white after:block relative after:absolute after:-bottom-2 after:w-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 after:h-0.5 after:bg-yellow'}>{children}</Link>
    )
}