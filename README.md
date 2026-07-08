# William's Grade 4 Math Helper

A Spider-Man/Fortnite themed interactive math drill site for William.
Built with plain HTML/CSS/JS — no frameworks, no build step.

## Live Site

**URL:** `https://bparada-maker.github.io/grade4-math-helper`

## Default Passwords

| Role    | Password   |
|---------|------------|
| William | `spidey1`  |
| Admin   | `admin2024`|

Change these anytime in the Admin panel (or directly in `js/app.js`).

---

## What's Included (v1)

- **24 math drills** — Multiplication ×1–×12 and Division ÷1–÷12
- **Cheatsheets** appear after a wrong answer with tips and tricks for that specific number
- **9 badges** — Spider-Man and Fortnite themed (Web Slinger, Victory Royale, Legendary, etc.)
- **Score tracking** — best score per drill saved in browser localStorage
- **Focus section** — highlights drills with < 70% score on the dashboard
- **Admin panel** — view all scores, change William's password, reset progress

## Important Note on Passwords & Progress

All data (scores, badges, passwords) is stored in **browser localStorage** on the device where it's used. This means:

- If William uses a different browser or device, his progress won't carry over automatically
- The admin password reset works on the same browser — you don't need to redeploy
- To access from anywhere, just make sure William always uses the same browser/device

## Setup: Deploy to GitHub Pages

```bash
cd ~/Cluade/grade4-math-helper
git init
git add .
git commit -m "Initial commit: William's math helper"
git remote add origin https://github.com/bparada-maker/grade4-math-helper.git
git branch -M main
git push -u origin main
```

Then in the GitHub repo:
1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Click **Save**

The site will be live at `https://bparada-maker.github.io/grade4-math-helper` in ~60 seconds.

## Adding Worksheets Later

Worksheets A–J from the packet (word problems, fractions, geometry, etc.) can be added as a new section. When ready, create `worksheets.html` and link it from the dashboard.
