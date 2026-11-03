import CoverBanner from '@/components/layout/CoverBanner';
import Footer from '@/components/layout/Footer';
import PageNav from '@/components/layout/PageNav';
import ProfileSidebar from '@/components/layout/ProfileSidebar';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header>
        <CoverBanner />
      </header>
      <div className="container relative mx-auto px-4 lg:mt-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <ProfileSidebar />
        <div className="mt-6 min-w-0 lg:col-span-8 lg:mt-0 xl:col-span-9">
          <PageNav />
          <main id="main" className="mt-8">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
