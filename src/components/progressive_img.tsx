import {useEffect, useState} from 'react';
import type {ImgHTMLAttributes} from 'react';

interface ProgressiveImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  compressedSrc?: string;
}

export function ProgressiveImg({
  src,
  alt,
  compressedSrc,
  className,
  ...imgProps
}: ProgressiveImgProps) {
  const [imgSrc, setImgSrc] = useState(compressedSrc ?? src);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgSrc(src);
    };
    img.src = src;
    return () => {
      img.onload = null;
    };
  }, [src]);

  const isLoading = compressedSrc !== undefined && imgSrc === compressedSrc;
  const classes = [isLoading ? 'image--loading' : 'image--loaded', className]
    .filter(Boolean)
    .join(' ');

  return <img {...imgProps} src={imgSrc} alt={alt} className={classes} />;
}
