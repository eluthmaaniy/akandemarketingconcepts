import SwipeStrip from '@/components/video/SwipeStrip';
import YouTubeCard from '@/components/video/YouTubeCard';
import type { Video } from '@/data/videos';

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const landscape = videos.filter((v) => v.orientation === 'landscape');
  const portrait = videos.filter((v) => v.orientation === 'portrait');
  const featureFirst = landscape.length % 2 === 1;

  return (
    <div className="space-y-8">
      {landscape.length > 0 && (
        <ul className="grid gap-6 sm:grid-cols-2">
          {landscape.map((video, i) => (
            <li key={video.id} className={featureFirst && i === 0 ? 'sm:col-span-2' : undefined}>
              <YouTubeCard video={video} />
            </li>
          ))}
        </ul>
      )}
      {portrait.length > 0 && (
        <SwipeStrip>
          {portrait.map((video) => (
            <li key={video.id} className="w-[42vw] max-w-[220px] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <YouTubeCard video={video} />
            </li>
          ))}
        </SwipeStrip>
      )}
    </div>
  );
}
