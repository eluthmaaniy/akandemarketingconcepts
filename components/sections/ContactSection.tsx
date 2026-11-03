import ContactForm from '@/components/contact/ContactForm';
import { profile } from '@/data/profile';

export default function ContactSection() {
  const { phones, youtube } = profile.contact;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
      <h2 id="contact-heading" className="section-eyebrow">
        Contact
      </h2>
      <p className="mt-3 text-2xl font-bold text-heading">Let&apos;s talk about your store</p>
      <div className="mt-6 grid gap-6 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <ContactForm />
        </div>
        <ul className="grid content-start gap-4 sm:grid-cols-2 xl:col-span-2 xl:grid-cols-1">
          {phones.map((phone) => (
            <li key={phone.whatsapp}>
              <a
                href={phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex h-full items-center gap-3 p-4"
              >
                <span className="icon-chip">
                  <i className="ri-whatsapp-line" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted">WhatsApp · {phone.country}</span>
                  <span className="block whitespace-nowrap font-semibold tabular-nums text-heading">
                    {phone.label}
                  </span>
                </span>
                <span className="sr-only">(opens WhatsApp in a new tab)</span>
              </a>
            </li>
          ))}
          <li className="sm:col-span-2 xl:col-span-1">
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
                <span className="block whitespace-nowrap text-sm font-semibold text-heading min-[360px]:text-base">
                  {youtube.label}
                </span>
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
