/**
 * entry.png - the artifact this repository exists to ship.
 *
 * Picture a broadsheet printed on cream newsprint: that is entry.png, a
 * 1024x1024 page that compresses all of Thursday 19 November 2026 into a
 * single view. A masthead opens the page, its red date tab stamping the
 * edition with the day. Under it, a strip of number tiles gives the day
 * in figures - a 9-6 ICJ vote on genocide, Anthropic priced at $81bn for
 * its IPO, an M5.7 quake shaking Kumamoto, and UK inflation running at
 * 3.6 percent. From there the page widens out: three hero cards lead with
 * the three-way summit held in Shenzhen, the ICJ's Myanmar ruling, and
 * Anthropic's Nasdaq debut; five secondary cards and seven tertiary cards
 * fill in the rest of the world's day; twenty-four evening briefs, each
 * tagged by region, sweep along the bottom; and a date-check footer draws
 * the line between genuine 19 November events and Wednesday carryover.
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
