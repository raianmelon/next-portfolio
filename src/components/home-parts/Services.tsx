"use client"
import {AppWindow, ArrowLeft, ArrowRight, MonitorSmartphone, Paintbrush} from "lucide-react";
import {AnimatedHeading} from "@/components/AnimatedElement";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
import {FilledButtonWithOutline} from "@/components/Buttons";

export default function Services() {
    return (
        <section id={'services'} className={'px-4 md:px-16 xl:px-32 2xl:px-52 pt-20 lg:pt-32'}>
            <div className={'flex justify-between items-center mb-10 lg:mb-20'}>
                <AnimatedHeading className={'text-3xl'}>Usluge</AnimatedHeading>
                <div className={'flex justify-center items-center gap-4'}>
                    <ArrowLeft className="arrow-left cursor-pointer tranisiton-all duration-150 hover:opacity-50" />
                    <ArrowRight className="arrow-right cursor-pointer tranisiton-all duration-150 hover:opacity-50" />
                </div>
            </div>
            <Swiper
                spaceBetween={100}
                navigation={{nextEl: ".arrow-right", prevEl: ".arrow-left"}}
                grabCursor={true}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className={'flex lg:flex-row flex-col justify-between items-start gap-10 lg:gap-20'}>
                        <div
                            className={'w-full lg:max-w-[50%] rounded-xl py-8 flex flex-col gap-10 justify-start items-start'}>
                            <div className={'flex flex-col gap-5 justify-start items-start'}>
                                <MonitorSmartphone color={'#FED700'} size={50} strokeWidth={1.2}/>
                                <h1 className={'text-2xl text-center'}>Web stranica + Web Dizajn</h1>
                            </div>
                            <p className={'text-md font-light leading-8'}>Moja usluga izrade web stranica i dizajna
                                kombinira stručnost
                                u
                                dizajnu i tehnologiji kako bi stvorila online prisutnost koja vas ističe u digitalnom
                                svijetu.
                                Svaka stranica koju kreiram je prilagođena vašim potrebama i brendu, s fokusom na
                                responsivni
                                dizajn, SEO optimizaciji i korisničkom iskustvu. Kontaktirajte me i dopustite mi da vašu
                                viziju
                                pretvorimo u stvarnost na webu.</p>
                            <FilledButtonWithOutline href={'#contact'}>Pošaljite upit</FilledButtonWithOutline>
                        </div>
                        <div className={'w-full lg:w-1/2'}>
                            <Image className={'rounded-md'} src={'/design-code.png'} alt={'Web stranica i dizajn'} width={828} height={447}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'flex lg:flex-row flex-col justify-between items-start gap-10 lg:gap-20'}>
                        <div
                            className={'w-full lg:max-w-[50%] rounded-xl py-8 flex flex-col gap-10 justify-start items-start'}>
                            <div className={'flex flex-col gap-5 justify-start items-start'}>
                                <Paintbrush color={'#FED700'} size={40} strokeWidth={1.2}/>
                                <h1 className={'text-2xl text-center'}>Web dizajn</h1>
                            </div>
                            <p className={'text-md font-light leading-8'}>
                                Nudim vrhunsko korisničko iskustvo za vašu web stranicu, bez obzira na to je li riječ o
                                personaliziranoj web lokaciji ili e-trgovini. Moja stručnost u dizajnu korisničkog
                                sučelja i
                                iskustva (UI/UX) osigurava intuitivnost, privlačnost i prilagođenost vašim
                                ciljevima.</p>
                            <FilledButtonWithOutline href={'#contact'}>Pošaljite upit</FilledButtonWithOutline>
                        </div>
                        <div className={'w-full lg:w-1/2'}>
                            <Image className={'rounded-md'} src={'/design.png'} alt={'Samo dizajn'}
                                   width={828} height={447}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'flex lg:flex-row flex-col justify-between items-start gap-10 lg:gap-20'}>
                        <div
                            className={'w-full lg:max-w-[50%] rounded-xl py-8 flex flex-col gap-10 justify-start items-start'}>
                            <div className={'flex flex-col gap-5 justify-start items-start'}>
                                <AppWindow color={'#FED700'} size={40} strokeWidth={1.2}/>
                                <h1 className={'text-2xl text-center'}>Web stranica</h1>
                            </div>
                            <p className={'text-md font-light leading-8'}>Moj usluga izrade web stranica s pripremljenim
                                dizajnom
                                korisnika
                                omogućuje vam brzo pokretanje online prisutnosti s minimalnim naporom. Koristeći vaš
                                pripremljeni dizajn, stvaram web stranicu koja odražava vaš brend i identitet.</p>
                            <FilledButtonWithOutline href={'#contact'}>Pošaljite upit</FilledButtonWithOutline>

                        </div>
                        <div className={'w-full lg:w-1/2'}>
                            <Image className={'rounded-md'} src={'/coding.png'} alt={'Samo web stranica'}
                                   width={828} height={447}/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
)
}
