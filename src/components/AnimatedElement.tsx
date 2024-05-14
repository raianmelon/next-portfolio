'use client'
import {InView} from 'react-intersection-observer';

export const AnimatedHeading = ({ children, className }: {children: React.ReactNode, className?: string}) => {
    return (
        <InView threshold={0}>
            {({ inView, ref, entry }) => (
            <h1
                ref={ref}
                className={`opacity-0 text-white inline-block  translate-y-full ${className}`}
                style={inView ? { animation: 'popupword 0.5s forwards' } : {}}
            >
                {children}
            </h1>
            )}
        </InView>
    );
};