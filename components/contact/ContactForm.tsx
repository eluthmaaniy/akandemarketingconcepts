'use client';

import { useId, useState, type FormEvent } from 'react';
import { profile } from '@/data/profile';

const fieldClass =
  'mt-1.5 block w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-heading placeholder:text-muted/70 transition-colors focus:border-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-hover/40';

export default function ContactForm() {
  const id = useId();
  const { phones } = profile.contact;
  const [to, setTo] = useState(phones[0].whatsapp);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const text = `Hi Akande Marketing Concepts, I'm ${name}.\n\n${message}`;
    const digits = to.replace(/\D/g, '');
    window.open(
      `https://wa.me/${digits}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <form onSubmit={onSubmit} className="card p-5 sm:p-6" aria-label="Send a message on WhatsApp">
      <div className="space-y-4">
        <div>
          <label htmlFor={`${id}-name`} className="text-sm font-medium text-heading">
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${id}-message`} className="text-sm font-medium text-heading">
            Message
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={4}
            required
            placeholder="Tell me about your store and goals"
            className={`${fieldClass} resize-y`}
          />
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-heading">Send to</legend>
          <div className="mt-1.5 inline-flex rounded-full border border-line bg-neutral-50 p-1">
            {phones.map((phone) => (
              <label key={phone.whatsapp} className="relative cursor-pointer">
                <input
                  type="radio"
                  name="to"
                  value={phone.whatsapp}
                  checked={to === phone.whatsapp}
                  onChange={() => setTo(phone.whatsapp)}
                  className="peer sr-only"
                />
                <span className="block rounded-full px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:text-heading peer-checked:bg-white peer-checked:text-heading peer-checked:shadow-card peer-focus-visible:ring-2 peer-focus-visible:ring-hover">
                  {phone.country}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn-primary inline-flex w-full sm:w-auto">
          <i className="ri-whatsapp-line text-lg leading-none" aria-hidden="true" /> Send via WhatsApp
        </button>
        <p className="mt-2 text-xs text-muted">Opens WhatsApp with your message ready to send.</p>
      </div>
    </form>
  );
}
