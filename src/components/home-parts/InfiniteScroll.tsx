    import {Dot} from "lucide-react";

export default function InfiniteScroll() {
    return (
        <section className={'px-4 md:px-10 lg:px-20 text-black text-lg lg:text-xl h-20 w-full bg-yellow opacity-80'}>
            <div className={'w-full h-full overflow-hidden'}>
                <div className={'flex gap-5 items-center justify-center h-full w-max'} style={{animation: 'infinite-scroll 40s linear forwards', animationTimeline: 'scroll(root)'}}>
                    <div className={'flex gap-5 items-center justify-center w-max -z-10'}>
                        <Dot size={70} color={'#000'} />
                        <p>Blogovi</p>
                        <Dot size={70} color={'#000'} />
                        <p>Portfolio Stranice</p>
                        <Dot size={70} color={'#000'} />
                        <p>Web Stranice</p>
                        <Dot size={70} color={'#000'} />
                        <p>Web Aplikacije</p>
                        <Dot size={70} color={'#000'} />
                        <p>Web Shopovi</p>
                        <Dot size={70} color={'#000'} />
                        <p>Web Alati</p>
                        <Dot size={70} color={'#000'} />
                        <p>Online Platforme</p>
                        <Dot size={70} color={'#000'} />
                        <p>Prilagođene Aplikacije</p>
                    </div>
                    <div className={'w-max flex gap-5 items-center justify-center'}>
                        <Dot size={70} color={'#000'} />
                        <p>Blogovi</p>
                        <Dot size={70} color={'#000'} />
                        <p>Portfolio Stranice</p>
                        <Dot size={70} color={'#000'} />
                        <p>Web Stranice</p>
                        <Dot size={70} color={'#000'} />
                        <p>Web Aplikacije</p>
                        <Dot size={70} color={'#000'} />
                        <p>Web Shopovi</p>
                        <Dot size={70} color={'#000'} />
                        <p>Web Alati</p>
                        <Dot size={70} color={'#000'} />
                        <p>Online Platforme</p>
                        <Dot size={70} color={'#000'} />
                        <p>Prilagođene Aplikacije</p>
                    </div>
                </div>
            </div>
        </section>
    )
}