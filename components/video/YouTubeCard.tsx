'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Video } from '@/data/videos';
import { youtubeUrl } from '@/data/videos';

const PLAY_EVENT = 'youtube-card:play';

export default function YouTubeCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const portrait = video.orientation === 'portrait';

  useEffect(() => {
    const onPlay = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== video.id) setPlaying(false);
    };
    window.addEventListener(PLAY_EVENT, onPlay);
    return () => window.removeEventListener(PLAY_EVENT, onPlay);
  }, [video.id]);

  const play = () => {
    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: video.id }));
    setPlaying(true);
  };

  return (
    <figure className="group flex h-full flex-col rounded-card border border-line bg-white p-2 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
      {!portrait && (
        <div className="flex items-center gap-3 px-1.5 pb-2 pt-0.5" aria-hidden="true">
          <span className="flex shrink-0 gap-1.5">
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
          </span>
          <span className="flex min-w-0 flex-1 items-center justify-center gap-1 truncate rounded-full bg-neutral-100 px-3 py-0.5 text-[11px] text-muted">
            <i className="ri-youtube-fill text-xs text-red-500" />
            <span className="truncate">youtube.com</span>
          </span>
          <span className="w-[30px] shrink-0" />
        </div>
      )}
      <div
        className={`relative w-full overflow-hidden rounded-lg bg-heading ${
          portrait ? 'aspect-[9/16]' : 'aspect-video'
        }`}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={play}
            aria-label={`Play video: ${video.title}`}
            className="absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-hover"
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              fill
              sizes={portrait ? '(min-width: 1024px) 220px, 45vw' : '(min-width: 1024px) 440px, 90vw'}
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-accent shadow-lg transition-transform duration-200 group-hover:scale-110">
              <i className="ri-play-fill text-3xl" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex flex-1 items-start justify-between gap-2 px-1.5 pb-1.5 pt-3">
        <span className="text-sm font-medium leading-snug text-heading">{video.title}</span>
        <a
          href={youtubeUrl(video.id)}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded text-muted hover:text-accent"
          aria-label={`Watch "${video.title}" on YouTube (opens in a new tab)`}
        >
          <i className="ri-external-link-line" aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}
