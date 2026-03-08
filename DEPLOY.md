# Deploy this portfolio to GitHub Pages (same URL as before)

Your site will stay at **https://aditii2112.github.io** by using the same repo: [Aditii2112/aditii2112.github.io](https://github.com/Aditii2112/aditii2112.github.io).

## One-time setup

1. **GitHub repo**
   - Use your existing repo: `https://github.com/Aditii2112/aditii2112.github.io`
   - You will replace the old site (HTML/CSS/JS) with this new React app.

2. **GitHub Pages settings**
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**:
     - **Source**: Deploy from a branch
     - **Branch**: `main` (or your default branch)
     - **Folder**: `/docs`
   - Save. GitHub will serve the contents of the `docs/` folder at `https://aditii2112.github.io`.

## Deploy steps (every time you want to update the site)

1. **Build the site**
   ```bash
   npm run build
   ```
   This creates the `docs/` folder with the built files.

2. **Commit and push**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
   Make sure `docs/` is **not** in your `.gitignore` so the built files are committed.

3. **Wait a minute or two**  
   GitHub Actions will publish the new content. Your site will update at https://aditii2112.github.io.

## First time pushing this project to the repo (overwriting old site)

If the repo still has the old portfolio (index.html, style.css, script.js, etc.):

1. **Clone or add the remote** (from your Portfolio_Proto folder):
   ```bash
   git init
   git remote add origin https://github.com/Aditii2112/aditii2112.github.io.git
   ```

2. **Build and add the built site**:
   ```bash
   npm run build
   git add .
   git commit -m "Replace with new React portfolio"
   git push -u origin main --force
   ```
   Using `--force` overwrites the previous content so the repo only has this project (and the built `docs/`). Only do this when you are sure you want to replace the old site.

3. **Set Pages to use `/docs`** (as in One-time setup above).

After that, for future updates: run `npm run build`, then `git add .`, `git commit -m "..."`, `git push`. No need to force-push again.
