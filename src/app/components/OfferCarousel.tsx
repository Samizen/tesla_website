"use client";

import Image from "next/image";
import type { WheelEvent } from "react";
import { useState } from "react";
import { offerSlides } from "../home-data";
import { ImageZoomDialog } from "./ImageZoomDialog";

export function OfferCarousel() {
  const [activeOfferSlide, setActiveOfferSlide] = useState(0);
  const [zoomedOfferSlide, setZoomedOfferSlide] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const zoomedSlide = zoomedOfferSlide === null ? null : offerSlides[zoomedOfferSlide];

  function showPreviousOfferSlide() {
    setActiveOfferSlide((current) => (current - 1 + offerSlides.length) % offerSlides.length);
  }

  function showNextOfferSlide() {
    setActiveOfferSlide((current) => (current + 1) % offerSlides.length);
  }

  function openZoomedOfferSlide(index: number) {
    setActiveOfferSlide(index);
    setZoomScale(1);
    setZoomedOfferSlide(index);
  }

  function closeZoomedOfferSlide() {
    setZoomedOfferSlide(null);
    setZoomScale(1);
  }

  function changeZoomScale(amount: number) {
    setZoomScale((current) => Math.min(3, Math.max(1, Number((current + amount).toFixed(1)))));
  }

  function zoomOfferSlideWithWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();
    changeZoomScale(event.deltaY < 0 ? 0.16 : -0.16);
  }

  return (
    <>
      <div className="offer-carousel" aria-label="Structural engineering work samples">
        <div className="offer-carousel-track">
          {offerSlides.map((slide, index) => {
            const offset = (index - activeOfferSlide + offerSlides.length) % offerSlides.length;
            const position =
              offset === 0
                ? "active"
                : offset === 1
                  ? "next"
                  : offset === offerSlides.length - 1
                    ? "previous"
                    : "hidden";

            return (
              <button
                className={`offer-slide ${position}`}
                key={slide.caption}
                type="button"
                onClick={() => openZoomedOfferSlide(index)}
                aria-label={`Zoom image: ${slide.caption}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  loading={index === activeOfferSlide ? "eager" : "lazy"}
                  sizes="(max-width: 680px) 86vw, 62vw"
                  quality={72}
                />
                <span>{slide.caption}</span>
              </button>
            );
          })}
        </div>
        <div className="offer-carousel-controls" aria-label="Carousel controls">
          <button type="button" onClick={showPreviousOfferSlide} aria-label="Show previous image">
            &lt;
          </button>
          <div className="offer-dots" aria-label="Choose carousel image">
            {offerSlides.map((slide, index) => (
              <button
                className={activeOfferSlide === index ? "active" : ""}
                key={slide.caption}
                type="button"
                onClick={() => setActiveOfferSlide(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={showNextOfferSlide} aria-label="Show next image">
            &gt;
          </button>
        </div>
        <a className="offer-carousel-caption" href={offerSlides[activeOfferSlide].href} aria-live="polite">
          {offerSlides[activeOfferSlide].caption}
        </a>
      </div>

      {zoomedSlide && (
        <ImageZoomDialog
          image={zoomedSlide.image}
          alt={zoomedSlide.caption}
          caption={zoomedSlide.caption}
          scale={zoomScale}
          onWheel={zoomOfferSlideWithWheel}
          onClose={closeZoomedOfferSlide}
        />
      )}
    </>
  );
}
