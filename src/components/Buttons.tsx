import Link from "next/link";

export function FilledButton ({children, href, className}: {children: React.ReactNode, href: string, className?: string}) {
    return (
        <Link href={href} className={'ml-5 ring-yellow hover:bg-yellow transition-all duration-500 hover:text-black ring-[1.5px] px-4 py-1.5 rounded-md' + ' ' + className}>{children}</Link>
    )
}