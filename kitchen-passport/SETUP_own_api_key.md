# Kitchen Passport — Removing the request limit

## Why you hit a limit

Inside the Claude preview, the app talks to a **shared, rate-limited AI service** (that's the "no output after a few requests" you saw). That cap is fixed by the preview and can't be raised from inside it.

To get past it, run the app **with your own Anthropic API key**. Your usage is then governed by *your own account limits* (pay‑as‑you‑go), not the shared preview cap. External food photos also start loading once you're outside the preview.

**Important:** never put your API key in the front‑end code — anyone could read it. The key lives in a tiny **backend proxy** that the app calls instead.

---

## The 4 steps

### 1. Get an API key
Create one at the Anthropic Console (console.anthropic.com) → **API Keys**. Add a little credit to your account.

### 2. Run a tiny proxy that holds the key
Create `server.js`:

```js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());              // allow the browser app to call this
app.use(express.json());

app.post("/api/recipe", async (req, res) => {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,   // key stays on the server
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(req.body),   // forward the app's request as‑is
  });
  const data = await r.json();
  res.status(r.status).json(data);
});

app.listen(8787, () => console.log("Proxy running on http://localhost:8787"));
```

Install and start it:

```bash
npm install express cors
ANTHROPIC_API_KEY=sk-ant-your-key-here node server.js
```

### 3. Point the app at your proxy
In `KitchenPassport.jsx`, change the one line near the top:

```js
const API_URL = "http://localhost:8787/api/recipe";
```

(When you deploy the proxy, use its public URL instead.)

### 4. Run the front‑end
Drop `KitchenPassport.jsx` into any React app (Vite is easiest):

```bash
npm create vite@latest kitchen-passport -- --template react
cd kitchen-passport && npm install
# put KitchenPassport.jsx in src/, import and render it in App.jsx
npm run dev
```

That's it — recipes now run on your key, and the request limit is your account's, not the preview's.

---

## Model name
The app requests the model `claude-sonnet-4-6`. If the API rejects it, open the Console → **Models** and swap in a current model string that your account can access.

## Deploying for real
- **Proxy:** any Node host works (Render, Railway, Fly.io, a small VPS, or a serverless function). Keep `ANTHROPIC_API_KEY` in the host's environment variables — never in the repo.
- **Front‑end:** `npm run build`, then host the static files anywhere (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
- Set `API_URL` to your deployed proxy URL before building.

## Cost control (optional)
- Add simple per‑IP rate limiting in the proxy (e.g. the `express-rate-limit` package) so a public site can't burn your credit.
- The app already keeps requests lean (short prompt, capped output) to minimize per‑recipe cost.

## Keeping photos
Once self‑hosted, the browser can load external images, so the AI dish photos appear automatically. If you'd rather not depend on an external image service, ask to have specific dish photos **embedded** directly in the file instead.
