// Central registry of blog posts.
// To add a post: create a file in src/posts/, then import it and add it below.
import beautyOfLearning from '../posts/beauty-of-learning-begins-with-why.jsx';

// Newest first.
export const posts = [beautyOfLearning].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
);

export function getPostBySlug(slug) {
    return posts.find((p) => p.slug === slug);
}

// Render an ISO date (e.g. "2026-07-26") as "July 26, 2026".
export function formatDate(iso) {
    return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
