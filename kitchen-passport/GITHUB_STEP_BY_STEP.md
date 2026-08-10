# Putting Kitchen Passport on GitHub — Step by Step

A complete walkthrough, assuming you've never done this before. Takes about 15–20 minutes.

---

## What you'll end up with
- Your project on GitHub (a public repo people can see on your profile).
- Optionally, a **live website** anyone can open in their browser.

---

## Part 0 — Install the tools (one-time)

### 0.1 Install Git
- Go to https://git-scm.com/downloads, download for your OS, and install with default options.
- Verify it worked: open a terminal (see below) and run:
  ```bash
  git --version
  ```
  You should see a version number.

### 0.2 Install Node.js (needed to run/build the app)
- Go to https://nodejs.org, download the **LTS** version, install with defaults.
- Verify:
  ```bash
  node --version
  ```
  It should print v18 or higher.

### 0.3 Create a GitHub account
- Sign up (free) at https://github.com if you don't have one.

**Where is "the terminal"?**
- **Windows:** press Start, type `Git Bash`, open it (installed with Git).
- **Mac:** press Cmd+Space, type `Terminal`, open it.

---

## Part 1 — Put the project files together

1. Download the `kitchen-passport` files I gave you.
2. Arrange them in one folder **exactly** like this (the two `.jsx` files must be inside a `src` subfolder):

   ```
   kitchen-passport/
   ├── README.md
   ├── LICENSE
   ├── SETUP_own_api_key.md
   ├── GITHUB_STEP_BY_STEP.md
   ├── package.json
   ├── vite.config.js
   ├── index.html
   ├── .gitignore
   └── src/
       ├── main.jsx
       └── KitchenPassport.jsx
   ```

   > Tip: if your computer hides the `.gitignore` file (it starts with a dot), that's fine — just make sure it's in the folder.

3. Open your terminal and move into the folder. Replace the path with wherever you saved it:
   ```bash
   cd path/to/kitchen-passport
   ```
   (On Windows you can type `cd `, then drag the folder into the terminal window, then press Enter.)

---

## Part 2 — Test it locally (make sure it runs)

1. Install the dependencies (downloads React, Vite, etc. into a `node_modules` folder):
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the URL it prints (usually **http://localhost:5173**) in your browser. You should see Kitchen Passport.
4. When done, stop the server with **Ctrl + C** in the terminal.

If it runs, you're ready to publish.

---

## Part 3 — Create the repository on GitHub

1. Go to https://github.com/new (or click the **+** in the top-right → **New repository**).
2. **Repository name:** `kitchen-passport`
3. **Description** (optional): `AI-powered recipe generator built with React`
4. Choose **Public**.
5. **Important:** do **NOT** check "Add a README", "Add .gitignore", or "Choose a license" — you already have those. (Adding them here causes a conflict on first push.)
6. Click **Create repository**.
7. Leave that page open — you'll need the URL, which looks like:
   `https://github.com/YOUR-USERNAME/kitchen-passport.git`

---

## Part 4 — Push your code to GitHub

Back in the terminal, still inside the `kitchen-passport` folder, run these one at a time:

```bash
git init
git add .
git commit -m "Kitchen Passport: AI recipe generator"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kitchen-passport.git
git push -u origin main
```

- Replace `YOUR-USERNAME` with your GitHub username.
- On the `git push` step, a browser window or prompt may ask you to **sign in to GitHub** — do it once and it's remembered.

**First time using Git?** It may ask you to set your name/email. If so, run these once (use your GitHub email):
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```
Then run the `git commit` and `git push` steps again.

When it finishes, **refresh your GitHub repo page** — your files (and the README) are now live on GitHub. 🎉

---

## Part 5 (optional) — Put a LIVE demo online

A GitHub repo shows the code; this gives you a clickable website. Easiest free option: **Vercel**.

1. Go to https://vercel.com and **Sign up with GitHub**.
2. Click **Add New… → Project**.
3. **Import** your `kitchen-passport` repo.
4. Vercel auto-detects Vite. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. In ~1 minute you get a public URL like `https://kitchen-passport.vercel.app`.
6. Add that link to your README and your resume.

(Netlify works the same way: https://netlify.com → "Import from Git" → build `npm run build`, publish `dist`.)

> Once it's deployed on a real URL, the AI dish photos in recipe results start loading too (the Claude preview blocked them; a normal website doesn't).

---

## Part 6 — Making changes later

Edit any file, then push updates with:
```bash
git add .
git commit -m "describe what you changed"
git push
```
If you set up Vercel/Netlify, your live site updates automatically on every push.

---

## Troubleshooting

- **`git push` rejected / "updates were rejected":** you probably added a README/license when creating the repo. Fix:
  ```bash
  git pull origin main --allow-unrelated-histories
  git push
  ```
- **`npm : command not found`:** Node.js isn't installed or the terminal was opened before installing — close and reopen the terminal, or reinstall Node.js.
- **App loads but recipes stop after a few tries:** that's the shared AI service's limit. See `SETUP_own_api_key.md` to run it on your own key.
- **`node_modules` is huge / should I upload it?** No. It's already in `.gitignore` and stays off GitHub on purpose — anyone who clones runs `npm install` to recreate it.

---

## Quick reference (the whole thing, condensed)

```bash
# one-time: install Git and Node.js, create a GitHub account

cd path/to/kitchen-passport
npm install
npm run dev          # test at http://localhost:5173, then Ctrl+C

# create an EMPTY repo named kitchen-passport on github.com/new

git init
git add .
git commit -m "Kitchen Passport: AI recipe generator"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kitchen-passport.git
git push -u origin main

# optional live demo: import the repo at vercel.com
```
