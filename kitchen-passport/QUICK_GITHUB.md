# Quickest way to GitHub (no terminal, ~5 minutes)

This uses GitHub's website to upload files directly — no Git, no commands.

## Before you start
Unzip `kitchen-passport.zip` so you have the `kitchen-passport` folder with all the files inside (including the `src` folder).

---

## Step 1 — Make an empty repo
1. Go to **https://github.com/new** (sign in first).
2. **Repository name:** `kitchen-passport`
3. Choose **Public**.
4. Do **NOT** check any of the "Initialize" boxes (no README, no .gitignore, no license).
5. Click **Create repository**.

## Step 2 — Upload the files
1. On the new repo page, click the link **“uploading an existing file”** (in the "…or push an existing repository" area, there's an **upload** link). Or go to `https://github.com/YOUR-USERNAME/kitchen-passport/upload/main`.
2. Open your `kitchen-passport` folder on your computer.
3. **Select all the files and the `src` folder inside it** and **drag them into the browser** upload box.
   - Drag the *contents* of the folder, not the folder itself (so files land at the repo root).
   - The `src` folder will keep its structure automatically.
4. Scroll down, and under "Commit changes" click the green **Commit changes** button.

That's it — refresh the page and your project is on GitHub. 🎉

> If drag-and-drop misses the `src` folder, click **choose your files**, or upload `src/main.jsx` and `src/KitchenPassport.jsx` in a second upload — GitHub recreates the folder if you type `src/` before the filename.

---

## Step 3 (optional) — Make it a LIVE website in 1 click
1. Go to **https://vercel.com** → **Sign up with GitHub**.
2. **Add New… → Project** → **Import** your `kitchen-passport` repo.
3. It auto-detects Vite. Just click **Deploy**.
4. ~1 minute later you get a public link like `https://kitchen-passport.vercel.app`.

Put that link on your resume and in the repo's **About** section.

---

## That's the whole process
- No API key needed — it runs free.
- No terminal needed with this method.
- To update later: on GitHub, open a file → pencil icon ✏️ to edit, or use **Add file → Upload files** again.

Prefer the command-line way instead? See `GITHUB_STEP_BY_STEP.md`.
