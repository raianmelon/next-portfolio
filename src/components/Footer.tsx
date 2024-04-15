import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const date = new Date()
    let year = date.getFullYear()

    return (
        <div className={'flex flex-col justify-between items-center gap-16 py-8 px-4 md:px-16 border-t-2 border-t-dark-green'}>
            <div className={'flex flex-wrap justify-between items-center w-full'}>
                <div className={'flex flex-col justify-start items-start gap-5'}>
                    <Link href={'/'} className={'flex justify-center items-center gap-5'}>
                        <Image className={'rounded-full hover:ring-[2.5px] ring-yellow transition-all'} src={'logo.svg'} alt={'Logo Raian Melon'} width={50} height={50} />
                        <span className={'flex text-lg font-bold gap-0.5 group transition-all py-2.5'}><h1 className={'text-yellow  inline-block align-middle group-hover:text-white transition-all'}>Raian</h1><h1 className={'text-white inline-block align-middle group-hover:text-yellow transition-all'}>Melon</h1></span>
                    </Link>
                    <Link className={'flex gap-2 justify-center items-center overflow-hidden'} href={"https://github.com/raianmelon"}><Image src={'/github-mark-white.svg'} alt={'Github'} width={30} height={30}></Image>- Github projekti</Link>
                </div>
                <div>
                    <Link href={'/'} className={'flex justify-center items-center gap-5'}>
                        <Image className={'rounded-full hover:ring-[2.5px] ring-yellow transition-all'} src={'logo.svg'} alt={'Logo Raian Melon'} width={50} height={50} />
                        <span className={'flex text-lg font-bold gap-0.5 group transition-all py-2.5'}><h1 className={'text-yellow  inline-block align-middle group-hover:text-white transition-all'}>Raian</h1><h1 className={'text-white inline-block align-middle group-hover:text-yellow transition-all'}>Melon</h1></span>
                    </Link>
                </div>
                <div>
                    <Link href={'/'} className={'flex justify-center items-center gap-5'}>
                        <Image className={'rounded-full hover:ring-[2.5px] ring-yellow transition-all'} src={'logo.svg'} alt={'Logo Raian Melon'} width={50} height={50} />
                        <span className={'flex text-lg font-bold gap-0.5 group transition-all py-2.5'}><h1 className={'text-yellow  inline-block align-middle group-hover:text-white transition-all'}>Raian</h1><h1 className={'text-white inline-block align-middle group-hover:text-yellow transition-all'}>Melon</h1></span>
                    </Link>
                </div>
            </div>
            <div className={'text-center'}>
                Copyright {year} Raian Melon. All rights reserved
            </div>
        </div>
    )
}