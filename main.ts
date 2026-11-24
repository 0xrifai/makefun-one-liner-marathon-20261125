import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My car's check-engine light has been on for so long, I've stopped calling it a warning and started calling it a night-light.";

if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry length ${LINE.length} is outside 1-280 chars`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify byte-for-byte: the grader runs this program with the
// repo mounted read-only, so a failed or partial write must surface here.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: /output/entry.txt does not match the entry");
}
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
