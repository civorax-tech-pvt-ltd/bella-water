"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  video: string;
  poster: string;
  title: string;
  description?: string;
  playLabel: string;
}

/** Click-to-play video card — never preloads or autoplays until the visitor opts in. */
export function VideoCard({ video, poster, title, description, playLabel }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <div className="relative aspect-video overflow-hidden bg-black">
        {playing ? (
          <video
            src={video}
            poster={poster}
            controls
            autoPlay
            playsInline
            preload="none"
            className="size-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={playLabel}
            className="group relative block size-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
            <img src={poster} alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
              <span className="flex size-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
                <Play className="size-6 translate-x-0.5 text-brand-navy" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm font-bold text-brand-navy dark:text-foreground">{title}</p>
        {description ? <p className="mt-1 text-xs text-muted-foreground">{description}</p> : null}
      </div>
    </div>
  );
}
