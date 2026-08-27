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
    name: 'Null',
    d: 'A set of prompts left deliberately untouched, so a change can be attributed rather than claimed.',
    a: 'deep',
    when: 'Every re-measure',
    does: [
      'A control set carved out of the frozen prompt set at baseline and never worked on.',
      'Both sets re-measured together, on the same day, on the same engines, under the same conditions.',
      'The comparison reported whichever way it falls — including the months it shows the work did nothing.',
    ],
    rules:
      'That a rise proves we caused it. Answer engines move on their own: models update, competitors act, indexes refresh. Without a control set, every rise is a claim and every fall is an excuse.',
  },
];

/**
 * The three shapes a re-measure can take, and what each one honestly means.
 * These are the argument for the fourth stage — drawn rather than described,
 * because the whole point is that the shapes are distinguishable.
 */
export const NULL_CASES = [
  {
    t: 'Tracked moves. Control does not.',
    verdict: 'The work is the likeliest explanation.',
    d: 'The only shape that supports the invoice. It is also the only one most reporting is incapable of producing, because there is nothing to compare against.',
    a: 'teal',
    tracked: [18, 22, 30, 44, 58, 70],
    control: [20, 19, 22, 21, 23, 22],
  },
  {
    t: 'Both move together.',
    verdict: 'The category moved. We say so.',
    d: 'A model update or a competitor exit lifts everyone. Reported as a market change, not as a result — which costs us the credit and keeps the number honest.',
    a: 'violet',
    tracked: [18, 26, 36, 48, 60, 68],
    control: [20, 27, 35, 46, 57, 66],
  },
  {
    t: 'Neither moves.',
    verdict: 'Nothing has worked yet.',
    d: 'The uncomfortable one, and the reason the control set exists at all. A month of this is information. Three is a reason to change the plan or end the engagement.',
    a: 'deep',
    tracked: [18, 20, 19, 21, 20, 22],
    control: [20, 19, 21, 20, 22, 21],
  },
] as const;

/** What SCAN deliberately is not. Short, because the point is the contrast. */
export const NOT_SCAN = [
  { t: 'Not a visibility score', d: 'One number across five engines tells you nothing you can act on. Every engine is reported separately, always.' },
  { t: 'Not a dashboard', d: 'A live chart nobody can reproduce is a claim with a graph on it. Every figure traces back to a run you can see.' },
  { t: 'Not a monthly activity report', d: 'Hours spent is not a result. The report says what moved, on which engine, and whether the control set moved with it.' },
] as const;
