"use client";

import { useState } from "react";
import { Container } from "@/components/shared/container";

interface TrustedImage {
  id: number;
  alt: string;
}

const trustedImages: TrustedImage[] = [
  { id: 7, alt: "Customer with Bella water bottle" },
  { id: 8, alt: "Person enjoying Bella in nature" },
  { id: 9, alt: "Man holding Bella bottle outdoors" },
  { id: 10, alt: "Customer with Bella water product" },
];

export function TrustedLocals() {
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-navy uppercase dark:text-primary">
            Community
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl dark:text-foreground">
            Why Nepalis Choose Bella
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            From homes to offices, Bella is the trusted choice for pure, clean drinking water across Nepal.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {trustedImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg bg-muted aspect-square cursor-pointer transition-all duration-300 ${
                highlightIndex === index
                  ? "ring-2 ring-brand-navy scale-105 lg:scale-110 shadow-lg dark:ring-primary"
                  : "scale-100"
              }`}
              onClick={() =>
                setHighlightIndex(highlightIndex === index ? null : index)
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/gallery/${image.id}.webp`}
                alt={image.alt}
                loading="lazy"
                className={`size-full object-cover transition-transform duration-300 ${
                  highlightIndex === index ? "scale-110" : "scale-100 group-hover:scale-105"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
