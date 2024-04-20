'use client'
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function AnimatedScrollIcon() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreenSize();

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            {isLargeScreen ? (
                <div className={'hidden lg:inline-block opacity-0 absolute border-white w-12 h-20 rounded-full border-4 bottom-24 after:content-[""] after:w-1 after:h-5 after:rounded-full after:absolute after:-top-6 after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-white mouse-animation translate-y-full'} style={{animation: 'popupword-15 0.5s forwards'}} />
            ) : (
                <div className={'flex lg:hidden opacity-50 absolute bottom-10 right-0 justify-center items-center flex-col'}>
                    <ChevronDown size={40} color={'#FFFFFF80'} className={'absolute translate-y-1/2 right-0'} style={{animation: 'up-down-slide 2s infinite'}}/>
                    <ChevronDown size={40} className={'absolute -translate-y-1/3 right-0'} />
                </div>
            )}
        </>
    );
}