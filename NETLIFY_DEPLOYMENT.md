# Netlify Deployment Guide

This project is configured for deployment on Netlify with optimized build settings.

## Prerequisites
- Node.js 18+ (as specified in netlify.toml)
- npm or bun package manager
- Netlify account

## Local Setup

1. Install dependencies:
```bash
npm install
# or
bun install
```

2. Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Run development server:
```bash
npm run dev
```

4. Build locally to test:
```bash
npm run build
npm run preview
```

## Deployment Steps

### Option 1: Connect GitHub Repository (Recommended)
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select the `trilochanpatro/Lumi-re` repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Using Netlify CLI
1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Authenticate with Netlify:
```bash
netlify login
```

3. Deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

## Configuration Files

- **netlify.toml**: Main Netlify configuration (build settings, redirects, headers)
- **_redirects**: URL redirects for SPA routing
- **.env.example**: Environment variables template

## Features Configured

✅ Automatic builds on GitHub push
✅ SPA routing (all routes redirect to index.html)
✅ Security headers enabled
✅ Asset caching (1 year for /assets/*)
✅ Sourcemap disabled in production (faster builds)
✅ Console logs removed in production
✅ Node version locked to 18

## Environment Variables

Add environment variables in Netlify Dashboard:
1. Go to Site Settings → Build & Deploy → Environment
2. Add key-value pairs
3. Variables starting with `VITE_` are accessible in browser code

Example:
```
VITE_API_URL=https://api.example.com
VITE_ENABLE_ANALYTICS=true
```

## Build Optimization

The project uses:
- **Vite** for fast builds
- **React with SWC** for optimized compilation
- **Terser** for code minification
- **TailwindCSS** for utility-first styling

## Troubleshooting

**Build fails with "not a git repository":**
- Ensure you're deploying from GitHub, not local filesystem

**Routes not working:**
- The `netlify.toml` and `_redirects` files handle SPA routing

**Environment variables not loaded:**
- Variables must start with `VITE_` to be accessible in browser code
- Set them in Netlify Dashboard, not in `.env`

## Monitoring

- View build logs: Site Settings → Builds & Deploy → Build log
- Check site analytics: Analytics dashboard
- Monitor performance: Lighthouse reports in Netlify Dashboard

For more information, visit [Netlify Documentation](https://docs.netlify.com)
