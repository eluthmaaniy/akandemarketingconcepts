'use client';

import { useEffect, useState } from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export default function PageNav() {
  const [active, setActive] = useState('about');

  useEffect(() => {
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
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-0 z-20 -mx-4 border-b border-line bg-neutral-50/90 px-4 backdrop-blur lg:mx-0 lg:px-0"
    >
      <ul className="no-scrollbar flex gap-6 overflow-x-auto whitespace-nowrap text-sm font-medium md:gap-8 md:text-base">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              aria-current={active === link.id ? 'true' : undefined}
              className={`nav-link ${active === link.id ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
