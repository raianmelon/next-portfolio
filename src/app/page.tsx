import {FilledButton} from "@/components/Buttons";
import AnimatedScrollIcon from "@/components/AnimatedScrollIcon";
import HomeBackground from "@/components/HomeBackground";
import InfiniteScroll from "@/components/InfiniteScroll";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
      <>
          <section className={'px-4 md:px-16 overflow-show md:overflow-hidden flex flex-col gap-10 justify-around md:justify-center items-center text-center h-[calc(100vh-50px)] md:h-[100vh] pt-20 relative'}>
              <div className={'flex flex-col justify-center items-center gap-10 md:gap-16'}>
                  <div className={'flex flex-col justify-center items-center gap-4 md:gap-8'}>
                      <h1 className={'text-4xl md:text-6xl font-semibold opacity-0 inline-block translate-y-full'} style={{animation: 'popupword 0.5s forwards', animationDelay: `200ms`}}>
                          Vaša vizija
                          <span className={'text-yellow font-extrabold text-3xl md:text-7xl'}>, </span>
                          moja stručnost
                          <span className={'text-yellow font-extrabold text-3xl md:text-7xl'}>.</span>
                      </h1>
                      <p className={'text-sm md:text-lg font-light opacity-0 inline-block translate-y-full'} style={{animation: 'popupword 0.5s forwards', animationDelay: `300ms`}}>Transformiram vaše ideje u web stranice.</p>
                  </div>
                  <FilledButton href={'#kontakt'} className={'md:text-lg px-6 py-2 opacity-0 inline-block translate-y-full'} style={{animation: 'popupword 0.5s forwards', animationDelay: `400ms`}}>Započnite svoj projekt</FilledButton>
              </div>
              <HomeBackground />
              <AnimatedScrollIcon/>
          </section>
          <InfiniteScroll/>
          <section className={'px-4 md:px-16'}>
              <h1 className={'w-full text-3xl text-center my-20'}>Izdvojeni projekti</h1>
              <div className={'flex justify-around items-center'}>
                  <div className={'flex flex-col justify-start items-start gap-5 p-4 max-w-[33%]'}>
                      <Link target={'_blank'} href={'https://weather-w93p-raianmlns-projects.vercel.app/'} >
                          <Image src={'/weather-project.png'} className={'opacity-50 hover:opacity-100 transition-all duration-300 rounded-xl'} alt={'Vrijeme projekt'} width={500} height={200} />
                      </Link>
                      <h1>Vrijeme</h1>
                      <h1>Web aplikacija za pracenje temperature, vrstu oblaka i brzinu vjetra za bilo koji grad iz Svijeta!</h1>
                  </div>
                  <div className={'flex flex-col justify-start items-start gap-5 p-4'}>
                      <Link target={'_blank'} href={'https://weather-w93p-raianmlns-projects.vercel.app/'} >
                          <Image src={'/weather-project.png'} className={'opacity-50 hover:opacity-100 transition-all duration-300 rounded-xl'} alt={'Vrijeme projekt'} width={500} height={200} />
                      </Link>
                      <h1>Vrijeme</h1>
                  </div>
              </div>
          </section>
          <section className={'h-[100vh]'}>
              <h1>Da</h1>
          </section>
          <section className={'h-[100vh]'}>
              <h1>Da</h1>
          </section>
      </>
  );
}
