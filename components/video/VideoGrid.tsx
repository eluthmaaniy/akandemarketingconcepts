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
        <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {portrait.map((video) => (
            <li key={video.id} className="w-[42vw] max-w-[220px] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <YouTubeCard video={video} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
