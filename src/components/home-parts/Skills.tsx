import Image from "next/image";

export default function Skills() {
    return (
        <section id={'skills'} className={'px-4 md:px-16 xl:px-32 2xl:px-52 py-10'}>
            <div className={'w-full mt-10 lg:mt-20 h-full overflow-hidden'}>
                <div className={'flex gap-10 lg:gap-24 items-center justify-center h-full w-max'}
                     style={{animation: 'infinite-scroll2 30s linear infinite'}}>
                    <div className={'flex gap-10 sm:gap-24 items-center justify-center w-max -z-10'}>
                        <Image src={'/html.png'} alt={'html'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={70}/>
                        <Image src={'/css.png'} alt={'css'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={79}/>
                        <Image src={'/tailwind.png'} alt={'tailwind'} className={'w-[50px] h-auto sm:h-auto sm:w-[70px]'} width={70} height={42}/>
                        <Image src={'/javascript.png'} alt={'javascript'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={70}/>
                        <Image src={'/typescript.png'} alt={'typescript'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={70}/>
                        <Image src={'/node.png'} alt={'node'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={32}/>
                        <Image src={'/svelte.png'} alt={'svelte'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={84}/>
                        <Image src={'/react.png'} alt={'react'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={61}/>
                        <Image src={'/nextjs.svg'} alt={'nextjs'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={70}/>
                        <Image src={'/prisma.png'} alt={'prisma'} className={'h-[50px] w-auto sm:h-[70px] sm:w-auto'} width={100} height={41}/>
                    </div>
                    <div className={'w-max flex gap-10 lg:gap-24 items-center justify-center'}>
                        <Image src={'/html.png'} alt={'html'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={70}/>
                        <Image src={'/css.png'} alt={'css'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={79}/>
                        <Image src={'/tailwind.png'} alt={'tailwind'} className={'w-[50px] h-auto sm:h-auto sm:w-[70px]'} width={70} height={42}/>
                        <Image src={'/javascript.png'} alt={'javascript'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={70}/>
                        <Image src={'/typescript.png'} alt={'typescript'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={70}/>
                        <Image src={'/node.png'} alt={'node'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={32}/>
                        <Image src={'/svelte.png'} alt={'svelte'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={84}/>
                        <Image src={'/react.png'} alt={'react'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={61}/>
                        <Image src={'/nextjs.svg'} alt={'nextjs'} className={'h-[50px] w-auto sm:h-auto sm:w-[70px]'} width={70} height={70}/>
                        <Image src={'/prisma.png'} alt={'prisma'} className={'h-[50px] w-auto sm:h-[70px] sm:w-auto'} width={100} height={41}/>
                    </div>
                </div>
            </div>
        </section>
    )
}