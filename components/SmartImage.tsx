import React, { useState, useEffect } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  localSrc: string;
  fallbackSrc: string;
  alt: string;
}

/**
 * SmartImage attempts to load a custom image from the local public folder (`localSrc`).
 * If the file is missing in public/ or fails to load, it automatically falls back
 * to `fallbackSrc`.
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  localSrc,
  fallbackSrc,
  alt,
  className,
  ...props
}) => {
  const [src, setSrc] = useState<string>(localSrc);
  const [hasFailedLocal, setHasFailedLocal] = useState<boolean>(false);

  useEffect(() => {
    // Reset when localSrc changes
    setSrc(localSrc);
    setHasFailedLocal(false);
  }, [localSrc]);

  const handleError = () => {
    if (!hasFailedLocal) {
      setHasFailedLocal(true);
      setSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={className}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
