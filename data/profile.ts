export const profile = {
  name: 'Akande Marketing Concepts',
  tagline: 'Shopify growth, Google Shopping, SEO, CRO and marketing automation for e-commerce brands.',
  locations: ['Canada', 'Nigeria'],
  languages: ['English', 'French'],
  timezones: [
    { label: 'Nigeria', timeZone: 'Africa/Lagos' },
    { label: 'Canada', timeZone: 'America/Vancouver' },
  ],
  avatar:
    'https://res.cloudinary.com/dr83qj6bf/image/upload/v1793690783/IMG-20261102-WA0001_cn28jg.jpg',
  /** Set to an image URL to replace the cover placeholder. */
  coverImage: null as string | null,
  siteUrl: 'https://akandemarketingconcepts.com',
  about: {
    headline: 'Your Store Deserves More Than Just Traffic. It Deserves Growth.',
    paragraphs: [
      'We help Shopify businesses attract the right customers, eliminate conversion barriers and build intelligent marketing systems that turn opportunities into customers.',
      'From Shopify optimization and Google Shopping to SEO, conversion rate optimization and marketing automation, we bring together the strategies that help e-commerce businesses compete, convert and grow.',
    ],
  },
  contact: {
    phones: [
      {
        label: '+2347057146447',
        href: 'tel:+2347057146447',
        whatsapp: 'https://wa.me/2347057146447',
        country: 'Nigeria',
      },
      {
        label: '+1 (236) 233-2565',
        href: 'tel:+12362332565',
        whatsapp: 'https://wa.me/12362332565',
        country: 'Canada',
      },
    ],
    youtube: {
      label: '@akandemarketingconcepts',
      href: 'https://www.youtube.com/@akandemarketingconcepts',
    },
  },
};

export const skills = [
  'Shopify Store Development & Optimization',
  'Google Merchant Center & Google Shopping',
  'Conversion Rate Optimization',
  'SEO & Organic Traffic Growth',
  'Email Marketing & CRM Automation',
  'Social Media & Customer Acquisition',
  'E-commerce Analytics & Performance Tracking',
];

export const trustBadges = [
  { name: 'Shopify Partner', icon: 'ri-shopping-bag-3-line' },
  { name: 'Google Ads', icon: 'ri-google-fill' },
  { name: 'Meta Business', icon: 'ri-facebook-circle-fill' },
  { name: 'Klaviyo', icon: 'ri-mail-send-line' },
  { name: 'TikTok Ads', icon: 'ri-tiktok-fill' },
  { name: 'Fiverr Pro', icon: 'ri-award-fill' },
];
