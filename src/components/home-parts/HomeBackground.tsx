export default function HomeBackground() {
    const backgroundStyle = {
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
        <div className={'relative md:absolute -z-30 overflow-hidden shadow-[5px_5px_60px_-20px_yellow]'} style={backgroundStyle}>
            <div className={'w-[calc(100%-65%)] aspect-[1/1] animate-spin rounded-full bg-yellow opacity-20 -z-10 top-0 bottom-0 left-0 right-0 m-auto absolute'} style={{animation: 'ping 2s infinite forwards'}} />
            <div className={'w-[calc(100%-65%)] aspect-[1/1] animate-spin duration-1000 rounded-full bg-background -z-10 absolute top-0 bottom-0 left-0 right-0 m-auto shadow-[inset_5px_5px_60px_-15px_yellow]'} style={{animation: 'spin 2s infinite forwards'}} />
            <div className={'w-[calc(100%-80%)] aspect-[1/1] rounded-full bg-[#000] -z-10 absolute top-0 bottom-0 left-0 right-0 m-auto'} />
        </div>
    )
}