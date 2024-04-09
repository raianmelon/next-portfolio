import {FilledButton} from "@/components/Buttons";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

export default function Home() {
    const backgroundStyle = {
        background: `radial-gradient(circle, #ffffff 10%, transparent 11%),
                 radial-gradient(circle at bottom left, #ffffff 5%, transparent 6%),
                 radial-gradient(circle at bottom right, #ffffff 5%, transparent 6%),
                 radial-gradient(circle at top left, #ffffff 5%, transparent 6%),
                 radial-gradient(circle at top right, #ffffff 5%, transparent 6%)`,
        backgroundSize: '1em 1em',
        opacity: 0.3,
        width: '500px',
        height: '500px',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '40%',
        borderBottomLeftRadius: '30%',
        borderBottomRightRadius: '50%',
    };
  return (
      <div className={'flex flex-col gap-10 justify-center items-center text-center min-h-[calc(100vh-90px)] relative'}>
          <div className={'absolute -z-10 right:0 top:0'} style={backgroundStyle}></div>
        <h1 className={'text-6xl'}>Web Developer iz Istre</h1>
        <p className={'text-xl font-light'}>Transformiram vase ideje u stvarnost.</p>
        <FilledButton href={'#kontakt'} className={'text-lg px-6 py-2'}>Kontakt</FilledButton>
      </div>
  );
}
