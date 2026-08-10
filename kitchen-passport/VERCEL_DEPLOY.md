# Put Kitchen Passport live on Vercel (free)

This gives you a public website link (e.g. `https://kitchen-passport.vercel.app`) you can share and put on your resume. ~5 minutes, no terminal.

---

## Prerequisite: the project must be on GitHub first
Vercel deploys *from* a GitHub repo, so do this once if you haven't:

1. Go to **https://github.com/new** → name it `kitchen-passport` → **Public** → **don't** check any "Initialize" boxes → **Create repository**.
2. On the repo page click **“uploading an existing file”** (or visit `github.com/YOUR-USERNAME/kitchen-passport/upload/main`).
3. Unzip your project, then **drag the contents** of the `kitchen-passport` folder (all files **and** the `src` folder) into the browser upload box.
4. Click **Commit changes**.

(Full detail is in `QUICK_GITHUB.md`.)

---

## Deploy on Vercel

### Step 1 — Sign in
Go to **https://vercel.com** and click **Sign Up** (or Log In) → **Continue with GitHub** → authorize.

### Step 2 — Import your repo
1. On the Vercel dashboard, click **Add New…** → **Project**.
2. Find **kitchen-passport** in the list → click **Import**.
   - First time? Click **Install / Configure GitHub App**, allow access to the repo, then come back.

### Step 3 — Confirm settings (they auto-fill)
Vercel detects Vite automatically. Verify:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

You don't need to add any environment variables — the app runs free with no API key.

### Step 4 — Deploy
Click **Deploy**. Wait ~1 minute while it builds.

### Step 5 — Open your site
You'll see a **Congratulations** screen with a preview and a link like:
`https://kitchen-passport-xxxx.vercel.app`
Click **Visit** to open your live site. 🎉

---

## After it's live

- **Custom project URL:** in the project → **Settings → Domains**, you can change the subdomain (e.g. `kitchen-passport.vercel.app` if available) or add your own domain.
- **Add the link to GitHub:** on your repo page, click the ⚙️ next to **About** and paste the Vercel URL into **Website** so visitors see it.
- **Put it on your resume/portfolio:** link the Vercel URL as the live demo.
- **Auto-updates:** every time you change a file on GitHub, Vercel rebuilds and updates the live site automatically — nothing extra to do.

---

## What visitors will see

- The full app — hero, ingredient search, cuisine picker, cooking styles, the real dish-photo gallery, cooking mode.
- **Recipe generation:** the app calls the AI service directly. On a public site without your own key this call may be blocked or unauthorized, so **"Cook Something Up" may show a friendly error** instead of a recipe. The whole interface still looks and demos great.
- To make live recipe generation work, add your own key behind a small backend and point `API_URL` at it — see `SETUP_own_api_key.md`. This is optional; see `CREDITS_AND_SAFETY.md` for why your credits stay safe if you don't.

---

## Troubleshooting

- **"No Framework Detected" / build fails:** make sure `package.json`, `index.html`, `vite.config.js`, and the `src/` folder all uploaded to the repo root (not inside an extra subfolder). Re-upload if needed.
- **Repo doesn't show in Vercel:** click **Adjust GitHub App Permissions** and grant access to the `kitchen-passport` repo.
- **Blank page after deploy:** confirm **Output Directory** is `dist`. Redeploy from the **Deployments** tab.
