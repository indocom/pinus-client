import React from "react";
import { Carousel as BaseCarousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface CarouselSlide {
  image: string;
  title: string;
}

interface OwnProps {
  slides: CarouselSlide[];
  width?: number;
}

const Carousel: React.FC<OwnProps> = ({ slides, width }) => {
  return (
    <BaseCarousel
      width={`${width}px`}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {slides.map((slide, index) => (
        <img
          key={`${slide.title}-${index}`}
          src={slide.image}
          alt={`carousel-${index}`}
        />
      ))}
    </BaseCarousel>
  );
};

export default Carousel;
