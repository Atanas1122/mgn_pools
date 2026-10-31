import puppeteer from 'puppeteer';
import { createServer } from 'vite';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const routes = [
  '/',
  '/commercial',
  '/residential',
  '/renovations',
  '/repair',
  '/bid',
  '/training',
  '/contacts',
  '/jobs',
  '/locations/springfield-pool-service',
  '/locations/alexandria-pool-service',
  '/locations/arlington-pool-service',
  '/locations/woodbridge-pool-service',
  '/locations/fairfax-pool-service',
  '/locations/annandale-pool-service',
  '/locations/washington-dc-pool-service',
  '/locations/mclean-pool-service',
  '/locations/great-falls-pool-service'
];

const server = await createServer({
  server: { port: 4173, strictPort: true }
});

let browser;

try {
  await server.listen();

  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of routes) {
    const page = await browser.newPage();

    try {
      await page.goto(`http://localhost:4173${route}`, {
        waitUntil: 'networkidle0'
      });

      await page.waitForSelector('h1', { timeout: 15000 });

      const html = await page.content();
      const directory = join('dist', route);
      await mkdir(directory, { recursive: true });
      await writeFile(join(directory, 'index.html'), html);

      console.log(`Prerendered: ${route}`);
    } finally {
      await page.close();
    }
  }
} finally {
  if (browser) await browser.close();
  await server.close();
}
