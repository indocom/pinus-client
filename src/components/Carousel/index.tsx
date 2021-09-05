import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderArrow =
    (type: "prev" | "next") =>
    (onClickHandler, toRender, label): React.ReactElement => {
      return (
        toRender && (
          <div
            className={`
            absolute z-10
            w-5 h-5 rounded-full
            bg-white

            flex flex-row
            justify-center items-center

            stroke-2
          `}
            style={{
              top: "calc(50% - 20px)",
              [type === "prev" ? "left" : "right"]: 10,
            }}
            title={label}
            onClick={(event: React.MouseEvent<HTMLDivElement>): void => {
              onClickHandler(event);
              if (type === "prev") {
                setCurrentSlide(currentSlide - 1);
              } else {
                setCurrentSlide(currentSlide + 1);
              }
            }}
          >
            {type === "prev" ? <ChevronLeft /> : <ChevronRight />}
          </div>
        )
      );
    };

  return (
    <BaseCarousel
      width={`${width}px`}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowNext={renderArrow("next")}
      renderArrowPrev={renderArrow("prev")}
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
