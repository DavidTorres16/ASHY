import { defineConfig } from 'vite';

// Browsers block `crossorigin` assets on file://, so opening dist/index.html from disk would
// drop the stylesheet. Stripping it keeps the built page styled even without a server.
const allowFileProtocol = {
  name: 'allow-file-protocol',
  apply: 'build',
  transformIndexHtml(html) {
    return html
      .replace(/ crossorigin/g, '')
      .replace(
        /<script type="module" src="/,
        '<script type="module" onerror="window.__ashyRevealFallback && window.__ashyRevealFallback()" src="',
      );
  },
};

// Relative asset URLs so dist/ works from any subfolder (e.g. GitHub Pages /ASHY/).
export default defineConfig({
  base: './',
  plugins: [allowFileProtocol],
});
