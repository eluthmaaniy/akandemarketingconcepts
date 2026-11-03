'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export default function PageNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [active, setActive] = useState('about');
  const current = isHome ? active : pathname.startsWith('/reviews') ? 'reviews' : null;

  useEffect(() => {
    if (!isHome) return;

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -60% 0px' },
    );

    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) setActive(links[links.length - 1].id);
    };

    sections.forEach((s) => observer.observe(s));
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [isHome]);

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-0 z-20 -mx-4 border-b border-line bg-neutral-50/90 px-4 backdrop-blur lg:mx-0 lg:px-0"
    >
      <ul className="no-scrollbar flex gap-6 overflow-x-auto whitespace-nowrap text-sm font-medium md:gap-8 md:text-base">
        {links.map((link) => {
          const isActive = current === link.id;
          return (
            <li key={link.id}>
              <a
                href={isHome ? `#${link.id}` : `/#${link.id}`}
                onClick={isHome ? () => setActive(link.id) : undefined}
                aria-current={isActive ? (isHome ? 'true' : 'page') : undefined}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
