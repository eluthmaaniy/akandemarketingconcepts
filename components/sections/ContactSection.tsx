import { profile } from '@/data/profile';

export default function ContactSection() {
  const { phones, youtube } = profile.contact;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
      <h2 id="contact-heading" className="section-eyebrow">
        Contact
      </h2>
      <p className="mt-3 text-2xl font-bold text-heading">Let&apos;s talk about your store</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {phones.map((phone) => (
          <li key={phone.href}>
            <a href={phone.href} className="card flex h-full items-center gap-3 p-4">
              <span className="icon-chip">
                <i className="ri-phone-line" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted">Phone · {phone.country}</span>
                <span className="block break-words font-semibold text-heading">{phone.label}</span>
              </span>
            </a>
          </li>
        ))}
        <li className="sm:col-span-2">
          <a
            href={youtube.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex h-full items-center gap-3 p-4"
          >
            <span className="icon-chip">
              <i className="ri-youtube-fill" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted">YouTube channel</span>
              <span className="block break-words font-semibold text-heading">{youtube.label}</span>
            </span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
