/**
 * Client testimonials.
 *
 * The brands, the names and the roles are real. **The sentences are not.**
 * They are written in the register a quote from each of these six might take,
 * and Joe asked on 2026-08-27 for the placeholder marking to come off after
 * supplying the names and roles — so the banner and the per-card flags are
 * gone and the section reads as finished.
 *
 * That was his call to make and it is recorded here rather than argued again,
 * but the position has not changed: these are our words in a client's mouth,
 * on a site whose proposition is that we measure rather than assert. Replacing
 * `quote` with what each person actually said is the outstanding job.
 *
 * `placeholder` is kept on the interface and still works — set one back to
 * true and its card carries a flag again, and the banner returns above the
 * grid. Nothing else has to change.
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
    role: 'Co-Founder & CEO',
    brand: 'Lurio',
    initials: 'L',
    accent: 'cobalt',
    placeholder: false,
  },
  {
    quote: 'The part that convinced me was the control set. They showed the questions they had not touched moving differently to the ones they had.',
    name: 'Dan',
    role: 'CEO',
    brand: 'Viveonix',
    initials: 'V',
    accent: 'violet',
    placeholder: false,
  },
  {
    quote: 'Our SEO agency could not explain why we were missing from AI answers. This was the first time anyone showed us the actual sources the answers were built from.',
    name: 'Joanne',
    role: 'Co-Founder',
    brand: 'Little Lockets London',
    initials: 'LL',
    accent: 'teal',
    placeholder: false,
  },
  {
    quote: 'They told us in week two that one of our categories was not worth the retainer yet. That is when I started trusting the rest of it.',
    name: 'Gary',
    role: 'Founder & CEO',
    brand: 'Fresh Gym',
    initials: 'FG',
    accent: 'deep',
    placeholder: false,
  },
  {
    quote: 'Every number in the monthly report traces back to a run we can see. No score on its own, no dashboard we have to take on faith.',
    name: 'Marc',
    role: 'Founder',
    brand: 'Williams Int.',
    initials: 'WI',
    accent: 'violet',
    placeholder: false,
  },
  {
    quote: 'Getting mentioned on the sites the models actually cite was slower than we wanted and worth more than everything else combined.',
    name: 'Simon',
    role: 'Founder',
    brand: 'Simons Designs',
    initials: 'SD',
    accent: 'cobalt',
    placeholder: false,
  },
];
