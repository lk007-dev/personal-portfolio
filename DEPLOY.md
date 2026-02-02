# Deployment Guide

## Option 1: Vercel (Recommended)

Vercel is the creators of Next.js and provides the best experience with zero configuration.

### Steps:
1.  **Push your code to GitHub** (you have already done this!).
2.  Go to [Vercel.com](https://vercel.com) and Sign Up/Login with GitHub.
3.  Click **"Add New Project"**.
4.  Import your `personal-portfolio` repository.
5.  Click **"Deploy"**.

Vercel will automatically detect Next.js and build your site. You'll get a free `https://your-project.vercel.app` domain (e.g., `lalit-portfolio.vercel.app`).

---

## Option 2: GitHub Pages

If you prefer GitHub Pages, you need to configure the project for static export.

1.  Open `next.config.ts` and add `output: "export"`.
2.  Open `package.json` and update the build script to `next build`.
3.  Run `npm run build`.
4.  The `out` folder will contain your static site.
5.  You can then use `gh-pages` package to deploy this folder.

**Note**: GitHub Pages does not support dynamic server-side features (Image Optimization might need unoptimized setting), whereas Vercel supports everything out of the box.

**Recommendation**: Stick with **Vercel** for the easiest setup.
