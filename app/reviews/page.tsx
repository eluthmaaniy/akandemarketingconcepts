import type { Metadata } from 'next';
import Link from 'next/link';
import VideoGrid from '@/components/video/VideoGrid';
import { workVideos } from '@/data/videos';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Video Reviews | Akande Marketing Concepts',
  description:
    'Watch video reviews of Shopify, Google Shopping, SEO, CRO and marketing automation work by Akande Marketing Concepts.',
  path: '/reviews',
});

export default function ReviewsPage() {
  return (
    <section aria-labelledby="reviews-heading">
      <Link
        href="/"
        className="inline-flex items-center gap-1 rounded text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <i className="ri-arrow-left-line" aria-hidden="true" /> Back to profile
      </Link>
      <h2 id="reviews-heading" className="section-eyebrow mt-6">
        Reviews
      </h2>
      <p className="mt-3 text-2xl font-bold text-heading">Video Reviews of My Work</p>
      <div className="mt-6">
        <VideoGrid videos={workVideos} />
      </div>
    </section>
  );
}
