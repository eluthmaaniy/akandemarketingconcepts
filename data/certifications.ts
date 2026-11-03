export interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: 'Facebook Marketing & Advertising',
    issuer: 'Meta Blueprint',
    year: '2024',
    icon: 'ri-facebook-circle-fill',
  },
  {
    title: 'Google Ads Search Certification',
    issuer: 'Google Skillshop',
    year: '2024',
    icon: 'ri-google-fill',
  },
  {
    title: 'Klaviyo Email Marketing Certification',
    issuer: 'Klaviyo Academy',
    year: '2024',
    icon: 'ri-mail-send-line',
  },
];
