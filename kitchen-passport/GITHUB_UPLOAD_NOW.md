# Upload to GitHub right now (web, no terminal)

You have GitHub open — follow these clicks in order. ~5 minutes.

## Before anything: unzip
Make sure you've unzipped the project so you have a `kitchen-passport` folder containing:
`README.md`, `package.json`, `vite.config.js`, `index.html`, `.gitignore`, and a **`src`** folder with `main.jsx` and `KitchenPassport.jsx`.

---

## Step 1 — Create the repository
1. Top-right of GitHub, click the **+** → **New repository** (or go to **github.com/new**).
2. **Repository name:** `kitchen-passport`
3. Set it to **Public**.
4. Leave **all three** "Initialize this repository" boxes **UNCHECKED** (no README, no .gitignore, no license). This matters — checking them breaks the upload.
5. Click the green **Create repository**.

## Step 2 — Open the upload screen
On the page that appears, find the line that says *“…or upload an existing file”* and click the **upload an existing file** link.
(If you can't find it, go straight to: `https://github.com/YOUR-USERNAME/kitchen-passport/upload/main`)

## Step 3 — Drag your files in
1. Open your `kitchen-passport` folder on your computer.
2. Select **everything inside it** — all the files **and** the `src` folder.
3. **Drag them into the big dashed box** in the browser.
   - Drag the **contents**, not the outer folder, so files land at the top level.
   - Wait until every file appears in the list (the `src` folder keeps its structure).

## Step 4 — Save
1. Scroll down to **Commit changes**.
2. Leave the default message (or type "initial upload").
3. Click the green **Commit changes**.

Refresh the page — your project is now on GitHub. ✅

---

## Step 5 — Make it look finished (optional, 30 sec)
- On the repo page, click the ⚙️ gear next to **About** (right side).
- Add a short description: `AI-powered recipe generator built with React`.
- Later, paste your live demo link here too.

---

## If something looks off
- **Files ended up inside an extra folder** (e.g. `kitchen-passport/kitchen-passport/…`): you dragged the outer folder. Delete the repo and redo Step 3, dragging the **contents** instead.
- **`src` folder didn't upload:** click **Add file → Upload files** again and drag just the `src` folder in.
- **Push/commit blocked or messy:** easiest fix is to delete the repo (Settings → bottom → Delete) and start again with the boxes unchecked.

---

## Next: go live (optional)
To turn the repo into a clickable website, see **VERCEL_DEPLOY.md** — import the repo at vercel.com and click Deploy. No key needed; it runs free.
