import {FilledButton, FilledButtonWithOutline} from "@/components/Buttons";

export default function Home() {
    const backgroundStyle = {
        // background: `radial-gradient(circle, #ffffff 10%, transparent 12%),
        //          radial-gradient(circle at bottom left, #ffffff 5%, transparent 6%),
        //          radial-gradient(circle at bottom right, #ffffff 5%, transparent 6%),
        //          radial-gradient(circle at top left, #ffffff 5%, transparent 6%),
        //          radial-gradient(circle at top right, #ffffff 5%, transparent 6%)`,
        backgroundSize: '2em 2em',
        opacity: 0.3,

        width: 'clamp(300px, calc(100vw - 200px), 1000px)',
        maxHeight: 'calc(100vh - 200px)',
        aspectRatio: '1.3/1',

        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
    }

  return (
      <>
          <div className={'overflow-show md:overflow-hidden flex flex-col gap-10 justify-around md:justify-center items-center text-center min-h-[100dvh] pt-20 relative'}>
              <div className={'flex flex-col justify-center items-center gap-10 md:gap-16'}>
                  <div className={'flex flex-col justify-center items-center gap-4 md:gap-8'}>
                      <h1 className={'text-4xl md:text-6xl font-semibold opacity-0 inline-block translate-y-full'} style={{animation: 'popupword 0.5s forwards', animationDelay: `200ms`}}>Vaša vizija<span className={'text-yellow font-extrabold text-3xl md:text-7xl'}>,</span> moja stručnost<span className={'text-yellow font-extrabold text-3xl md:text-7xl'}>.</span></h1>
                      <p className={'text-sm md:text-lg font-light opacity-0 inline-block translate-y-full'} style={{animation: 'popupword 0.5s forwards', animationDelay: `300ms`}}>Transformiram vaše ideje u web stranice.</p>
                  </div>
                  <FilledButton href={'#kontakt'} className={'md:text-lg px-6 py-2 opacity-0 inline-block translate-y-full'} style={{animation: 'popupword 0.5s forwards', animationDelay: `400ms`}}>Započnite svoj projekt</FilledButton>
              </div>
              <div className={'relative md:absolute -z-30 overflow-hidden shadow-[5px_5px_60px_-20px_yellow]'} style={backgroundStyle}>
                  <div className={'w-[calc(100%-65%)] aspect-[1/1] animate-spin rounded-full bg-yellow opacity-20 -z-10 top-0 bottom-0 left-0 right-0 m-auto absolute'} style={{animation: 'ping 2s infinite forwards'}} />
                  <div className={'w-[calc(100%-65%)] aspect-[1/1] animate-spin duration-1000 rounded-full bg-[#000d09] -z-10 absolute top-0 bottom-0 left-0 right-0 m-auto shadow-[inset_5px_5px_60px_-15px_yellow]'} style={{animation: 'spin 2s infinite forwards'}} />
                  <div className={'w-[calc(100%-80%)] aspect-[1/1] rounded-full bg-[#000] -z-10 absolute top-0 bottom-0 left-0 right-0 m-auto'} />
              </div>
          </div>
          <div>

          </div>
      </>

  );
}
