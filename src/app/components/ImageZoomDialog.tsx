"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState, type WheelEvent } from "react";
import { createPortal } from "react-dom";

type ImageZoomDialogProps = {
  image: StaticImageData;
  alt: string;
  caption: string;
  imageClassName?: string;
  scale: number;
  onWheel: (event: WheelEvent<HTMLDivElement>) => void;
  onClose: () => void;
};

export function ImageZoomDialog({ image, alt, caption, imageClassName, scale, onWheel, onClose }: ImageZoomDialogProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className="image-zoom" role="dialog" aria-modal="true" aria-label={caption}>
      <button className="image-zoom-backdrop" type="button" onClick={onClose} aria-label="Close zoomed image" />
      <figure>
        <button className="image-zoom-close" type="button" onClick={onClose} aria-label="Close zoomed image">
          &times;
        </button>
        <div className="image-zoom-frame" onWheel={onWheel}>
          <Image
            className={imageClassName}
            src={image}
            alt={alt}
            sizes="92vw"
            quality={88}
            style={{ transform: `scale(${scale})` }}
          />
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>,
    document.body,
  );
}
