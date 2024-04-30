import Image from "next/image";
import {AnimatedElement} from "@/components/AnimatedElement";

export default function Skills() {
    return (
        <section id={'skills'} className={'px-4 md:px-16 xl:px-32 2xl:px-52 py-10 lg:py-28'}>
            <AnimatedElement className={'w-full mt-10 lg:mt-20 h-full overflow-hidden'}>
                <div className={'flex gap-10 lg:gap-24 items-center justify-center h-full w-max'}
                     style={{animation: 'infinite-scroll2 30s linear infinite'}}>
                    <div className={'flex gap-10 lg:gap-24 items-center justify-center w-max -z-10'}>
                        <Image src={'/html.png'} alt={'html'} width={70} height={70}/>
                        <Image src={'/css.png'} alt={'css'} width={70} height={79}/>
                        <Image src={'/tailwind.png'} alt={'tailwind'} width={70} height={42}/>
                        <Image src={'/javascript.png'} alt={'javascript'} width={70} height={70}/>
                        <Image src={'/typescript.png'} alt={'typescript'} width={70} height={70}/>
                        <Image src={'/node.png'} alt={'node'} width={70} height={32}/>
                        <Image src={'/svelte.png'} alt={'svelte'} width={70} height={84}/>
                        <Image src={'/react.png'} alt={'react'} width={70} height={61}/>
                        <Image src={'/nextjs.svg'} alt={'nextjs'} width={70} height={70}/>
                        <Image src={'/prisma.png'} alt={'prisma'} width={100} height={41}/>
                    </div>
                    <div className={'w-max flex gap-10 lg:gap-24 items-center justify-center'}>
                        <Image src={'/html.png'} alt={'html'} width={70} height={70}/>
                        <Image src={'/css.png'} alt={'css'} width={70} height={79}/>
                        <Image src={'/tailwind.png'} alt={'tailwind'} width={70} height={42}/>
                        <Image src={'/javascript.png'} alt={'javascript'} width={70} height={70}/>
                        <Image src={'/typescript.png'} alt={'typescript'} width={70} height={70}/>
                        <Image src={'/node.png'} alt={'node'} width={70} height={32}/>
                        <Image src={'/svelte.png'} alt={'svelte'} width={70} height={84}/>
                        <Image src={'/react.png'} alt={'react'} width={70} height={61}/>
                        <Image src={'/nextjs.svg'} alt={'nextjs'} width={70} height={70}/>
                        <Image src={'/prisma.png'} alt={'prisma'} width={100} height={41}/>
                    </div>
                </div>
            </AnimatedElement>
        </section>
    )
}