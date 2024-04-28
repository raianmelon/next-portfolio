'use client'
import Link from "next/link";
import Image from "next/image";
import {Github, Instagram, Mail, Phone} from "lucide-react";

export default function Footer() {
    const date = new Date()
    let year = date.getFullYear()

    return (
        <div className={'flex flex-wrap justify-between items-start gap-8 lg:gap-0 py-8 px-4 md:px-16 border-t-2 border-t-dark-green'}>
            <div className={'flex flex-col justify-start items-start gap-5 w-[100%] lg:w-[24%]'}>
                <Link href={'/'} className={'flex justify-center items-center gap-5'}>
                    <Image className={'rounded-full hover:ring-[2.5px] ring-yellow transition-all'} src={'logo.svg'} alt={'Logo Raian Melon'} width={50} height={50} />
                    <span className={'flex text-lg font-bold gap-0.5 group transition-all py-2.5'}><h1 className={'text-yellow  inline-block align-middle group-hover:text-white transition-all'}>Raian</h1><h1 className={'text-white inline-block align-middle group-hover:text-yellow transition-all'}>Melon</h1></span>
                </Link>
                <p>Copyright {year} Raian Melon. Sva prava pridržana</p>
                <Link href={'/#nema'} className={'text-white hover:text-yellow font-light transition-all'}>Politika privatnosti</Link>
                <Link href={'/#nema'} className={'text-white hover:text-yellow font-light transition-all'}>Politika kolačića</Link>
            </div>
            <div className={'flex flex-col gap-6 justify-start lg:justify-center items-start lg:items-center w-[100%] lg:w-[24%]'}>
                    <h1 className={'text-white font-semibold text-lg'}>Linkovi</h1>
                    <div className={'flex flex-col gap-4 justify-center items-center'}>
                        <Link href={'/'} className={'text-white hover:text-yellow font-light transition-all'}>Pocetna</Link>
                        <Link href={'#projects'} className={'text-white hover:text-yellow font-light transition-all'}>Projekti</Link>
                        <Link href={'#services'} className={'text-white hover:text-yellow font-light transition-all'}>Usluge</Link>
                        <Link href={'#skills'} className={'text-white hover:text-yellow font-light transition-all'}>Vještine</Link>
                        <Link href={'#contact'} className={'text-white hover:text-yellow font-light transition-all'}>Kontakt</Link>
                    </div>
            </div>
            <div className={'flex flex-col gap-6 justify-start lg:justify-center items-start lg:items-center w-[100%] lg:w-[24%]'}>
                <h1 className={'text-white font-semibold text-lg'}>Društvene mreže</h1>
                <div className={'flex flex-col gap-4 justify-start items-start lg:justify-center lg:items-center'}>
                    <Link target={'_blank'} className={'flex gap-2 justify-center items-center overflow-hidden transition-all hover:text-yellow'} href={"https://github.com/raianmelon"}><Github/>Github</Link>
                    <Link target={'_blank'} className={'flex gap-2 justify-center items-center overflow-hidden transition-all hover:text-yellow'} href={"https://instagram.com/raianmelon"}><Instagram/>Instagram</Link>
                </div>
            </div>
            <div className={'flex flex-col gap-6 justify-start items-start w-[100%] lg:max-w-fit'}>
                <h1 className={'text-white font-semibold text-lg text-start'}>Kontakt</h1>
                <div className={'flex flex-col gap-6 justify-start items-start'}>
                    <Link target={'_blank'} href={'mailto:raian@raianmelon.com'} className={'text-white hover:text-yellow font-light transition-all flex gap-4'}><Mail/>raian@raianmelon.com</Link>
                    <Link target={'_blank'} href={'tel:+385919810766'} className={'text-white hover:text-yellow font-light transition-all flex gap-4'}><Phone/> +385 91 981 0766</Link>
                </div>
            </div>
        </div>
    )
}