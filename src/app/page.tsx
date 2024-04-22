import {FilledButton} from "@/components/Buttons";
import AnimatedScrollIcon from "@/components/AnimatedScrollIcon";
import HomeBackground from "@/components/HomeBackground";
import InfiniteScroll from "@/components/InfiniteScroll";
import Link from "next/link";
import Image from "next/image";
import {Github, SquareArrowOutUpRight} from "lucide-react";

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
              <div className={'flex justify-around items-start'}>
                  <div className={'flex flex-col justify-start items-start gap-7 p-4 max-w-[33%]'}>
                      <Link target={'_blank'} href={'https://weather-w93p-raianmlns-projects.vercel.app/'}>
                          <Image src={'/weather-project.png'}
                                 className={'opacity-50 hover:opacity-100 transition-all duration-300 rounded-xl'}
                                 alt={'Vrijeme projekt'} width={500} height={200}/>
                      </Link>
                      <div className={''}>
                          <h1 className={'text-2xl relative group'}>
                              <Link target={'_blank'}
                                    href={'https://weather-w93p-raianmlns-projects.vercel.app/'}>Vrijeme</Link>
                              <Link target={'_blank'} className={'text-sm text-yellow absolute'}
                                    href={'https://weather-w93p-raianmlns-projects.vercel.app/'}>
                                  <SquareArrowOutUpRight className={'text-yellow absolute -right-5 top-0'} size={16}/>
                                  <p className={'text-yellow absolute -right-5 pl-1 -top-0.5 opacity-0 group-hover:opacity-100 translate-x-2/3 group-hover:translate-x-full translate-all duration-300'}>vrijeme.tk</p>
                              </Link>
                          </h1>
                      </div>
                      <h1>Web aplikacija koja pomoću lokacije uredaja ili pretraživanja može pratiti temperaturu, vrstu
                          oblaka i brzinu vjetra za bilo koji grad iz Svijeta!</h1>
                      <FilledButton className={'flex gap-3 py-2'} target={'_blank'}
                                    href={'https://github.com/raianmelon/Vrijeme/'}><Github/> Pogledajte
                          Kod</FilledButton>
                  </div>
                  <div className={'flex flex-col justify-start items-start gap-7 p-4 max-w-[33%]'}>
                      <Link target={'_blank'} href={'https://trgovina-vtlf-git-master-raianmlns-projects.vercel.app/'}>
                          <Image src={'/shop-project.png'}
                                 className={'opacity-50 hover:opacity-100 transition-all duration-300 rounded-xl'}
                                 alt={'Trgovina projekt'} width={600} height={400}/>
                      </Link>
                      <div className={''}>
                          <h1 className={'text-2xl relative group'}>
                              <Link target={'_blank'}
                                    href={'https://trgovina-vtlf-git-master-raianmlns-projects.vercel.app/'}>Trgovina</Link>
                              <Link target={'_blank'} className={'text-sm text-yellow absolute'}
                                    href={'https://trgovina-vtlf-git-master-raianmlns-projects.vercel.app/'}>
                                  <SquareArrowOutUpRight className={'text-yellow absolute -right-5 top-0'} size={16}/>
                                  <p className={'text-yellow absolute -right-5 pl-1 -top-0.5 opacity-0 group-hover:opacity-100 translate-x-2/3 group-hover:translate-x-full translate-all duration-300'}>trgovina.tk</p>
                              </Link>
                          </h1>
                      </div>
                      <h1>Web aplikacija u kojoj možete dodati novi proizvod u trgovinu. izmjeniti ime, cjenu, opis i sliku proizvoda.</h1>
                      <FilledButton className={'flex gap-3 py-2'} target={'_blank'}
                                    href={'https://github.com/raianmelon/Trgovina'}><Github/> Pogledajte
                          Kod</FilledButton>
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
