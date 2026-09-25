// Server entry used only at build time by scripts/prerender.js. Renders each
// route to static HTML so crawlers, link previews, and AI tools see the full
// page instead of an empty <div id="root">.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import { posts } from './data/posts';

export const routes = [
    { path: '/' },
    ...posts.map((post) => ({
        path: `/blog/${post.slug}`,
        title: `${post.title} | Carlos Barbosa`,
        description: post.excerpt,
        image: post.cover,
    })),
];

export function render(url) {
    return renderToString(
        <StrictMode>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </StrictMode>,
    );
}
