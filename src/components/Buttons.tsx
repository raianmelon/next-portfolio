import Link from "next/link";

export function FilledButtonWithOutline ({children, href, className, style}: {children: React.ReactNode, href: string, className?: string, style?:object}) {
    return (
        <Link href={href} className={'ring-yellow hover:bg-yellow transition-all duration-500 hover:text-black ring-[1.5px] px-4 py-1.5 rounded-md' + ' ' + className} style={style}>{children}</Link>
    )
}

export function FilledButton ({children, href, target, className, style}: {children: React.ReactNode, href: string, target?: string, className?: string, style?:object}) {
    return (
        <Link href={href} target={target} className={'ring-yellow bg-yellow hover:bg-transparent transition-all duration-500 hover:text-white text-black ring-[1.5px] px-4 py-1.5 rounded-md' + ' ' + className} style={style}>{children}</Link>
    )
}