import type { Metadata } from 'next';
import { profile } from '@/data/profile';

const cloudinary = (transform: string) =>
  profile.avatar.replace('/image/upload/', `/image/upload/${transform}/`);

export const siteMetadata = {
  siteName: profile.name,
  defaultTitle: 'Akande Marketing Concepts | Shopify Growth & E-commerce Marketing',
  defaultDescription:
    'Akande Marketing Concepts helps Shopify businesses grow with Shopify optimization, Google Shopping, SEO, conversion rate optimization and marketing automation. Serving clients from Canada and Nigeria.',
  url: profile.siteUrl,
  ogImage: cloudinary('c_fill,g_face,w_1200,h_630'),
  favicon: cloudinary('c_fill,g_face,w_64,h_64,f_png'),
  appleIcon: cloudinary('c_fill,g_face,w_180,h_180,f_png'),
};

export function createMetadata(): Metadata {
  const { defaultTitle: title, defaultDescription: description } = siteMetadata;
  return {
    metadataBase: new URL(siteMetadata.url),
    title,
    description,
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      siteName: siteMetadata.siteName,
      title,
      description,
      url: '/',
      images: [{ url: siteMetadata.ogImage, width: 1200, height: 630, alt: profile.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteMetadata.ogImage],
    },
    icons: {
      icon: [{ url: siteMetadata.favicon, type: 'image/png', sizes: '64x64' }],
      apple: [{ url: siteMetadata.appleIcon, sizes: '180x180' }],
    },
  };
}
