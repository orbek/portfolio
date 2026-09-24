import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Hydrate the prerendered HTML only when it was rendered for this URL.
// Otherwise (dev server, or a 404.html redirect onto another route's HTML)
// discard it and render from scratch.
const container = document.getElementById('root')
const normalize = (p) => p.replace(/\/+$/, '') || '/'
const prerendered = container.dataset.prerendered

if (prerendered && normalize(prerendered) === normalize(window.location.pathname)) {
  hydrateRoot(container, app)
} else {
  container.textContent = ''
  createRoot(container).render(app)
}
