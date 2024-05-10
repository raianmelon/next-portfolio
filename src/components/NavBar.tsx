'use client'
import Image from "next/image";
import Link from "next/link";
import {FilledButtonWithOutline} from "@/components/Buttons";
import {useEffect, useState} from 'react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpenWithNoDelay, setIsMenuOpenWithNoDelay] = useState(false);
    const [opacity, setOpacity] = useState(0)
    const [activeSection, setActiveSection] = useState<string>('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 300; // Adjust this value for better accuracy

        sections.forEach((section) => {
            //@ts-ignore
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                let sectionName = `/#${String(section.id)}`
                setActiveSection(sectionName)
            }
        });
    };

    useEffect(() => {
        handleScroll()

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [activeSection]);

    useEffect(() => {
        window.addEventListener('load', handleScroll);
        window.removeEventListener('load', handleScroll)
    })


    const links = [
        {
            id: 1,
            text: "Početna",
            link: "/#home"
        },
        {
            id: 2,
            text: "Projekti",
            link: "/#projects"
        },
        {
            id: 3,
            text: "Usluge",
            link: "/#services"
        },
        {
            id: 4,
            text: "Vještine",
            link: "/#skills"
        },
        {
            id: 5,
            variant: "filled",
            text: "Kontakt",
            link: "/#contact"
        },
    ];


    const toggleMenu = () => {
        if(isMenuOpen) {
            setOpacity(0)
            setIsMenuOpenWithNoDelay(!isMenuOpen)
            return setTimeout(() => {
                setIsMenuOpen(!isMenuOpen);
            }, 300)
        } else {
            setIsMenuOpen(!isMenuOpen);
            setIsMenuOpenWithNoDelay(!isMenuOpen)
            setOpacity(100)
        }
    };

    const handleResize = () => {
        if (window.innerWidth >= 1023) {
            setIsMenuOpenWithNoDelay(false);
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpenWithNoDelay) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
    }, [isMenuOpen])

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        <nav className={'fixed top-0 z-50 w-full px-4 md:px-16 py-4 flex justify-between items-center border-b-2 border-b-dark-green border-opacity-95 backdrop-blur-sm bg-background bg-opacity-95'}>
            <Link href={'/#home'} onClick={() => {
                setIsMenuOpen(false)
                setIsMenuOpenWithNoDelay(false)
            }} className={'flex justify-center items-center gap-5'}>
                <Image className={'rounded-full hover:ring-[2.5px] ring-yellow transition-all'} src={'logo.svg'} alt={'Logo Raian Melon'} width={50} height={50} />
                <span className={'flex text-lg font-bold gap-0.5 group transition-all py-2.5'}><h1 className={'text-yellow inline-block align-middle group-hover:text-white transition-all'}>Raian</h1><h1 className={'text-white inline-block align-middle group-hover:text-yellow transition-all'}>Melon</h1></span>
            </Link>

            <button onClick={toggleMenu} className={'lg:hidden'}>
                {isMenuOpenWithNoDelay ? (
                    <div className={'h-[50px] transition-all relative flex flex-col items-end m-auto justify-center overflow-x-hidden'}>
                        <div className={'w-[40px] h-[3px] bg-white rounded-xl transition-all mb-0 translate-y-[3px] rotate-45'}/>
                        <div className={'w-[40px] h-[3px] bg-white rounded-xl transition-all mb-0 -rotate-45'}/>
                        <div className={'w-[40px] h-[3px] bg-white rounded-xl transition-all translate-x-full translate-y-[10px]'}/>
                    </div>
                ) : (
                    <div className={'h-[50px] relative transition-all flex flex-col justify-center items-end'}>
                        <div className={'w-[40px] h-[3px] bg-white rounded-xl transition-all mb-2'}/>
                        <div className={'w-[40px] h-[3px] bg-yellow rounded-xl transition-all mb-2'}/>
                        <div className={'w-[20px] h-[3px] bg-white rounded-xl transition-all'}/>
                    </div>
                )}
            </button>

            <div className={`hidden lg:flex gap-10 items-center`}>
                {links.map(({id, link, text, variant}) => (
                    !variant ? (
                        <NavButton className={ activeSection === link ? 'after:content-[""] after:block relative after:absolute after:-bottom-2 after:left-0 after:w-full after:transition-all after:duration-500 after:h-0.5 after:bg-yellow' : '' } key={id} href={link}>{text}</NavButton>
                    ) : variant === 'filled' ? (
                        <FilledButtonWithOutline className={ activeSection === link ? 'bg-yellow text-black ml-5' : 'ml-5' } key={id} href={link}>{text}</FilledButtonWithOutline>
                    ) : null
                ))}
            </div>
        </nav>
        {isMenuOpen && (
            <div className={`fixed top-0 flex flex-col gap-10 z-10 bg-background items-center justify-center text-xl py-20 mb-40 transition-opacity duration-500 w-screen h-[100dvh]`} style={{opacity}}>
                {links.map(({id, link, text, variant}) => (
                    !variant ? (
                        <div key={id}>
                            <NavButton href={link} onClick={toggleMenu} className={'opacity-0 translate-y-full inline-block'} style={{animation: 'popupword 0.5s forwards', animationDelay: `${(id-1)*100}ms`}}>{text}</NavButton>
                        </div>
                    ) : variant === 'filled' ? (
                            <FilledButtonWithOutline key={id} href={link} onClick={toggleMenu} className={'opacity-0 translate-y-full inline-block px-6 py-3'} style={{animation: 'popupword 0.5s forwards', animationDelay: `${(id-1)*100}ms`}}>{text}</FilledButtonWithOutline>
                    ) : null
                ))}
                    <Link className={'absolute bottom-4 left-0 text-6xl px-4 pb-4 opacity-0 translate-y-full inline-block'} href={"https://github.com/raianmelon"} style={{animation: 'popupword 0.5s forwards', animationDelay: `${(6)*100}ms`}}><Image src={'/github-mark-white.svg'} alt={'Github'} width={50} height={50}></Image></Link>
            </div>
        )}
    </>
    )
}
export function NavButton ({children, href, target, className, style, onClick}: {children: React.ReactNode, href: string, target?: string, className?: string, style?:object , onClick?: any}) {
    return (
        <Link href={href} target={target} onClick={onClick} className={`after:content-[""] text-white after:block relative after:absolute after:-bottom-2 after:w-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 after:h-0.5 after:bg-yellow ${className}`} style={style}>{children}</Link>
    )
}