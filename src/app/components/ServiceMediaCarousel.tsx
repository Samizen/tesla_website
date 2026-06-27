"use client";

import Image, { type StaticImageData } from "next/image";
import type { WheelEvent } from "react";
import { useState } from "react";
import { ImageZoomDialog } from "./ImageZoomDialog";

type ServiceMediaCarouselProps = {
  title: string;
  images: StaticImageData[];
  imageFit?: "cover" | "contain";
};

export function ServiceMediaCarousel({ title, images, imageFit }: ServiceMediaCarouselProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<StaticImageData | null>(null);
  const [zoomScale, setZoomScale] = useState(1);

  function moveImage(direction: number) {
    setActiveImage((current) => (current + direction + images.length) % images.length);
  }

  function openZoomedImage() {
    setZoomScale(1);
    setZoomedImage(images[activeImage]);
  }

  function closeZoomedImage() {
    setZoomedImage(null);
    setZoomScale(1);
  }

  function changeZoomScale(amount: number) {
    setZoomScale((current) => Math.min(3, Math.max(1, Number((current + amount).toFixed(2)))));
  }

  function zoomImageWithWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();
    changeZoomScale(event.deltaY < 0 ? 0.16 : -0.16);
  }

  return (
    <>
      <div className="service-media">
        <button className="service-media-zoom" type="button" onClick={openZoomedImage} aria-label={`Zoom image for ${title}`}>
          <Image
            className={imageFit === "contain" ? "service-media-contain" : ""}
            src={images[activeImage]}
            alt={title}
            loading="lazy"
            sizes="(max-width: 980px) 100vw, 50vw"
            quality={72}
          />
        </button>
        <button className="service-media-prev" type="button" onClick={() => moveImage(-1)} aria-label={`Previous image for ${title}`}>
          &lt;
        </button>
        <button className="service-media-next" type="button" onClick={() => moveImage(1)} aria-label={`Next image for ${title}`}>
          &gt;
        </button>
        <div className="service-media-dots" aria-hidden="true">
          {images.map((image, index) => (
            <span className={activeImage === index ? "active" : ""} key={`${title}-${index}-${image.src}`} />
          ))}
        </div>
      </div>

      {zoomedImage && (
        <ImageZoomDialog
          image={zoomedImage}
          alt={title}
          caption={title}
          imageClassName={imageFit === "contain" ? "service-media-contain" : ""}
          scale={zoomScale}
          onWheel={zoomImageWithWheel}
          onClose={closeZoomedImage}
        />
      )}
    </>
  );
}
