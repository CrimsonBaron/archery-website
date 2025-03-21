"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useMemo,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@nextui-org/button";

import useOutsideClick from "@/hooks/use-outside-click";
import { cn } from "@/utils";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type CardValues = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export function Carousel({ items, initialScroll = 0 }: CarouselProps) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = () => window && window.innerWidth < 768;

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider
      value={useMemo(
        () => ({
          onCardClose: handleCardClose,
          currentIndex,
        }),
        [handleCardClose, currentIndex],
      )}
    >
      <div className="relative w-full">
        <div
          ref={carouselRef}
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          />

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                key={`card${item.key}`}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <Button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            disabled={!canScrollLeft}
            radius="full"
            onClick={scrollLeft}
          >
            <HiArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </Button>
          <Button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            disabled={!canScrollRight}
            radius="full"
            onClick={scrollRight}
          >
            <HiArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </Button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

Carousel.defaultProps = {
  initialScroll: 0,
};

export function BlurImage({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt={alt || "Background of a beautiful view"}
      blurDataURL={typeof src === "string" ? src : undefined}
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      decoding="async"
      height={height}
      loading="lazy"
      src={src}
      width={width}
      onLoad={() => setLoading(false)}
      {...rest}
    />
  );
}

export function Card({
  card,
  index,
  layout = false,
}: {
  card: CardValues;
  index: number;
  layout?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              animate={{ opacity: 1 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
            />
            <motion.div
              ref={containerRef}
              animate={{ opacity: 1 }}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              layoutId={layout ? `card-${card.title}` : undefined}
            >
              <Button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                radius="full"
                onClick={handleClose}
              >
                <IoCloseSharp className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </Button>
              <motion.p
                className="text-base font-medium text-black dark:text-white"
                layoutId={layout ? `category-${card.title}` : undefined}
              >
                {card.category}
              </motion.p>
              <motion.p
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
                layoutId={layout ? `title-${card.title}` : undefined}
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            className="text-white text-sm md:text-base font-medium font-sans text-left"
            layoutId={layout ? `category-${card.category}` : undefined}
          >
            {card.category}
          </motion.p>
          <motion.p
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
            layoutId={layout ? `title-${card.title}` : undefined}
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          fill
          alt={card.title}
          className="object-cover absolute z-10 inset-0"
          src={card.src}
        />
      </motion.button>
    </>
  );
}

Card.defaultProps = {
  layout: false,
};
