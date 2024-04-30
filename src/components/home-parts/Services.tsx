import {PencilLine, ShoppingBasket, Wrench} from "lucide-react";
import {AnimatedElement, AnimatedHeading} from "@/components/AnimatedElement";

export default function Services() {

    return (
        <section id={'services'} className={'px-4 md:px-16 xl:px-32 2xl:px-52 pt-20 lg:pt-32'}>
            <AnimatedHeading className={'text-3xl mb-10 lg:mb-20 text-center'}>Usluge</AnimatedHeading>
            <AnimatedElement className={'flex lg:flex-row flex-col gap-10 lg:gap-0 justify-between'}>
                <div
                    className={'w-full lg:max-w-[25%] h-fit rounded-xl bg-yellow bg-opacity-80 hover:bg-opacity-100 transition-all text-black px-6 py-8 flex flex-col gap-10 justify-center items-center'}>
                    <div className={'flex flex-col gap-5 justify-center items-center'}>
                        <PencilLine size={40}/>
                        <h1 className={'text-2xl font-bold'}>Blog</h1>
                    </div>
                    <p className={'text-md leading-8'}>Nudim kvalitetnu izradu blog web stranica prilagođenih vašem
                        sadržaju, s elegantnim dizajnom i optimizacijom za pretraživače, pomažući vam u izgradnji
                        vjerne publike i autoriteta u vašoj mjeri.</p>
                </div>
                <div
                    className={'w-full lg:max-w-[30%] rounded-xl bg-yellow hover:bg-opacity-80 transition-all text-black px-6 py-8 flex flex-col gap-10 justify-center items-center'}>
                    <div className={'flex flex-col gap-5 justify-center items-center'}>
                        <ShoppingBasket size={50}/>
                        <h1 className={'text-2xl font-bold'}>Web Shop</h1>
                    </div>
                    <p className={'text-md leading-8'}>Nudim potpunu uslugu izrade webshopova prilagođenih vašem
                        brendu, s naglaskom na personaliziranom dizajnu, intuitivnoj funkcionalnosti, optimizaciji za
                        pretraživače te kontinuiranoj podršci i održavanju, osiguravajući vam konkurentsku prednost i
                        uspjeh na digitalnom tržištu.</p>
                </div>
                <div
                    className={'w-full lg:max-w-[25%] h-fit rounded-xl bg-opacity-80 hover:bg-opacity-100 transition-all shadow-gray bg-yellow text-black px-6 py-8 flex flex-col gap-10 justify-center items-center'}>
                    <div className={'flex flex-col gap-5 justify-center items-center'}>
                        <Wrench size={40}/>
                        <h1 className={'text-2xl font-bold'}>Prilagođena Web Stranica</h1>
                    </div>
                    <p className={'text-md leading-8'}>Nudim izradu prilagođenih web stranica, odražavajući vaše
                        potrebe i estetiku, uz naglasak na funkcionalnosti i korisničkom iskustvu, kako biste
                        ostvarili svoje poslovne ciljeve na webu.</p>
                </div>
            </AnimatedElement>
        </section>
    )
}