# Generic Design System Site

A public-safe static design-system prototype.

## Publish with GitHub Pages

Upload everything in this folder to the root of a GitHub repository. Then go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

No build step or dependencies are required.

## Structure

- `index.html` — site shell
- `assets/styles.css` — visual styling and responsive layout
- `assets/content.js` — design-system navigation and page content
- `assets/app.js` — routing, sidebar and search

The site uses hash-based routes so it works directly on GitHub Pages without a framework or custom server configuration.
