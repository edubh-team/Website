"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
// import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { StaticImageData } from "next/image";

interface CarouselProps {
  items: JSX.Element[];
}

type Card = {
  src: string | StaticImageData;
  title: string;
  category: string;
  content: React.ReactNode;
  website: string;
  backgroundImage?: string | StaticImageData;
}

export const CarouselContext = createContext<{
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}>({ currentIndex: 0, setCurrentIndex: () => {} });

export const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const allItems = [...items, ...items, ...items]; // Duplicate items for infinite scroll

  return (
    <CarouselContext.Provider
      value={{ currentIndex, setCurrentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
        >
          <motion.div
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                ease: "linear",
                duration: 45,
              },
            }}
            className="flex flex-row justify-start gap-4"
          >
            {allItems.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCurrentIndex } = useContext(CarouselContext);

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

  const handleOpen = () => {
    setOpen(true);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentIndex(-1);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div key={card.title} className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/70 backdrop-blur-md"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-[60] mx-auto max-w-4xl w-full rounded-3xl bg-gradient-to-br from-white to-blue-50 dark:from-neutral-800 dark:to-neutral-900 p-4 md:p-6 shadow-xl"
              ref={containerRef}
            >
              <Image src={card.src} alt={card.title} width={120} height={120} className="mb-4" />
              <motion.p
                className="text-base font-medium text-gray-600 dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                className="mt-4 text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white leading-tight"
              >
                {card.title}
              </motion.p>
              <div className="py-6 text-gray-700 dark:text-gray-300 leading-relaxed">{card.content}</div>
              <div className="flex justify-start items-center gap-4 mt-4">
                {card.website && (
                  <a
                    href="/courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 shadow-sm"
                  >
                    Explore Courses
                  </a>
                )}
                <button
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-60 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-blue-500/20 md:h-[30rem] md:w-96"
      >
        {card.backgroundImage && (
          <Image 
            src={typeof card.backgroundImage === 'string' ? card.backgroundImage : card.backgroundImage.src}
            alt={card.title}
            fill
            className="absolute inset-0 object-cover opacity-50"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <Image src={card.src} alt={card.title} width={80} height={80} className="mb-2" />
          <motion.p
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill, // ignore fill
  blurDataURL, // ignore blurDataURL
  ...rest
}: ImageProps & { fill?: boolean; blurDataURL?: string }) => {
  // Remove blur effect
  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        className,
      )}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
}; 