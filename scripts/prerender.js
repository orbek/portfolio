// Runs after the client and SSR builds. Writes one static HTML file per route
// into dist/, then removes the temporary SSR bundle.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, routes } = await import(path.join(ssrDir, 'entry-server.js'));
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

// Absolute origin for link-preview tags (og:image must be an absolute URL).
const SITE_URL = 'https://www.databarbosa.com';

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

for (const route of routes) {
    // data-prerendered tells main.jsx which route this HTML belongs to, so it
    // only hydrates when the URL matches (the 404.html redirect can land any
    // path on the home page's HTML).
    let html = template.replace(
        '<div id="root"></div>',
        `<div id="root" data-prerendered="${route.path}">${render(route.path)}</div>`,
    );

    if (route.title) {
        const title = escapeAttr(route.title);
        html = html
            .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
            .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
            .replace(/(<meta property="og:type" content=")[^"]*"/, '$1article"');
    }
    if (route.description) {
        const description = escapeAttr(route.description);
        html = html
            .replace(/(<meta name="description" content=")[^"]*"/, `$1${description}"`)
            .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${description}"`);
    }

    if (route.image) {
        const image = escapeAttr(`${SITE_URL}${route.image}`);
        const url = escapeAttr(`${SITE_URL}${route.path}`);
        html = html.replace(
            '</head>',
            `    <meta property="og:image" content="${image}" />\n`
            + '    <meta property="og:image:width" content="1200" />\n'
            + '    <meta property="og:image:height" content="630" />\n'
            + `    <meta property="og:url" content="${url}" />\n`
            + '    <meta name="twitter:card" content="summary_large_image" />\n'
            + `    <meta name="twitter:image" content="${image}" />\n`
            + '  </head>',
        );
    }

    const outFile = route.path === '/'
        ? path.join(dist, 'index.html')
        : path.join(dist, route.path.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html);
    console.log(`prerendered ${route.path}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
