export type VideoOrientation = 'portrait' | 'landscape';
export type VideoCategory = 'testimonial' | 'work';

export interface Video {
  id: string;
  title: string;
  orientation: VideoOrientation;
  category: VideoCategory;
}

/**
 * Titles come from each video's YouTube title (hashtags and emoji removed).
 * Orientation was checked against the actual video dimensions, not the URL format.
 */
export const videos: Video[] = [
  // Happy Clients in Their Own Words
  {
    id: 'JJ5aj9pfdTo',
    title: 'What Our Client Says About Working With Akande Marketing Concepts!',
    orientation: 'portrait',
    category: 'testimonial',
  },
  {
    id: 'bRgKTk_mV9M',
    title: 'Real Experiences. Genuine Results. Strategic Growth.',
    orientation: 'portrait',
    category: 'testimonial',
  },
  {
    id: '7lf8lRRuuXU',
    title: 'The Numbers Tell a Story. The Strategy Makes the Difference.',
    orientation: 'portrait',
    category: 'testimonial',
  },

  // Video Reviews of My Work
  {
    id: '9fx6tXVrVpw',
    title: 'Marketing That Goes Beyond Just Getting Traffic!',
    orientation: 'landscape',
    category: 'work',
  },
  {
    id: 'xpxyPryv3KA',
    title: 'What Happens When Strategy Meets Execution?',
    orientation: 'landscape',
    category: 'work',
  },
  {
    id: 'AIJeaMhjC00',
    title: 'A Look at Our Creative Work',
    orientation: 'landscape',
    category: 'work',
  },
  {
    id: 'YQWIbSylB-U',
    title: 'Designed With Purpose. Built to Make an Impression.',
    orientation: 'landscape',
    category: 'work',
  },
  {
    id: 'Ktbe3vO8HSY',
    title: 'Shopify Sales Results',
    orientation: 'landscape',
    category: 'work',
  },
  {
    id: 'FkmmEnFqwmw',
    title: 'Store Growth',
    orientation: 'landscape',
    category: 'work',
  },
  {
    id: '0qP0dCRNpZ4',
    title: 'Your Email List Could Be Generating More Revenue Than You Think',
    orientation: 'landscape',
    category: 'work',
  },
  {
    id: 'wiX8L9ZRnlU',
    title: 'From E-commerce Challenges to Growth Opportunities',
    orientation: 'portrait',
    category: 'work',
  },
  {
    id: 'CafSEi7EWI8',
    title: 'Akande Marketing Concepts: Strategy in Action',
    orientation: 'portrait',
    category: 'work',
  },
  {
    id: 'cl4XMnp5gOU',
    title: 'Helping Businesses Move From Potential to Performance',
    orientation: 'portrait',
    category: 'work',
  },
];

export const testimonialVideos = videos.filter((v) => v.category === 'testimonial');
export const workVideos = videos.filter((v) => v.category === 'work');

export const youtubeUrl = (id: string) => `https://youtu.be/${id}`;
