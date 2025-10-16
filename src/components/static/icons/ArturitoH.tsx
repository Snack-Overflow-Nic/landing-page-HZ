import ArturitoUrl from '../assets/Arturito.svg';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function ArturitoHH({ className='', width = 48, height = 48}: LogoProps) {
  return (
    <img
      src={ArturitoUrl}
      className={className}
      width={width}
      height={height}
      decoding="async"
      loading="lazy"
    />
  );
}