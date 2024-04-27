import Link from "next/link";
import Image from "next/image";
import {Github, SquareArrowOutUpRight} from "lucide-react";
import {FilledButton} from "@/components/Buttons";

const projects = [
    {
        id: 1,
        ImageUrl: '/weather-project.png',
        ImageWidth: 500,
        ImageHeight: 200,
        githubUrl: 'https://github.com/raianmelon/Vrijeme/',
        ProjectSubDomain: 'vrijeme',
        ProjectName: 'Vrijeme',
        ProjectDescription: 'Web aplikacija koja pomoću lokacije uredaja ili pretraživanja može pratiti temperaturu, vrstu oblaka i brzinu vjetra za bilo koji grad iz Svijeta!',
    },
    {
        id: 2,
        ImageUrl: '/shop-project.png',
        ImageWidth: 600,
        ImageHeight: 400,
        githubUrl: 'https://github.com/raianmelon/Trgovina',
        ProjectSubDomain: 'trgovina',
        ProjectName: 'Trgovina',
        ProjectDescription: 'Web aplikacija u kojoj možete dodati novi proizvod u trgovinu. izmjeniti ime, cjenu, opis i sliku proizvoda.',
    }
]

export default function Projects() {
    return (
        <section id={'projects'} className={'px-4 md:px-16 pt-20 lg:pt-32 lg:px-52'}>
            <h1 className={'w-full text-3xl text-center mb-20 lg:mb-20'}>Izdvojeni projekti</h1>
            <div className={'flex lg:flex-row flex-col justify-between gap-20 lg:gap-0 items-start'}>
                {projects.map(({id, ProjectName, ProjectDescription, ProjectSubDomain, githubUrl, ImageUrl, ImageWidth, ImageHeight}) => {
                    return (
                        <div key={id} className={'flex flex-col justify-start items-start gap-7 lg:p-4 w-full lg:max-w-[40%]'}>
                            <Link target={'_blank'} className={'w-full h-full'}
                                  href={`https://${ProjectSubDomain}.raianmelon.com/`}>
                                <Image src={ImageUrl}
                                       className={'-z-10 opacity-50 hover:opacity-100 transition-all duration-300 rounded-xl w-full'}
                                       alt={`${ProjectName} projekt`} width={ImageWidth} height={ImageHeight}/>
                            </Link>
                            <div className={''}>
                                <h1 className={'text-2xl relative group'}>
                                    <Link target={'_blank'}
                                          href={`https://${ProjectSubDomain}.raianmelon.com/`}>{ProjectName}</Link>
                                    <Link target={'_blank'} className={'text-sm text-yellow absolute'}
                                          href={`https://${ProjectSubDomain}.raianmelon.com/`}>
                                        <SquareArrowOutUpRight className={'text-yellow absolute -right-5 top-0'} size={16}/>
                                        <p className={'text-yellow absolute -right-5 pl-1 -top-0.5 opacity-0 group-hover:opacity-100 translate-x-2/3 group-hover:translate-x-full translate-all duration-300'}>{ProjectSubDomain}.raianmelon.com</p>
                                    </Link>
                                </h1>
                            </div>
                            <h1>Web aplikacija koja pomoću lokacije uredaja ili pretraživanja može pratiti temperaturu, vrstu
                                oblaka i brzinu vjetra za bilo koji grad iz Svijeta!</h1>
                            <FilledButton className={'flex gap-3 py-2'} target={'_blank'}
                                          href={githubUrl}><Github/> Pogledajte Kod</FilledButton>
                        </div>
                )}
                )}
            </div>
</section>
)
}