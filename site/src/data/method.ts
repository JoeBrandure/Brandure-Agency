/**
 * SCAN — the method.
 *
 * The page this feeds was a reserved route: four cards on a dark band and a
 * placeholder chip. The framework itself was already here and already good,
 * so this pass writes it up rather than replacing it.
 *
 * ONE POSITIONING DECISION IS BAKED IN HERE. The route was marked "framework
 * name and write-up follow later" in STATE.md, and this commits to SCAN as the
 * name. It is Joe's call to keep or change; changing it means editing `k` and
 * `name` below and the four headings that reference the letters. Nothing else
 * on the site depends on it.
 *
 * The fourth stage is the argument. Everything else on this page is setup for
 * it: an agency that cannot attribute a change is selling a number that went
 * up, which is not the same thing as a result.
 *
 * The N was "Null" until 2026-08-27. Same mechanism, but the word named our
 * instrument and described the one thing we deliberately do not do, so it read
 * as a stage the client pays for and gets nothing from. "Net" states it from
 * their side: the movement that is actually theirs once the market's own is
 * subtracted. Gross against net needs no explaining to this buyer.
 */

export interface Stage {
  k: string;
  name: string;
  /** One line, stated as what the stage establishes rather than what we do. */
  d: string;
  a: 'cobalt' | 'violet' | 'teal' | 'deep';
  /** Three concrete actions. Artefacts and checks, not activity. */
  does: string[];
  /** The specific wrong conclusion this stage prevents. */
  rules: string;
  when: string;
}

export const SCAN: Stage[] = [
  {
    k: 'S',
    name: 'Surface',
    d: 'Which engines decide this category, and what each one currently answers.',
    a: 'cobalt',
    when: 'Week 1',
    does: [
      'A prompt set agreed with you and frozen — the questions a buyer types when choosing, not when researching.',
      'Every prompt run on all five engines from clean, logged-out sessions, repeated rather than sampled once.',
      'Each answer coded the same way: named and cited, named without a citation, or absent.',
    ],
    rules:
      'That one engine speaks for all of them. The five disagree with each other more than they agree, and a blended score hides which one you are actually losing.',
  },
  {
    k: 'C',
    name: 'Cause',
    d: 'Why you are absent — which is three different problems wearing the same symptom.',
    a: 'violet',
    when: 'Week 2',
    does: [
      'Entity failure: the model cannot resolve who you are, so it cannot recommend you with any confidence.',
      'Source absence: the model resolves you fine, but nothing it trusts has anything to say about you.',
      'Settled preference: it knows you, sources exist, and it still prefers two incumbents. The hardest, and the one worth naming early.',
    ],
    rules:
      'That absence has one cause and one fix. Publishing more pages solves the second problem and does nothing for the first or third — which is why “more content” is the default advice and the default disappointment.',
  },
  {
    k: 'A',
    name: 'Act',
    d: 'The work itself, chosen by the cause rather than by what is easiest to bill.',
    a: 'teal',
    when: 'Ongoing',
    does: [
      'Entity corrections: the machine-readable facts about you made consistent everywhere a model can reach them.',
      'Answer-shaped content: pages a model can lift a clean, attributable paragraph from without rewriting it.',
      'Earned placement into the specific sources the answers in your category are actually built from.',
    ],
    rules:
      'That the fix is on your own website. Most answers are assembled from what other sites say about you, so most of the work is not on your domain at all.',
  },
  {
    k: 'N',
    name: 'Net',
    /* Was "Null", which named our instrument — a null condition — and
       described the one thing in the method we deliberately do NOT do. It read
       as a stage the client was paying for and getting nothing from. The
       mechanism is unchanged; what changed is whose side it is stated from.
       Gross against net is a distinction this buyer already uses every day. */
    d: 'What actually moved because of the work, once the market’s own movement has been taken out of the number.',
    a: 'deep',
    when: 'Monthly',
    does: [
      'A share of your prompts is held back at baseline and never worked on, so the market has somewhere to show itself.',
      'Held and worked prompts are re-measured together — same day, same engines, same conditions.',
      'The difference between them is your net gain. It is the figure the report leads with.',
    ],
    rules:
      'A gross number passed off as a result. Answer engines move on their own — models update, competitors act, indexes refresh — so some of any rise was never yours. Everyone else reports the rise. We report the part of it we caused.',
  },
];

/**
 * The three shapes a re-measure can take, and what each one honestly means.
 * These are the argument for the fourth stage — drawn rather than described,
 * because the whole point is that the shapes are distinguishable, and they are
 * only distinguishable if something was held back.
 */
export const NULL_CASES = [
  {
    t: 'Worked prompts move. Held prompts do not.',
    verdict: 'Net gain. The work caused it.',
    d: 'The gap between the two lines is the number your report leads with. It is also the only shape most reporting cannot produce, because nothing was held back to measure against.',
    a: 'teal',
    tracked: [18, 22, 30, 44, 58, 70],
    control: [20, 19, 22, 21, 23, 22],
  },
  {
    t: 'Both move together.',
    verdict: 'Net zero. The market moved, not us.',
    d: 'A model update or a competitor exit lifts everyone. Your gross number looks excellent. Your net number is nothing, and that is what we report — which costs us the credit and keeps the figure honest.',
    a: 'violet',
    tracked: [18, 26, 36, 48, 60, 68],
    control: [20, 27, 35, 46, 57, 66],
  },
  {
    t: 'Neither moves.',
    verdict: 'Nothing has worked yet.',
    d: 'The uncomfortable one. A month of this is information and tells us where to push. Three is a reason to change the plan or end the engagement, and we will be the ones to say so.',
    a: 'deep',
    tracked: [18, 20, 19, 21, 20, 22],
    control: [20, 19, 21, 20, 22, 21],
  },
] as const;

/** What SCAN deliberately is not. Short, because the point is the contrast. */
export const NOT_SCAN = [
  { t: 'Not a visibility score', d: 'One number across five engines tells you nothing you can act on. Every engine is reported separately, always.' },
  { t: 'Not a dashboard', d: 'A live chart nobody can reproduce is a claim with a graph on it. Every figure traces back to a run you can see.' },
  { t: 'Not a monthly activity report', d: 'Hours spent is not a result. The report leads with your net gain per engine — the movement left after the market’s own is taken out.' },
] as const;
