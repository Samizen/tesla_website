"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState, type PointerEvent, type WheelEvent } from "react";
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
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, panX: 0, panY: 0 });

  useEffect(() => {
    setMounted(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (scale <= 1) {
      setPan({ x: 0, y: 0 });
    }
  }, [scale]);

  function startImageDrag(event: PointerEvent<HTMLDivElement>) {
    if (scale <= 1) {
      return;
    }

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      panX: pan.x,
      panY: pan.y,
    };
    setIsDragging(true);
  }

  function dragImage(event: PointerEvent<HTMLDivElement>) {
    if (!isDragging) {
      return;
    }

    const dragStart = dragStartRef.current;
    setPan({
      x: dragStart.panX + event.clientX - dragStart.pointerX,
      y: dragStart.panY + event.clientY - dragStart.pointerY,
    });
  }

  function stopImageDrag(event: PointerEvent<HTMLDivElement>) {
    if (!isDragging) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  }

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
        <div
          className={`image-zoom-frame ${isDragging ? "dragging" : ""}`}
          onWheel={onWheel}
          onPointerDown={startImageDrag}
          onPointerMove={dragImage}
          onPointerUp={stopImageDrag}
          onPointerCancel={stopImageDrag}
          onPointerLeave={stopImageDrag}
        >
          <Image
            className={imageClassName}
            src={image}
            alt={alt}
            sizes="92vw"
            quality={88}
            draggable={false}
            style={{ transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${scale})` }}
          />
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>,
    document.body,
  );
}
