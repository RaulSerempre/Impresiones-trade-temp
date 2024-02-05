"use client";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import { DotButtonSlide, NavButtonSlide } from "./slider-navigate";
import { SliderContent } from "./slicer-content-static";
import { useGetTutorialSteps } from "@/src/hooks/api/tutorial/useTutorial";


export const SlidersComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const { data , isLoading} = useGetTutorialSteps();

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="relative">
        <div
          className="pt-10 pb-16 px-20 relative border-2 border-solid bg-white shadow-tutorial max-w-[800px] mx-auto overflow-x-hidden"
          ref={emblaRef}
        >
          <div className="embla__container max-w-[614px] mx-auto">
            {data && data.map((slide, index) => (
              <SliderContent key={slide.id} {...slide} selected={index === selectedIndex} />
            ))}
          </div>

          <NavButtonSlide
            onClick={scrollPrev}
            type="prev"
            disabled={prevBtnDisabled}
          />
          <NavButtonSlide
            onClick={scrollNext}
            type="next"
            disabled={nextBtnDisabled}
          />

          <div className="flex justify-center gap-6 mt-10">
            {scrollSnaps.map((_, index) => (
              <DotButtonSlide
                key={index}
                onClick={() => scrollTo(index)}
                selected={index === selectedIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
