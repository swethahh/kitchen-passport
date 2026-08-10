# Will other people spend my credits? — No.

Short answer: **the version in this repo has no API key and no credits attached, so there is nothing of yours for visitors to spend.**

---

## Why your credits are safe

- Recipe generation uses a **built-in, shared, free service** — not your account.
- There is **no API key** anywhere in this project. No key = no billing = no way for anyone to charge you.
- Visitors simply hit the shared **free rate limit** (recipes pause after a handful per session). That cost is not yours.

**The rule that keeps you 100% safe: don't add your own API key.** Publish and deploy as-is.

---

## What WOULD cost money (only if you opt in)

The *only* way your credits could ever be spent is if **you personally** decide to:

1. Create your own Anthropic API key, and
2. Wire it into a backend so the app uses it instead of the free service.

That's the setup described in `SETUP_own_api_key.md`. It's **optional** and off by default. If you never do it, skip the rest of this file — you're done.

---

## If you ever DO add your own key: how to protect it

Only relevant if you opt in above. Three safeguards, all easy:

### 1. Never put the key in the front-end
Anyone can read website code in their browser. The key must live only on a small **backend proxy** (see `SETUP_own_api_key.md`). The public site talks to your proxy; the proxy holds the key. The key is never shipped to visitors.

### 2. Set a hard spending cap
In the Anthropic Console → **Billing / Limits**, set a monthly maximum (e.g. $5). Even in a worst case, spending can never exceed the cap you choose.

### 3. Rate-limit your proxy so strangers can't run it up
Add a few lines to the proxy so each visitor can only make a few requests per minute:

```bash
npm install express-rate-limit
```

```js
import rateLimit from "express-rate-limit";

// max 10 requests per IP per 10 minutes
const limiter = rateLimit({ windowMs: 10 * 60 * 1000, max: 10 });
app.use("/api/recipe", limiter);
```

With a spend cap **and** rate limiting, a public demo on your own key stays cheap and abuse-proof.

---

## Recommended setup for a portfolio

For showing this on your resume/GitHub, the simplest and safest choice is:

> **Deploy as-is, with no key.** Free, limited, zero financial risk. Perfect for a demo.

If a recruiter asks "does this cost you money to host?" the honest answer is **no** — it runs on the free shared service, and you've architected it so a private key *could* be added behind a rate-limited proxy for production. That's a good thing to be able to say in an interview.
