# SendCardly 💌

Create and send beautiful digital greeting cards. Free, no sign-up required.

![SendCardly](https://img.shields.io/badge/SendCardly-Live-black?style=for-the-badge)

## Features

- 8 occasion types (Celebrate, Thank You, Love, Just Because, I'm Sorry, Hype Up, Congrats, Miss You)
- 28 background options across Gradients, Solids, and Textures
- 9 card layouts across Classic, Editorial, and Photo styles
- 12 Google Fonts across Elegant, Modern, Handwritten, and Display categories
- Draggable emoji stickers with 84 emojis across 7 categories
- Photo upload support with multiple frame styles
- Message prompts tailored to each occasion
- Envelope reveal animation for recipients
- Share via Email, Text, Copy Link, or native device share
- Fully responsive and accessible

## Tech Stack

- React 18
- Vite 6
- Google Fonts
- Deployed on GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A GitHub account
- Git installed

### Local Development

1. Clone the repo:

```bash
git clone https://github.com/YOUR_USERNAME/sendcardly.git
cd sendcardly
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open http://localhost:5173/sendcardly/ in your browser.

## Deploy to GitHub Pages

### First Time Setup

1. Create a new repository on GitHub called `sendcardly`

2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit - SendCardly v1"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sendcardly.git
git push -u origin main
```

3. Install dependencies and deploy:

```bash
npm install
npm run build
npm run deploy
```

4. Go to your repo on GitHub, then Settings > Pages. Under "Build and deployment", set the source to "Deploy from a branch" and select the `gh-pages` branch.

5. Your site will be live at: `https://YOUR_USERNAME.github.io/sendcardly/`

### Updating the Site

After making changes:

```bash
npm run build
npm run deploy
```

Or just push to main and redeploy.

### Using a Custom Domain

1. In your repo, go to Settings > Pages > Custom domain
2. Enter your domain (e.g., `sendcardly.com`)
3. Add a CNAME record with your DNS provider pointing to `YOUR_USERNAME.github.io`
4. Update `vite.config.js` and change the `base` to `'/'`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

5. Create a `public/CNAME` file with your domain:

```
sendcardly.com
```

6. Rebuild and redeploy:

```bash
npm run build
npm run deploy
```

## Project Structure

```
sendcardly/
  index.html          # Entry HTML with OG meta tags and font loading
  package.json        # Dependencies and scripts
  vite.config.js      # Vite config with GitHub Pages base path
  public/             # Static assets
  src/
    main.jsx          # React entry point
    App.jsx           # Full application (single-file for simplicity)
```

## Roadmap

- QR Code sharing
- Card gallery (save and revisit cards)
- Card packs (themed design sets)
- Reply cards (recipient sends one back)
- Backend for persistent card URLs and analytics

## License

MIT

---

Built with care by Melvin.
