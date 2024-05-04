import {AppWindow, MonitorSmartphone, Paintbrush, ShoppingBasket, Wrench} from "lucide-react";
import {AnimatedHeading} from "@/components/AnimatedElement";

export default function Services() {

    return (
        <section id={'services'} className={'px-4 md:px-16 xl:px-32 2xl:px-52 pt-20 lg:pt-32'}>
            <AnimatedHeading className={'text-3xl mb-10 lg:mb-20 text-center'}>Usluge</AnimatedHeading>
            <div className={'flex lg:flex-row flex-col gap-10 lg:gap-0 justify-between'}>
                <div
                    className={'w-full lg:max-w-[25%] h-fit rounded-xl bg-yellow bg-opacity-80 hover:bg-opacity-100 transition-all text-black px-6 py-8 flex flex-col gap-10 justify-center items-center'}>
                    <div className={'flex flex-col gap-5 justify-center items-center'}>
                        <Paintbrush size={40}/>
                        <h1 className={'text-2xl font-bold text-center'}>Web dizajn</h1>
                    </div>
                    <p className={'text-md leading-8 text-'}>
                        Nudim vrhunsko korisničko iskustvo za vašu web stranicu, bez obzira na to je li riječ o personaliziranoj web lokaciji ili e-trgovini. Moja stručnost u dizajnu korisničkog sučelja i iskustva (UI/UX) osigurava intuitivnost, privlačnost i prilagođenost vašim ciljevima.</p>
                </div>
                <div
                    className={'w-full lg:max-w-[30%] rounded-xl bg-yellow hover:bg-opacity-80 transition-all text-black px-6 py-8 flex flex-col gap-10 justify-center items-center'}>
                    <div className={'flex flex-col gap-5 justify-center items-center'}>
                        <MonitorSmartphone size={50}/>
                        <h1 className={'text-2xl font-bold text-center'}>Web stranica + Web Dizajn</h1>
                    </div>
                    <p className={'text-md leading-8'}>Moja usluga izrade web stranica i dizajna kombinira stručnost u
                        dizajnu i tehnologiji kako bi stvorila online prisutnost koja vas ističe u digitalnom svijetu.
                        Svaka stranica koju kreiram je prilagođena vašim potrebama i brendu, s fokusom na responsivni
                        dizajn, SEO optimizaciji i korisničkom iskustvu. Kontaktirajte me i dopustite mi da vašu viziju
                        pretvorimo u stvarnost na webu.</p>
                </div>
                <div
                    className={'w-full lg:max-w-[25%] h-fit rounded-xl bg-opacity-80 hover:bg-opacity-100 transition-all shadow-gray bg-yellow text-black px-6 py-8 flex flex-col gap-10 justify-center items-center'}>
                    <div className={'flex flex-col gap-5 justify-center items-center'}>
                        <AppWindow size={40}/>
                        <h1 className={'text-2xl font-bold text-center'}>Web stranica</h1>
                    </div>
                    <p className={'text-md leading-8'}>Moj usluga izrade web stranica s pripremljenim dizajnom korisnika
                        omogućuje vam brzo pokretanje online prisutnosti s minimalnim naporom. Koristeći vaš
                        pripremljeni dizajn, stvaram web stranicu koja odražava vaš brend i identitet.</p>
                </div>
            </div>
        </section>
    )
}
