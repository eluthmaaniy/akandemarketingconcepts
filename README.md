# Akande Marketing Concepts — Portfolio Website

Profile site for [akandemarketingconcepts.com](https://akandemarketingconcepts.com). The homepage has About (with client testimonial videos, trusted partners, skills, education, certifications), Reviews (featured work videos) and Contact (WhatsApp form and contact cards). `/reviews` lists every work video.

## Tech stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS 3, DM Sans, Remix Icon (CDN)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Editing content

All content lives in `data/`:

- `data/profile.ts`: name, tagline, locations, languages, `timezones` (local times shown next to the "Online" status), About copy, phone numbers with their `whatsapp` links (used by the contact cards and form), YouTube channel, skills, trusted partners
- `data/videos.ts`: YouTube videos. `category` is `testimonial` (About, "Happy Clients in Their Own Words") or `work` (Reviews, "Video Reviews of My Work"). Set `orientation` to the video's real aspect (`portrait` or `landscape`). The homepage shows only the work videos listed in `featuredWorkVideos`; `/reviews` shows all of them.
- `data/education.ts`, `data/certifications.ts`

### Replacing the cover image

The cover is a placeholder. Set `coverImage` in `data/profile.ts` to an image URL (Cloudinary is already allowed in `next.config.ts`) and it replaces the placeholder automatically.

## Deploy on Vercel

1. Import the GitHub repository in Vercel (Next.js is auto-detected).
2. In Project Settings > Domains, add `akandemarketingconcepts.com` and `www.akandemarketingconcepts.com`.
3. At the domain registrar, add the DNS records Vercel shows (typically an `A` record `76.76.21.21` for the apex and a `CNAME` to `cname.vercel-dns.com` for `www`), or switch to Vercel nameservers.
