import Image from 'next/image';
import { profile } from '@/data/profile';

export default function ProfileSidebar() {
  return (
    <aside
      aria-label="Profile"
      className="relative lg:sticky lg:top-6 lg:col-span-4 lg:-mt-24 lg:self-start xl:col-span-3"
    >
      <div className="lg:rounded-card lg:border lg:border-line lg:bg-white lg:p-6 lg:shadow-card">
        <div className="absolute -top-16 left-0 lg:static">
          <Image
            src={profile.avatar}
            alt="Akande Marketing Concepts profile photo"
            width={128}
            height={128}
            priority
            className="h-28 w-28 rounded-full border-4 border-white bg-white object-cover object-top shadow-md ring-2 ring-hover sm:h-32 sm:w-32"
          />
        </div>
        <div className="pt-16 sm:pt-20 lg:pt-5">
          <h1 className="text-2xl font-bold leading-tight text-heading">{profile.name}</h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-body">{profile.tagline}</p>

          <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-body lg:flex-col">
            <div className="flex items-center gap-2">
              <dt>
                <i className="ri-map-pin-line text-accent" aria-hidden="true" />
                <span className="sr-only">Locations</span>
              </dt>
              <dd>{profile.locations.join(' · ')}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt>
                <i className="ri-global-line text-accent" aria-hidden="true" />
                <span className="sr-only">Languages</span>
              </dt>
              <dd>{profile.languages.join(' · ')}</dd>
            </div>
          </dl>

          <a href="#contact" className="btn-primary mt-5 inline-flex lg:mt-6 lg:flex lg:w-full">
            <i className="ri-phone-line" aria-hidden="true" /> Contact me
          </a>
        </div>
      </div>
    </aside>
  );
}
