# 🍳 Kitchen Passport

An AI-powered recipe generator that turns whatever's in your pantry into an authentic dish from anywhere in the world — written in any of 30+ languages, with a step-by-step cooking mode and a passport that stamps every cuisine you cook.

> Type your ingredients, pick a cuisine, and get a real, traditional recipe — while collecting passport stamps from every kitchen you visit.

---

## ✨ Features

- **AI recipe generation** from free-form ingredients, in 30+ output languages.
- **Cuisine picker** — pin the dish to a country's tradition (India, Italy, Thailand, Mexico, and more).
- **Three cooking styles** — home cooking, street food, or baking (with oven temps and times).
- **Cooking mode** — full-screen, one step at a time, keyboard-navigable.
- **Passport collection** — every dish stamps its country of origin.
- **Origin story, pronunciation, and per-serving nutrition** on every recipe.
- **"One more ingredient" nudge**, shopping-list export, and bare-pantry mode.
- **Rustic food-magazine UI** — embedded photography, real dish gallery, custom SVG plating, responsive full-bleed layout.

## 🛠 Tech

React (hooks, single component) · Anthropic Messages API (structured-JSON prompting) · pure inline styles + CSS keyframes (no framework) · Vite.

---

## 🚀 Run locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## 🏗 Build for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

---

## 🔑 About the AI service & request limits

**No API key is required to run this app.** Out of the box, recipe generation uses a built-in, shared service that's free but rate-limited (it pauses after a handful of requests per session). This is the default — just run it and it works.

Getting your own key is **optional**, and only worth it if you want to lift that request limit for a real deployment. If you go that route, route requests through a small backend that holds your key, and point the app at it by editing one line near the top of `src/KitchenPassport.jsx`:

```js
const API_URL = "https://your-proxy.example.com/api/recipe";
```

See **SETUP_own_api_key.md** for the full proxy setup (it's ~15 lines of Node). Never put an API key in the front-end code.

## 🖼 Images

The "From the Table" gallery uses real photos embedded in the component, so they always display. Per-recipe result photos are AI-generated at runtime and appear when the app runs somewhere that allows external images (i.e., your deployed site).

---

## 📦 Push this to GitHub

From inside this folder:

```bash
git init
git add .
git commit -m "Kitchen Passport: AI recipe generator"
git branch -M main
git remote add origin https://github.com/<your-username>/kitchen-passport.git
git push -u origin main
```

(Create the empty `kitchen-passport` repo on GitHub first, without a README, so the push isn't rejected.)

## 🌐 Deploy (free options)

- **Netlify / Vercel / Cloudflare Pages:** connect the repo; build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** set `base: "/kitchen-passport/"` in `vite.config.js`, run `npm run build`, and publish the `dist` folder (e.g. with the `gh-pages` package or a GitHub Action).

---

## 📄 License

MIT — do whatever you like; attribution appreciated.
