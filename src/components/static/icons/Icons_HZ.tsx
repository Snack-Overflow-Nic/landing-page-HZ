import HzAmarilloUrl from '../assets/Hz-amarillo.svg';
import HzAzulUrl from '../assets/Hz-azul.svg';
import HzNaranjaUrl from '../assets/Hz-naranja.svg';

import ArturitoGesto1Url from '../assets/ArturitoGesto1.svg';
import ArturitoGesto2Url from '../assets/ArturitoGesto2.svg';

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export function HzAmarillo({ className = '', width = 48, height = 48 }: LogoProps) {
    return (
        <img
            src={HzAmarilloUrl}
            className={className}
            width={width}
            height={height}
            decoding="async"
            loading="lazy"
        />
    );
}

export function HzAzul({ className = '', width = 48, height = 48 }: LogoProps) {
    return (
        <img
            src={HzAzulUrl}
            className={className}
            width={width}
            height={height}
            decoding="async"
            loading="lazy"
        />
    );
}

export function HzNaranja({ className = '', width = 48, height = 48 }: LogoProps) {
    return (
        <img
            src={HzNaranjaUrl}
            className={className}
            width={width}
            height={height}
            decoding="async"
            loading="lazy"
        />
    );
}


export function ArturitoGesto1({ className = '', width = 48, height = 48 }: LogoProps) {
    return (
        <img
            src={ArturitoGesto1Url}
            className={className}
            width={width}
            height={height}
            decoding="async"
            loading="lazy"
        />
    );
}

export function ArturitoGesto2({ className = '', width = 48, height = 48 }: LogoProps) {
    return (
        <img
            src={ArturitoGesto2Url}
            className={className}
            width={width}
            height={height}
            decoding="async"
            loading="lazy"
        />
    );
}