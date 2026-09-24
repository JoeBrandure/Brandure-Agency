/**
 * One place that knows the research collection holds two shapes.
 *
 * Legacy scaffolding keys on `published` / `vertical`; the September 2026
 * series keys on `datePublished` / `piece`. Every consumer — the index, the
 * feed, the OG image route, the article route — needs the same three answers,
 * so they are answered once here instead of four times with drift.
 */
import type { CollectionEntry } from 'astro:content';

type Piece = CollectionEntry<'research'>;

/** Drafts are excluded from the build, the index, the sitemap and the feed. */
export const isDraft = (p: Piece) => p.data.draft === true;

/** Everything that should be publicly listed, newest first. */
export const listable = (pieces: Piece[]) =>
  pieces.filter((p) => !isDraft(p)).sort((a, b) => sortDate(b).valueOf() - sortDate(a).valueOf());

/**
 * The date a piece is ordered and displayed by. A series piece may carry the
 * SET_ON_PUBLISH literal while it is a draft, which is not a Date — drafts are
 * never listed, so the epoch fallback only ever sorts something invisible.
 */
export function sortDate(p: Piece): Date {
  const d = p.data;
  if (d.datePublished instanceof Date) return d.datePublished;
  if (d.published instanceof Date) return d.published;
  return new Date(0);
}

/** The tag shown on a card. The series uses its position, not a vertical. */
export const tagFor = (p: Piece) =>
  p.data.vertical ?? (p.data.piece !== undefined ? `Piece ${p.data.piece}` : 'Research');
