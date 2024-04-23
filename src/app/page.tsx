import {FilledButton} from "@/components/Buttons";
import AnimatedScrollIcon from "@/components/AnimatedScrollIcon";
import HomeBackground from "@/components/HomeBackground";
import InfiniteScroll from "@/components/InfiniteScroll";
import Link from "next/link";
import Image from "next/image";
import {Dot, Github, Mail, PencilLine, Phone, ShoppingBasket, SquareArrowOutUpRight, Wrench} from "lucide-react";

export default function Home() {

  return (
      <>
          <section id={'home'} className={'px-4 md:px-16 overflow-show md:overflow-hidden flex flex-col gap-10 justify-around md:justify-center items-center text-center h-[calc(100vh-50px)] md:h-[100vh] pt-20 relative'} >
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
          <section id={'projects'} className={'px-4 md:px-16 pt-20 lg:pt-32 lg:px-52'}>
              <h1 className={'w-full text-3xl text-center mb-20 lg:mb-20'}>Izdvojeni projekti</h1>
              <div className={'flex lg:flex-row flex-col justify-between gap-20 lg:gap-0 items-start'}>
                  <div className={'flex flex-col justify-start items-start gap-7 lg:p-4 w-full lg:max-w-[40%]'}>
                      <Link target={'_blank'} className={'w-full'} href={'https://vrijeme.raianmelon.com/'}>
                          <Image src={'/weather-project.png'}
                                 className={'opacity-50 hover:opacity-100 transition-all duration-300 rounded-xl w-full'}
                                 alt={'Vrijeme projekt'} width={500} height={200}/>
                      </Link>
                      <div className={''}>
                          <h1 className={'text-2xl relative group'}>
                              <Link target={'_blank'}
                                    href={'https://vrijeme.raianmelon.com/'}>Vrijeme</Link>
                              <Link target={'_blank'} className={'text-sm text-yellow absolute'}
                                    href={'https://vrijeme.raianmelon.com/'}>
                                  <SquareArrowOutUpRight className={'text-yellow absolute -right-5 top-0'} size={16}/>
                                  <p className={'text-yellow absolute -right-5 pl-1 -top-0.5 opacity-0 group-hover:opacity-100 translate-x-2/3 group-hover:translate-x-full translate-all duration-300'}>vrijeme.raianmelon.com</p>
                              </Link>
                          </h1>
                      </div>
                      <h1>Web aplikacija koja pomoću lokacije uredaja ili pretraživanja može pratiti temperaturu, vrstu
                          oblaka i brzinu vjetra za bilo koji grad iz Svijeta!</h1>
                      <FilledButton className={'flex gap-3 py-2'} target={'_blank'}
                                    href={'https://github.com/raianmelon/Vrijeme/'}><Github/> Pogledajte
                          Kod</FilledButton>
                  </div>
                  <div className={'flex flex-col justify-start items-start gap-7 lg:p-4 w-full lg:max-w-[40%]'}>
                      <Link target={'_blank'} className={'w-full'}  href={'https://trgovina.raianmelon.com/'}>
                          <Image src={'/shop-project.png'}
                                 className={'opacity-50 hover:opacity-100 w-full transition-all duration-300 rounded-xl'}
                                 alt={'Trgovina projekt'} width={600} height={400}/>
                      </Link>
                      <div className={''}>
                          <h1 className={'text-2xl relative group'}>
                              <Link target={'_blank'}
                                    href={'https://trgovina.raianmelon.com/'}>Trgovina</Link>
                              <Link target={'_blank'} className={'text-sm text-yellow absolute'}
                                    href={'https://trgovina.raianmelon.com/'}>
                                  <SquareArrowOutUpRight className={'text-yellow absolute -right-5 top-0'} size={16}/>
                                  <p className={'text-yellow absolute -right-5 pl-1 -top-0.5 opacity-0 group-hover:opacity-100 translate-x-2/3 group-hover:translate-x-full translate-all duration-300'}>trgovina.raianmelon.com</p>
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
          <section id={'services'} className={'px-4 md:px-16 lg:px-52 pt-20 lg:pt-32'}>
              <h1 className={'text-3xl mb-20 lg:mb-20 text-center'}>Usluge</h1>
              <div className={'flex lg:flex-row flex-col gap-10 lg:gap-0 justify-between'}>
                  <div
                      className={'w-full lg:max-w-[25%] h-fit rounded-xl bg-yellow bg-opacity-80 text-black px-6 py-8 flex flex-col gap-10 justify-center items-center'}>
                      <div className={'flex flex-col gap-5 justify-center items-center'}>
                          <PencilLine size={40}/>
                          <h1 className={'text-2xl font-bold'}>Blog</h1>
                      </div>
                      <p className={'text-md leading-8'}>Nudim kvalitetnu izradu blog web stranica prilagođenih vašem sadržaju, s elegantnim dizajnom i optimizacijom za pretraživače, pomažući vam u izgradnji vjerne publike i autoriteta u vašoj mjeri.</p>
                  </div>
                  <div
                      className={'w-full lg:max-w-[30%] rounded-xl bg-yellow text-black px-6 py-8 flex flex-col gap-10 justify-center items-center'}>
                      <div className={'flex flex-col gap-5 justify-center items-center'}>
                          <ShoppingBasket size={50}/>
                          <h1 className={'text-2xl font-bold'}>Web Shop</h1>
                      </div>
                      <p className={'text-md leading-8'}>Nudim potpunu uslugu izrade webshopova prilagođenih vašem brendu, s naglaskom na personaliziranom dizajnu, intuitivnoj funkcionalnosti, optimizaciji za pretraživače te kontinuiranoj podršci i održavanju, osiguravajući vam konkurentsku prednost i uspjeh na digitalnom tržištu.</p>
                  </div>
                  <div
                      className={'w-full lg:max-w-[25%] h-fit rounded-xl bg-opacity-80 shadow-gray bg-yellow text-black px-6 py-8 flex flex-col gap-10 justify-center items-center'}>
                      <div className={'flex flex-col gap-5 justify-center items-center'}>
                          <Wrench size={40}/>
                          <h1 className={'text-2xl font-bold'}>Prilagođena Web Stranica</h1>
                      </div>
                      <p className={'text-md leading-8'}>Nudim izradu prilagođenih web stranica, odražavajući vaše potrebe i estetiku, uz naglasak na funkcionalnosti i korisničkom iskustvu, kako biste ostvarili svoje poslovne ciljeve na webu.</p>
                  </div>
              </div>
          </section>
          <section id={'skills'} className={'px-4 md:px-16 lg:px-52 py-20 lg:py-32'}>
              <h1 className={'text-3xl'}>Moje Vještine</h1>
              <div className={'w-full mt-20 h-full overflow-hidden'}>
                  <div className={'flex gap-10 lg:gap-24 items-center justify-center h-full w-max'}
                       style={{animation: 'infinite-scroll2 30s linear infinite'}}>
                      <div className={'flex gap-10 lg:gap-24 items-center justify-center w-max -z-10'}>
                          <Image src={'/html.png'} alt={'html'} width={70} height={70} />
                          <Image src={'/css.png'} alt={'css'} width={70} height={79} />
                          <Image src={'/tailwind.png'} alt={'tailwind'} width={70} height={42} />
                          <Image src={'/javascript.png'} alt={'javascript'} width={70} height={70} />
                          <Image src={'/node.png'} alt={'node'} width={70} height={32} />
                          <Image src={'/svelte.png'} alt={'svelte'} width={70} height={84} />
                          <Image src={'/react.png'} alt={'react'} width={70} height={61} />
                          <Image src={'/nextjs.svg'} alt={'nextjs'} width={70} height={70} />
                          <Image src={'/prisma.png'} alt={'prisma'} width={100} height={41} />
                      </div>
                      <div className={'w-max flex gap-10 lg:gap-24 items-center justify-center'}>
                          <Image src={'/html.png'} alt={'html'} width={70} height={70} />
                          <Image src={'/css.png'} alt={'css'} width={70} height={79} />
                          <Image src={'/tailwind.png'} alt={'tailwind'} width={70} height={42} />
                          <Image src={'/javascript.png'} alt={'javascript'} width={70} height={70} />
                          <Image src={'/node.png'} alt={'node'} width={70} height={32} />
                          <Image src={'/svelte.png'} alt={'svelte'} width={70} height={84} />
                          <Image src={'/react.png'} alt={'react'} width={70} height={61} />
                          <Image src={'/nextjs.svg'} alt={'nextjs'} width={70} height={70} />
                          <Image src={'/prisma.png'} alt={'prisma'} width={100} height={41} />
                      </div>
                  </div>
              </div>
          </section>
          <section id={'contact'} className={'px-4 md:px-16 lg:px-52 pt-20 lg:pt-28'}>
              <h1 className={'text-3xl lg:text-center w-full mb-10'}>Kontaktirajte me</h1>
              <form className={'flex items-start lg:flex-row flex-col justify-between'}>
                  <div className={'flex flex-col gap-5 justify-start items-start my-10'}>
                      <h1 className={'text-xl'}>Raian Melon</h1>
                      <Link target={'_blank'} href={'mailto:raianmelon11@gmail.com'}
                            className={'text-white hover:text-yellow font-light transition-all flex gap-4 justify-center items-center'}><Mail
                          size={30} color={'#FED700'}/>raianmelon11@gmail.com</Link>
                      <Link target={'_blank'} href={'tel:+385919810766'}
                            className={'text-white hover:text-yellow font-light transition-all flex gap-4 justify-center items-center'}><Phone
                          size={30} color={'#FED700'}/> +385 91 981 0766</Link>
                  </div>
                  <div className={'flex flex-col gap-10 justify-start items-start my-10 w-full lg:w-[45%]'}>
                      <div className={'flex gap-5 w-full'}>
                          <input
                              className={'w-1/2 text-white bg-background border-b-2 border-white px-2 py-2 outline-0 focus:border-yellow transition-all'}
                               placeholder={'Ime'} type="text"/>
                          <input
                              className={'w-1/2 text-white bg-background border-b-2 border-white px-2 py-2 outline-0 focus:border-yellow transition-all'}
                              placeholder={'Prezime'} type="text"/>
                      </div>
                      <input
                          className={'text-white bg-background border-b-2 border-white px-2 py-2 outline-0 focus:border-yellow transition-all w-full'}
                          placeholder={'E-mail'} type="email"/>
                      <input
                          className={'text-white bg-background border-b-2 border-white px-2 py-2 outline-0 focus:border-yellow transition-all w-full'} placeholder={'Tema E-maila'} type="text"/>
                      <textarea className={'h-32 text-white bg-background border-2 border-white px-4 py-2 outline-0 focus:border-yellow transition-all w-full rounded-md'} placeholder={'Poruka'}/>
                      <FilledButton className={'w-full text-center py-3'} href={''}>Pošalji E-mail</FilledButton>
                  </div>
              </form>
          </section>
      </>
  );
}
