// One Line, One Laugh: a single funny line; the sealed gate in RULES.txt allows 1-140 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I told my Roomba it was adopted. Now it bumps into walls on purpose and calls the vacuum 'Dad'.";

if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-140 non-whitespace characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
