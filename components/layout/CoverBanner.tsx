import Image from 'next/image';
import { profile } from '@/data/profile';

export default function CoverBanner() {
  return (
    <div className="relative h-40 w-full overflow-hidden bg-accent sm:h-52 md:h-64">
      {profile.coverImage ? (
        <Image
          src={profile.coverImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      ) : (
        <div className="cover-placeholder absolute inset-0" aria-hidden="true">
          <div className="container mx-auto flex h-full items-end justify-end px-4 pb-5 md:items-center md:pb-0">
            <span className="select-none text-right text-2xl font-bold leading-tight tracking-tight text-white/15 sm:text-4xl md:text-5xl">
              Akande
              <br />
              Marketing Concepts
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
