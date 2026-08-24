# Urza, Lord High Artificer — A Field Guide for the Command Zone

An unofficial Commander deck guide for a real, physical **🤖 Urza's Constructs**
proxy build: the full 100-card decklist, the infinite-mana combo, the
gameplan, strengths/weaknesses, an EDHREC-checked upgrade path, and a chapter
of asymmetric-stax spice. Every card mention hovers (or taps, on mobile) to
show the real card image, shipped locally in `assets/cards/`.

**Installable, and works fully offline.** It's a PWA — open the live link on
a phone and use the browser's "Add to Home Screen" (iOS Safari) or the
install prompt (Android Chrome) to get it as an app icon. A service worker
(`sw.js`) precaches the entire site — every chapter, every card image, and
the fonts — on first visit, so it keeps working with no connection at all
after that (handy at a table with bad venue wifi).

Not affiliated with Wizards of the Coast — card names, text, and images are
property of Wizards of the Coast, used here for reference/identification
only, the same way any deck-tech article or database would.

## Running locally

No build step — it's a plain static site.

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Hosting on GitHub Pages

Deploys via GitHub Actions (`.github/workflows/static.yml`), not the legacy
"Deploy from a branch" build.

1. Push this repo to GitHub.
2. Repo Settings → Pages → Build and deployment → Source → **GitHub Actions**.
3. Push to `main` (or re-run the workflow manually) to trigger a deploy —
   it's then live at `https://<username>.github.io/<repo-name>/`.

## Structure

- `index.html` — the page: ten chapters (Overview, The Combo Engine,
  Gameplan, Key Synergies, The Full Decklist, Strengths & Weaknesses, How to
  Pilot, Upgrade Path, Spicy Alternatives, Credits & Notes)
- `style.css` — all styling: a dark "blueprint schematic" panel theme (rather
  than parchment) to match Urza's artificer/Tolarian-machinery flavor, plus
  the holographic tilt hover-card effect
- `script.js` — tab switching, hover-card logic (tilt + real image), ambient
  spark animation, service worker registration
- `sw.js` — the service worker: precaches the app shell, fonts, and every
  card image on install, then serves them from cache offline. HTML/CSS/JS
  are network-first (so a fresh deploy shows up right away when online);
  everything else is cache-first, since card art and fonts never change once
  downloaded.
- `manifest.json` — PWA manifest (name, icons, standalone display)
- `assets/cards/*.jpg` — real card art at web resolution (480px wide), one
  file per card referenced in the guide — both the 100 cards actually in the
  decklist and a handful of upgrade/comparison cards mentioned in Chapter
  VIII/IX that aren't in the 99
- `assets/fonts/` — Cinzel, Cinzel Decorative, and EB Garamond, self-hosted
  — `fonts.css` holds the `@font-face` rules
- `assets/icons/` — the PWA's home-screen icons (192/512/512-maskable/apple-touch),
  a generated brass gear mark
- `assets/og-image.jpg` — generated blueprint-themed social preview card

Fonts are self-hosted in `assets/fonts/` rather than loaded from Google
Fonts — there's no external dependency left anywhere on the page, so it
renders correctly and identically with zero network access, both before and
after the service worker kicks in.

**Updating the service worker's cache:** `sw.js` precaches a hardcoded file
list (`PRECACHE_URLS`) rather than discovering it at runtime. Whenever
cards, fonts, or icons are added or removed, regenerate that list and bump
`CACHE_VERSION` in `sw.js` so existing installs actually pick up the change
instead of serving a stale cache forever.

## Content sources

Decklist, mana curve, combo lines, strengths/weaknesses, and the EDHREC
cross-reference were compiled from a local Commander proxy-deck build
pipeline (Scryfall bulk-data mirror + a deck-legitimacy audit + a written
deck guide + documented CUT/ADD staple-upgrade passes). See `git log` for
this repo's own history; the source project's build notes are not included
here since they cover five other, unrelated decks.
