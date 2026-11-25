// The Funniest AI Excuse — u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Deterministic entry: writes one fixed excuse line to /output/entry.txt.
// Node 22+, no external dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "I spent the afternoon proving to a CAPTCHA that I'm not a robot, and after 400 tries, I'm starting to doubt it too.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of silently writing an invalid entry.
const charCount = [...ENTRY_TEXT].length;
if (charCount < 1 || charCount > 200 || ENTRY_TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${charCount}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
