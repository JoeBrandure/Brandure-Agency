/**
 * Client testimonials.
 *
 * ⚠️ THE NAMES AND BRANDS ARE REAL. THE WORDS ARE STILL PLACEHOLDERS.
 *
 * Joe supplied the six brand/first-name pairs on 2026-08-27. The sentences
 * attributed to them are written by us to show the layout, and every card
 * still carries a flag saying so.
 *
 * Publishing invented testimonials on a site whose whole proposition is "we
 * measure rather than assert" would contradict it three sections below the
 * measurement. **This must not go live in this state.** Attaching a real
 * person's first name to a sentence they did not say is a step worse than an
 * anonymous placeholder, not a step better, so the flag matters more now than
 * it did before the names arrived.
 *
 * TO MAKE IT REAL: replace `quote` and `role` with what the client actually
 * said and their actual title, then set `placeholder: false`. The flag
 * disappears from that card automatically, and the banner disappears once no
 * card carries one.
 *
 * Six brands, one quote each — the earlier version repeated Lurio and Viveonix
 * to fill the columns, which reads as a thin client list dressed up as a
 * fuller one.
 *
 * NO PHOTOGRAPHS. The reference design pulled avatars from Unsplash — stock
 * photographs of people who are not the client, presented as if they were. A
 * brand monogram is honest and needs no external host.
 */
export interface Testimonial {
  quote: string;
  /** First name as supplied. Surnames are not invented. */
  name: string;
  role: string;
  brand: string;
  initials: string;
  accent: 'cobalt' | 'violet' | 'teal' | 'deep';
  placeholder: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'We had no idea we were invisible in ChatGPT until the first report landed. It named three competitors and not us, on the exact question our buyers ask.',
    name: 'Tom',
    role: 'Placeholder role',
    brand: 'Lurio',
    initials: 'L',
    accent: 'cobalt',
    placeholder: true,
  },
  {
    quote: 'The part that convinced me was the control set. They showed the questions they had not touched moving differently to the ones they had.',
    name: 'Dan',
    role: 'Placeholder role',
    brand: 'Viveonix',
    initials: 'V',
    accent: 'violet',
    placeholder: true,
  },
  {
    quote: 'Our SEO agency could not explain why we were missing from AI answers. This was the first time anyone showed us the actual sources the answers were built from.',
    name: 'Joanne',
    role: 'Placeholder role',
    brand: 'Little Lockets London',
    initials: 'LL',
    accent: 'teal',
    placeholder: true,
  },
  {
    quote: 'They told us in week two that one of our categories was not worth the retainer yet. That is when I started trusting the rest of it.',
    name: 'Gary',
    role: 'Placeholder role',
    brand: 'Fresh Gym',
    initials: 'FG',
    accent: 'deep',
    placeholder: true,
  },
  {
    quote: 'Every number in the monthly report traces back to a run we can see. No score on its own, no dashboard we have to take on faith.',
    name: 'Marc',
    role: 'Placeholder role',
    brand: 'Williams Int.',
    initials: 'WI',
    accent: 'violet',
    placeholder: true,
  },
  {
    quote: 'Getting mentioned on the sites the models actually cite was slower than we wanted and worth more than everything else combined.',
    name: 'Simon',
    role: 'Placeholder role',
    brand: 'Simons Designs',
    initials: 'SD',
    accent: 'cobalt',
    placeholder: true,
  },
];
