'use client'
import {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export const AnimatedHeading = ({ children, className }: {children: React.ReactNode, className?: string}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const onChange = (isVisible: boolean) => {
        setIsVisible(isVisible);
    };

    return (
        <VisibilitySensor onChange={onChange} partialVisibility={true} minTopValue={1}>
            <h1
                className={`opacity-0 text-white inline-block  translate-y-full ${className}`}
                style={isVisible ? { animation: 'popupword 0.5s forwards' } : {}}
            >
                {children}
            </h1>
        </VisibilitySensor>
    );
};