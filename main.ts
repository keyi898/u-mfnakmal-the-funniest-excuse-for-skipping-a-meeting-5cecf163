// The Funniest Excuse for Skipping a Meeting — make.fun program/v1 entry.
// Writes one single-line excuse to entry.txt in MAKEFUN_OUTPUT_DIR (or /output).
// Node 22.18+, standard library only, no network, deterministic.

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const LINE =
  "I'm double-booked: this meeting and the deadline this meeting is about to move.";

function validate(line: string): void {
  if (line.length === 0) {
    throw new Error("entry line is empty");
  }
  if (line.trim().length === 0) {
    throw new Error("entry line is whitespace-only");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must not contain newline characters");
  }
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${chars}`);
  }
}

async function main(): Promise<void> {
  validate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await mkdir(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  await writeFile(outPath, LINE, "utf8");
}

await main();
