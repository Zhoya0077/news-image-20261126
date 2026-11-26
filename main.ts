// news-image-20261126 — entry runner
// Copies the pre-rendered front page (entry.png) into the output directory
// as entry.png. No network, no randomness: the output is byte-identical
// on every run.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Self-check: the copy must be byte-for-byte the same size as the source.
// A mismatch means the copy was truncated or corrupted, so fail loudly
// instead of silently shipping a broken entry.
const sourceBytes = statSync(source).size;
const bytes = statSync(target).size;
if (bytes !== sourceBytes) {
  throw new Error(
    `entry.png copy failed self-check: wrote ${bytes} bytes, expected ${sourceBytes}`,
  );
}
console.log(`Wrote ${target} (${bytes} bytes, verified against source)`);
