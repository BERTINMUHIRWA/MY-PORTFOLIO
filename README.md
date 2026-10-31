# Bertin Muhirwa — Portfolio

A dark, modern developer/designer portfolio built with **Next.js (App Router)**, **TypeScript** and plain CSS.
It includes a working backend route (`/api/contact`) for the contact form.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

Requires Node.js 20.9 or newer.

## Edit your content

Almost everything you will want to change is in **`src/lib/data.ts`**:

| What | Where in `data.ts` |
| --- | --- |
| Name, intro, about text, email, location | `profile` |
| GitHub / LinkedIn / Instagram links | `profile.socials` |
| Photo | replace `public/images/bertin.jpg` (keep the name or change `profile.photo`) |
| CV download | replace `public/cv.pdf` |
| Stats (years, satisfaction, projects) | `stats` |
| Services and their tags | `expertise` |
| Projects (add `href` for a live link) | `projects` |
| Experience timeline | `experiences` |

Colours, spacing and fonts are CSS variables at the top of `src/app/globals.css`.

## Contact form

The form posts to `src/app/api/contact/route.ts`, which validates input, blocks bots (hidden honeypot field) and
rate-limits to 5 messages per IP per 10 minutes.

- Without any setup, messages are printed in the server console.
- To receive them by email, copy `.env.example` to `.env.local` and add a free [Resend](https://resend.com) API key.

## Deploy

Push to GitHub and import the repository on [Vercel](https://vercel.com) (add the env vars from `.env.example`,
and set `NEXT_PUBLIC_SITE_URL` to your domain).

## Structure

```
src/
  app/            layout, page, global CSS, /api/contact
  components/     Navbar, Hero, Marquee, About, Expertise, Projects, Experience, Contact, Footer
  lib/data.ts     all editable content
public/           photo, CV, static files
```
