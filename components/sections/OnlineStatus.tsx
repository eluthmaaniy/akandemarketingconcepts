'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';

const formatters = profile.timezones.map(
  ({ timeZone }) =>
    new Intl.DateTimeFormat('en-US', { timeZone, hour: 'numeric', minute: '2-digit' }),
);

export default function OnlineStatus() {
  const [times, setTimes] = useState<string[] | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimes(formatters.map((f) => f.format(now)));
    };
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="text-sm">
      <p className="flex items-center gap-2 font-semibold text-heading">
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full rounded-full bg-hover opacity-75 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-hover" />
        </span>
        Online
      </p>
      <dl className="mt-3 space-y-1.5">
        {profile.timezones.map((tz, i) => (
          <div key={tz.timeZone} className="flex items-center justify-between gap-4">
            <dt className="flex items-center gap-2 text-muted">
              <i className="ri-time-line text-accent" aria-hidden="true" />
              {tz.label}
            </dt>
            <dd className="min-w-[4.5rem] text-right font-medium tabular-nums text-heading">
              {times ? times[i] : '--:--'}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
