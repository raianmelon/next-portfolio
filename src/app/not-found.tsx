import {FilledButtonWithOutline} from "@/components/Buttons";

export default function NotFound() {
    return (
        <section className={'px-4 md:px-16 xl:px-32 2xl:px-52 pb-10 lg:py-28 flex justify-center items-center flex-col h-screen'}>
            <div className={'text-[8rem] md:text-[12rem] flex justify-center items-center text-yellow'}>
                <h1 className={'pt-10 md:pt-20'}>4</h1>
                <span className={'text-white'}>0</span>
                <h1 className={'pb-10 md:pb-20'}>4</h1>
            </div>
            <p className={'text-xl mdtext-2xl text-center'}>Nažalost, ta stranica ne postoji.</p>
            <FilledButtonWithOutline className={'mt-10'} href="/">Vratite se na početnu</FilledButtonWithOutline>
        </section>
    )
}