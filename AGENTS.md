# AGF Group - AI Agent Guide

## Tech Stack
- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4 (`@tailwindcss/postcss`) + global CSS (`globals.css`) + CSS custom properties
- **Icons:** lucide-react
- **i18n:** Custom React Context (`LanguageContext`), ES/EN translations in `src/lib/translations.ts`

## Project Structure
```
src/
  app/              # App Router pages (home, about-us, contact-us, policies, products, service)
  components/       # 13 components (Navbar, Hero, Sectors, Services, WhyAGF, Footer, etc.)
  context/          # LanguageContext.tsx
  lib/              # site-nav.ts, translations.ts
public/             # Static images (.webp, .svg)
scripts/            # prepare-webuzo.mjs — deployment prep
webuzo_deploy/      # Self-contained deploy folder (upload this to Webuzo)
```

## Key Conventions
- **Path alias:** `@/*` → `./src/*` (configured in tsconfig.json)
- **Components:** `"use client"` directive for interactivity, default exports
- **CSS:** BEM-like class naming (`.nav-wrapper`, `.sector-card`), CSS variables `--agf-*`
- **Colors:** `--agf-green: #3b5628`, `--agf-yellow: #c0c049`, `--agf-dark: #1a1a1a`, `--agf-gray: #f5f5f0`
- **Fonts:** Inter (body) + Outfit (headings) via Google Fonts
- **Images:** From `/public/` via `next/image`, unoptimized (set in next.config.mjs)
- **Navigation:** Defined in `src/lib/site-nav.ts`, labels come from translations
- **i18n:** All text content in `translations.ts` under `es` / `en` keys; `useLang()` hook returns `{ lang, t, toggleLang }`
- **Metadata:** SEO metadata defined in `src/app/layout.tsx`

## Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build (output: standalone) |
| `npm start` | Run production server locally |
| `npm run lint` | Run Next.js lint |
| `npm run deploy:webuzo` | Build + prepare `webuzo_deploy/` folder |

## Deployment to Webuzo (Manual Upload)

### Prerequisites
- Webuzo Node.js app configured with **Node 18.17+**
- **SSH access** to Webuzo (to install production deps)
- FTP or Webuzo File Manager to upload the zip

### Step-by-Step

```powershell
# 1. Build the project (local Windows machine)
cd C:\Users\luisi\Documents\AGF\AGF
npm run build
node scripts\prepare-webuzo.mjs

# 2. Zip the deploy folder (node_modules already excluded by the script)
Compress-Archive -Path webuzo_deploy\* -DestinationPath webuzo_deploy.zip -Force
```

3. **Upload** `webuzo_deploy.zip` via Webuzo File Manager or FTP, then extract.

4. **SSH into Webuzo** and install deps for Linux:
   ```bash
   cd /path/to/extracted/folder
   npm install --production
   ```

5. **Configure Webuzo Node.js app** (in the Node.js Selector):
   - Application root → the extracted folder
   - Entry point → `server.js`
   - Node version → 18.17+

6. **Restart the app** from Webuzo Node.js Selector and visit your URL.

### Why this works
- `.next/static/` is copied to both `.next/static/` (for the Node server) and `public/_next/static/` (for Apache to serve directly). This fixes 404 errors on `/_next/static/*`.
- `node_modules/` is intentionally excluded — Windows binaries won't run on Linux. You install them on the server.
- The deploy script (`scripts/prepare-webuzo.mjs`) handles this automatically.
