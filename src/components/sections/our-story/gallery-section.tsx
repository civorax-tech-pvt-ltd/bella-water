"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/shared/container";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  alt: string;
  aspectRatio: number;
}

// Row 1: 3 images
const row1Images: GalleryImage[] = [
  { id: 1, alt: "Production quality control", aspectRatio: 1.1 },
  { id: 2, alt: "Bella team photo", aspectRatio: 1.5 },
  { id: 3, alt: "Filling machinery", aspectRatio: 1.0 },
];

// Row 2: 3 images
const row2Images: GalleryImage[] = [
  { id: 5, alt: "Product inventory storage", aspectRatio: 1.3 },
  { id: 4, alt: "Factory exterior", aspectRatio: 1.2 },
  { id: 6, alt: "Delivery vehicle", aspectRatio: 1.4 },
];

const allImages = [...row1Images, ...row2Images];

export function GallerySection() {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const selectedImage = allImages.find((img) => img.id === selectedImageId);

  useEffect(() => {
    if (selectedImageId) {
      setSelectedIndex(allImages.findIndex((img) => img.id === selectedImageId));
    }
  }, [selectedImageId]);

  const handlePrevious = () => {
    const newIndex = (selectedIndex - 1 + allImages.length) % allImages.length;
    setSelectedImageId(allImages[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % allImages.length;
    setSelectedImageId(allImages[newIndex].id);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return;
    if (e.key === "Escape") setSelectedImageId(null);
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage, selectedIndex]);

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-navy uppercase dark:text-primary">
            Behind the Scenes
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl dark:text-foreground">
            Our Facility & Process
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            From our dedicated team to cutting-edge technology, every step is designed to deliver pure water to your home.
          </p>
        </div>

        {/* Justified Gallery - 2 Rows */}
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="flex gap-4 justify-between">
            {row1Images.map((image) => (
              <div
                key={image.id}
                className="group relative flex-grow overflow-hidden rounded-xl bg-muted cursor-pointer"
                style={{
                  flex: `${image.aspectRatio} 1 0`,
                  minHeight: "300px",
                }}
                onClick={() => setSelectedImageId(image.id)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/gallery/${image.id}.webp`}
                  alt={image.alt}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-4 justify-between">
            {row2Images.map((image) => (
              <div
                key={image.id}
                className="group relative flex-grow overflow-hidden rounded-xl bg-muted cursor-pointer"
                style={{
                  flex: `${image.aspectRatio} 1 0`,
                  minHeight: "300px",
                }}
                onClick={() => setSelectedImageId(image.id)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/gallery/${image.id}.webp`}
                  alt={image.alt}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImageId(null)}
          ref={modalRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Modal Content */}
          <div
            className="relative max-h-[90vh] max-w-[95vw] sm:max-w-[90vw] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageId(null)}
              className="absolute -top-10 sm:-top-12 right-0 z-10 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="size-6 sm:size-8" />
            </button>

            {/* Image */}
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/gallery/${selectedImage.id}.webp`}
                alt={selectedImage.alt}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Navigation Buttons - Hidden on Mobile, Visible on sm+ */}
            <div className="absolute inset-y-0 left-0 hidden sm:flex items-center">
              <button
                onClick={handlePrevious}
                className="ml-4 rounded-full bg-white/20 p-3 text-white transition-all hover:bg-white/40"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 hidden sm:flex items-center">
              <button
                onClick={handleNext}
                className="mr-4 rounded-full bg-white/20 p-3 text-white transition-all hover:bg-white/40"
                aria-label="Next image"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Mobile Touch Hint - Visible on mobile only */}
            <div className="absolute inset-x-0 bottom-16 sm:hidden flex justify-center pointer-events-none">
              <span className="text-xs text-white/60 bg-black/40 px-3 py-1 rounded-full">
                Swipe to navigate
              </span>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-xs sm:text-sm text-white">
              {selectedIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
