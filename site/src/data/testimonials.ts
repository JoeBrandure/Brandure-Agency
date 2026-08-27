/**
 * Client testimonials.
 *
 * ⚠️ EVERY QUOTE BELOW IS A PLACEHOLDER AND THE PAGE SAYS SO.
 *
 * The section is built and working; the words are not real. They are written
 * in the register a real quote from each of these four clients might take, so
 * the layout can be judged — and each is marked on the card itself, not only
 * in a footnote.
 *
 * The four brands ARE real and their results are the ones Joe supplied. The
 * quotes are not. Publishing invented testimonials on a site whose entire
 * proposition is "we measure rather than assert" would contradict it on the
 * page directly above the measurement, so this must not go live as-is.
 *
 * TO MAKE IT REAL: replace `quote`, `name` and `role` with what the client
 * actually said and set `placeholder: false`. The flag disappears from that
 * card automatically. Where a client will not give a name, use their role and
 * company alone rather than inventing a person.
 *
 * NO PHOTOGRAPHS. The reference design pulled avatars from Unsplash — stock
 * photographs of people who are not the client, presented as if they were. A
 * brand monogram is honest and needs no external host.
 */
export interface Testimonial {
  quote: string;
  /** Person, or an empty string where only the company is named. */
  name: string;
  role: string;
  /** Matches a slug in public/logos/ so the monogram picks up the brand. */
  brand: string;
  initials: string;
  accent: 'cobalt' | 'violet' | 'teal' | 'deep';
  placeholder: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'We had no idea we were invisible in ChatGPT until the first report landed. It named three competitors and not us, on the exact question our buyers ask.',
    name: 'Placeholder name',
    role: 'Placeholder role',
    brand: 'Lurio',
    initials: 'L',
    accent: 'cobalt',
    placeholder: true,
  },
  {
    quote: 'The part that convinced me was the control set. They showed the questions they had not touched moving differently to the ones they had.',
    name: 'Placeholder name',
    role: 'Placeholder role',
    brand: 'Viveonix',
    initials: 'V',
    accent: 'violet',
    placeholder: true,
  },
  {
    quote: 'Our SEO agency could not explain why we were missing from AI answers. This was the first time anyone showed us the actual sources the answers were built from.',
    name: 'Placeholder name',
    role: 'Placeholder role',
    brand: 'Little Lockets London',
    initials: 'LL',
    accent: 'teal',
    placeholder: true,
  },
  {
    quote: 'They told us in week two that one of our categories was not worth the retainer yet. That is when I started trusting the rest of it.',
    name: 'Placeholder name',
    role: 'Placeholder role',
    brand: 'Fresh Gym',
    initials: 'FG',
    accent: 'deep',
    placeholder: true,
  },
  {
    quote: 'Every number in the monthly report traces back to a run we can see. No score on its own, no dashboard we have to take on faith.',
    name: 'Placeholder name',
    role: 'Placeholder role',
    brand: 'Lurio',
    initials: 'L',
    accent: 'violet',
    placeholder: true,
  },
  {
    quote: 'Getting mentioned on the sites the models actually cite was slower than we wanted and worth more than everything else combined.',
    name: 'Placeholder name',
    role: 'Placeholder role',
    brand: 'Viveonix',
    initials: 'V',
    accent: 'cobalt',
    placeholder: true,
  },
];
