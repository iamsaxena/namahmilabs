# Namahmi Labs Website

AI-first landing page for Namahmi Labs Pvt. Ltd., built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lenis, and Lucide Icons.

## Upload to GitHub

1. Create a new GitHub repository.
2. Upload the files from `NLPL-vercel-ready.zip`.
3. Confirm `package.json` is visible immediately when you open the GitHub repository. It should not be inside another folder.
3. Commit the upload to the `main` branch.

## Deploy on Vercel

1. Open Vercel and choose **Add New Project**.
2. Import the GitHub repository.
3. Use these defaults:
   - Framework Preset: `Next.js`
   - Install Command: `pnpm install`
   - Build Command: `pnpm build`
   - Output Directory: leave empty
   - Root Directory: the folder that contains `package.json`
4. Click **Deploy**.

If Vercel shows `404: NOT_FOUND`, check that you did not upload this project inside an extra nested folder and that the Vercel Root Directory points to the folder containing `package.json`, `app/page.tsx`, and `public/namahmi-logo.png`.

## Main Files

- `app/page.tsx` is the simple Next.js entry page.
- `components/MainPage.tsx` contains the complete Namahmi Labs website UI.

## Local Commands

```bash
pnpm install
pnpm build
pnpm start
```
