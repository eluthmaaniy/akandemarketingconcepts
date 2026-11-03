'use client';

import { useEffect, useRef, useState } from 'react';

export default function SwipeStrip({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLUListElement>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setHasMore(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="relative">
      <p
        className={`mb-2 flex items-center justify-end gap-1 text-xs text-muted transition-opacity duration-300 sm:hidden ${
          hasMore ? 'opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden="true"
      >
        Swipe
        <i className="ri-arrow-right-line motion-safe:animate-nudge" />
      </p>
      <ul
        ref={ref}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4"
      >
        {children}
      </ul>
      <div
        className={`pointer-events-none absolute -right-4 bottom-0 top-6 w-10 bg-gradient-to-l from-neutral-50 to-transparent transition-opacity duration-300 sm:hidden ${
          hasMore ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
