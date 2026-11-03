import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-heading py-8 text-white">
      <div className="container mx-auto space-y-2 px-4 text-center">
        <p className="text-sm">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-white/70">
          Website by{' '}
          <a
            href="https://eltemur.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded text-white/90 underline decoration-white/40 underline-offset-2 hover:text-white"
          >
            Eltemur Zentra Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
