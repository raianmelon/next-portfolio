import {FilledButton} from "@/components/Buttons";
import HomeBackground from "@/components/home-parts/HomeBackground";
import AnimatedScrollIcon from "@/components/home-parts/AnimatedScrollIcon";

export default function Hero() {
    return (
        <section id={'home'}
                 className={'px-4 md:px-16 overflow-show md:overflow-hidden flex flex-col gap-10 justify-around md:justify-center items-center text-center h-[calc(100vh-50px)] md:h-[100vh] pt-20 relative'}>
            <div className={'flex flex-col justify-center items-center gap-10 md:gap-16'}>
                <div className={'flex flex-col justify-center items-center gap-4 md:gap-8'}>
                    <h1 className={'text-4xl md:text-6xl font-semibold opacity-0 inline-block translate-y-full'}
                        style={{animation: 'popupword 0.5s forwards', animationDelay: `200ms`}}>
                        Vaša vizija
                        <span className={'text-yellow font-extrabold text-3xl md:text-7xl'}>, </span>
                        moja stručnost
                        <span className={'text-yellow font-extrabold text-3xl md:text-7xl'}>.</span>
                    </h1>
                    <p className={'text-sm md:text-lg font-light opacity-0 inline-block translate-y-full'}
                       style={{animation: 'popupword 0.5s forwards', animationDelay: `300ms`}}>Transformiram vaše
                        ideje u web stranice.</p>
                </div>
                <FilledButton href={'#contact'}
                              className={'md:text-lg px-6 py-2 opacity-0 inline-block translate-y-full'}
                              style={{animation: 'popupword 0.5s forwards', animationDelay: `400ms`}}>Započnite svoj
                    projekt</FilledButton>
            </div>
            <HomeBackground/>
            <AnimatedScrollIcon/>
        </section>
    )
}