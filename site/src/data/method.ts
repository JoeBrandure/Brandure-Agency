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
    d: 'We find out which engines your buyers actually use, and what each one says about your category right now.',
    a: 'cobalt',
    when: 'Week 1',
    does: [
      'We agree the questions with you first. The ones someone types when they’re choosing a supplier, not reading around the subject.',
      'Every question goes to all five engines, signed out, more than once. One run tells you almost nothing.',
      'Every answer gets marked the same way: named with a source, named without one, or not there at all.',
    ],
    rules:
      'The idea that checking ChatGPT tells you where you stand. The five disagree constantly. One averaged score won’t tell you which is costing you business.',
  },
  {
    k: 'C',
    name: 'Cause',
    d: 'We work out why you’re missing. There are three possible reasons and they need completely different fixes.',
    a: 'violet',
    when: 'Week 2',
    does: [
      'It can’t identify you. The AI is unsure who you are or what you sell, so it won’t put your name forward.',
      'It can’t find anything about you. It knows who you are, but none of the sources it trusts mention you.',
      'It prefers someone else. It knows you, the mentions exist, and it still names two competitors. This is the hard one, and we’d rather tell you early.',
    ],
    rules:
      'The assumption that one fix covers it. Publishing more pages helps with the second problem and does nothing for the other two. That’s why “just write more content” is the advice everyone gives and nobody gets much from.',
  },
  {
    k: 'A',
    name: 'Act',
    d: 'We do the work, and which work we do depends entirely on what stage two found.',
    a: 'teal',
    when: 'Ongoing',
    does: [
      'We make the basic facts about your business consistent everywhere an AI can find them. It stops hesitating over who you are.',
      'We write pages an AI can quote from directly, instead of pages it has to rewrite and therefore skips.',
      'We go after mentions on the sites your category’s answers are actually built from. This is the slow part, and the part that moves it.'
    ],
    rules:
      'The assumption that this is a website job. Most of an AI answer comes from what other sites say about you, so most of the work happens somewhere you don’t control.',
  },
  {
    k: 'N',
    name: 'Net',
    /* Was "Null", which named our instrument — a null condition — and
       described the one thing in the method we deliberately do NOT do. It read
       as a stage the client was paying for and getting nothing from. The
       mechanism is unchanged; what changed is whose side it’s stated from.
       Gross against net is a distinction this buyer already uses every day. */
    d: 'Every month we show you what moved because of us, with your category’s own movement taken out of the figure.',
    a: 'deep',
    when: 'Monthly',
    does: [
      'We set aside a group of your questions at the start and never touch them. That gives your category somewhere to show its own movement.',
      'Both groups get measured again together. Same day, same engines, same conditions.',
      'The gap between them is your net gain, and it’s the first number in the report.',
    ],
    rules:
      'A number that went up being sold to you as a result. These engines move on their own. Models get updated, competitors do things, sources get re-indexed. Part of any rise was never down to your agency. Everyone else reports the rise. We report the share we caused.',
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
    t: 'The ones we worked on moved. The ones we left alone didn’t.',
    verdict: 'Net gain. That was us.',
    d: 'The gap between the two lines is what you paid for. It’s the first number in your report. Most agencies can’t show you this picture, because they never set anything aside to compare against.',
    a: 'teal',
    tracked: [18, 22, 30, 44, 58, 70],
    control: [20, 19, 22, 21, 23, 22],
  },
  {
    t: 'Both moved, by about the same amount.',
    verdict: 'Net zero. Your category moved, we didn’t.',
    d: 'An AI update or a competitor going quiet lifts everybody at once. Your headline number looks great. Your net number is nothing. That’s what we’ll tell you, even though it costs us the credit.',
    a: 'violet',
    tracked: [18, 26, 36, 48, 60, 68],
    control: [20, 27, 35, 46, 57, 66],
  },
  {
    t: 'Neither moved.',
    verdict: 'Nothing has worked yet.',
    d: 'The awkward one. One month like this tells us where to push harder. Three months like this and we change the plan or end it, and we’ll be the ones to raise it.',
    a: 'deep',
    tracked: [18, 20, 19, 21, 20, 22],
    control: [20, 19, 21, 20, 22, 21],
  },
] as const;

/** What SCAN deliberately is not. Short, because the point is the contrast. */
export const NOT_SCAN = [
  { t: 'Not a single visibility score', d: 'One number covering five engines can’t tell you which one to go and fix. You get each engine on its own, every time.' },
  { t: 'Not a dashboard login', d: 'A live chart you can’t check is just a claim with a graph attached. Every figure we give you traces back to a run you can look at.' },
  { t: 'Not a list of what we did', d: 'Hours worked isn’t a result. The report opens with your net gain on each engine, then explains what caused it.' },
] as const;
