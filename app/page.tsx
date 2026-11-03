import Link from 'next/link';
import AboutSection, { SkillsSection } from '@/components/sections/AboutSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import EducationSection from '@/components/sections/EducationSection';
import TrustBadges from '@/components/sections/TrustBadges';
import VideoGrid from '@/components/video/VideoGrid';
import { featuredWorkVideos, testimonialVideos, workVideos } from '@/data/videos';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section id="about" aria-label="About" className="scroll-mt-20 space-y-12">
        <AboutSection />

        <section aria-labelledby="testimonials-heading">
          <h3 id="testimonials-heading" className="section-title">
            Happy Clients in Their Own Words
          </h3>
          <div className="mt-5">
            <VideoGrid videos={testimonialVideos} />
          </div>
        </section>

        <TrustBadges />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
      </section>

      <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-20">
        <h2 id="reviews-heading" className="section-eyebrow">
          Reviews
        </h2>
        <p className="mt-3 text-2xl font-bold text-heading">Video Reviews of My Work</p>
        <div className="mt-6">
          <VideoGrid videos={featuredWorkVideos} />
        </div>
        <Link href="/reviews" className="btn-primary mt-8 inline-flex">
          View all video reviews ({workVideos.length})
          <i className="ri-arrow-right-line" aria-hidden="true" />
        </Link>
      </section>

      <ContactSection />
    </div>
  );
}
