// Deploys to Cloudflare Workers. `vinext build` regenerates dist/server/wrangler.json
// on every build, so the custom domains are re-applied here rather than edited in place.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const CONFIG = 'dist/server/wrangler.json';
const DOMAINS = ['aifluencynow.com', 'www.aifluencynow.com'];

execFileSync('npx', ['vinext', 'build'], { stdio: 'inherit' });

const config = JSON.parse(readFileSync(CONFIG, 'utf8'));
config.routes = DOMAINS.map((pattern) => ({ pattern, custom_domain: true }));
config.workers_dev = true;
writeFileSync(CONFIG, JSON.stringify(config));

execFileSync('npx', ['wrangler', 'deploy', '--config', CONFIG], { stdio: 'inherit' });
