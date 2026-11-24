// Funniest Autocorrect Fail — make.fun bounty
// u-zeroxfive-funniest-autocorrect-fail-ddf82154
//
// One line, one autocorrect slip: a kid texting mom about homework,
// except the phone turned "homework" into "homewrecker".

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Mom, I can't come home yet — I still have three hours of homewrecker to finish before tomorrow's test.";

function resolveOutputDir(): string {
  const requested = process.env.OUTPUT_DIR ?? "/output";
  try {
    mkdirSync(requested, { recursive: true });
    return requested;
  } catch {
    const fallback = "./output";
    mkdirSync(fallback, { recursive: true });
    return fallback;
  }
}

function main(): void {
  // Gate: a single line of 1-199 characters, not only whitespace.
  if (LINE.length < 1 || LINE.length > 199) {
    throw new Error(`Line must be 1-199 characters, got ${LINE.length}.`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("Line must not be only whitespace.");
  }
  if (LINE !== LINE.trim()) {
    throw new Error("Line must not start or end with whitespace.");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("Line must be a single line.");
  }

  const dir = resolveOutputDir();
  const path = join(dir, "entry.txt");
  // No trailing newline: the file holds exactly the line, nothing else.
  writeFileSync(path, LINE, "utf8");

  const back = readFileSync(path, "utf8");
  if (back !== LINE) {
    throw new Error(
      "Read-back verification failed: entry.txt does not match the line exactly.",
    );
  }

  console.log(`Wrote ${LINE.length} characters to ${path}`);
}

main();
