# Deployment Guide for Bulgarian Mosaic Artistry

## GitHub Setup

1. **Create a new GitHub repository:**
   - Go to https://github.com/new
   - Repository name: `bulgarian-mosaic-artistry`
   - Description: `Bilingual mosaic artistry portfolio website with React and TypeScript`
   - Make it **Public**
   - **Don't** initialize with README (we already have one)
   - Click "Create repository"

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bulgarian-mosaic-artistry.git
   git branch -M main
   git push -u origin main
   ```

## Vercel Deployment

### Option 1: Automatic Deployment (Recommended)

1. **Connect Vercel to GitHub:**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your `bulgarian-mosaic-artistry` repository
   - Click "Import"

2. **Configure Build Settings:**
   - Framework: **Vite** (should be detected automatically)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables:**
   - Add `GEMINI_API_KEY` if you're using it (from `.env.local`)

4. **Deploy:**
   - Click "Deploy"
   - Your site will be live at: `https://bulgarian-mosaic-artistry.vercel.app`

### Option 2: Manual Deployment

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

## Project Configuration

This project is already configured for Vercel deployment with:

- ✅ **Vite** build system
- ✅ **React 19** with TypeScript
- ✅ **HashRouter** for client-side routing
- ✅ **Static assets** in `/image` folder
- ✅ **Responsive design** with TailwindCSS
- ✅ **Bilingual support** (English/Bulgarian)

## Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Notes

- The site uses **HashRouter** which works perfectly with static hosting
- All images are in the `/image` folder and will be served statically
- No server-side configuration needed
- The contact form uses mailto links (no backend required)

## Custom Domain (Optional)

After deployment, you can add a custom domain in Vercel dashboard:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
