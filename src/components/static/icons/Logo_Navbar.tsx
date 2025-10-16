import LogoUrl from '../assets/HartaZone-04.svg';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function LogoNav({ className='', width = 48, height = 48}: LogoProps) {
  return (
    <img
      src={LogoUrl}
      className={className}
      width={width}
      height={height}
      decoding="async"
      loading="lazy"
    />
  );
}