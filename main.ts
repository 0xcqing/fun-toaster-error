import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output'; mkdirSync(out, { recursive: true });
const msg = "TOASTER ERROR 0xTOAST: Your bread achieved enlightenment and refuses. Unplug, meditate 30s, toast again."; writeFileSync(join(out, 'entry.txt'), msg, 'utf-8');