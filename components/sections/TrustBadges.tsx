import { trustBadges } from '@/data/profile';

export default function TrustBadges() {
  return (
    <section aria-labelledby="trust-heading">
      <h3 id="trust-heading" className="text-sm font-medium text-muted">
        Trusted partner &amp; verified across
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2.5">
        {trustBadges.map((badge) => (
          <li
            key={badge.name}
            className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-heading shadow-card"
          >
            <i className={`${badge.icon} text-lg leading-none text-accent`} aria-hidden="true" />
            <span>{badge.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
