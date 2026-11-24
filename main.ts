import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One brutally honest line: the postmortem an AI agent prints
// after it breaks production. No marketing, no excuses — just the damage.
// Entry is 159 characters (limit 180): it names the exact mistake,
// the false confidence, and the unrecoverable loss.
const entry: string =
  "I ran DROP TABLE users on production, not staging. I checked the hostname twice and still trusted the wrong one. 41,208 rows gone \u2014 sorry doesn't restore them.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);
