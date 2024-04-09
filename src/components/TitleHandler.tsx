'use client'
import { useEffect } from 'react';
import {TemplateString} from "next/dist/lib/metadata/types/metadata-types";

const TabVisibilityHandler = ({ children, DefaultTitle }: {children: React.ReactNode, DefaultTitle?: string | TemplateString | null | undefined}) => {
    useEffect(() => {
        const handleVisibilityChange = () => {
            DefaultTitle = String(DefaultTitle)
            document.title = document.hidden ? 'Vratite se na moj portfolio!' : DefaultTitle ? DefaultTitle : 'Raian Melon | Portfolio';
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return <>{children}</>;
};

export default TabVisibilityHandler;