/**
 * entry.png is THE THURSDAY LEDGER, a one-page news broadsheet.
 *
 * Its warm cream ground gives the image the character of a page pulled from
 * a printed Thursday edition rather than a generic digital news screen.
 * The masthead sets the paper's name and fixes the edition on Thursday
 * 19 November 2026, giving every story the same clear time and place.
 * Forty stories are arranged across the sheet so the day's news can be
 * scanned as a whole while still retaining a deliberate editorial order.
 * A stat band turns the edition's key figures into a quick visual briefing,
 * placing courts, markets, public events, and other signals side by side.
 * A region tally makes the global spread of the coverage visible at a glance
 * and helps the reader understand how the page balances its reporting.
 * The story field carries the main leads and shorter briefs in a compact
 * broadsheet rhythm, with rules and spacing keeping the dense page legible.
 * At the foot, a date-check footer separates events belonging to 19 November
 * from older carryover, closing the page with an explicit editorial check.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
