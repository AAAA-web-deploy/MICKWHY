# CURSOR MASTER BUILD PROMPT — MIC PICKED WHO?! ($MICKWHY)

Build a finished, original, fast-loading, responsive website INSIDE THIS FOLDER. Do not ask me for further assets, instructions, contracts, URLs, copy or UI sketches. All image assets are in `public/assets/`. This is a real creative production build, not a generic memecoin template, mockup screenshot, or demo full of fake data. Implement the frontend, run a production build, repair errors, and check mobile and desktop viewports. I (the user) will configure any unprovided contract/social destinations later.

## Identity and hard requirements
- Exact token display name: **MIC PICKED WHO?!** (keep uppercase and punctuation when used as a title).
- Exact ticker: **$MICKWHY**. Chain: **Ethereum mainnet**, NOT Solana.
- Original mascot: **Mick**, a long-legged, mischievous, grinning vintage SILVER MIC with black limbs, black shoes, white gloves, curling cable tail, and a presenter's expressive pointing / open-palmed gesture.
- **The canonical Mick design is `public/assets/identity/mick-approved-master.webp`.** Do not redraw or replace him. `mick-fullbody-cutout.webp` is an optional pose for overlays; face may differ slightly, so prefer the approved original whenever consistency matters.
- Mick is a ridiculously overconfident talent-show presenter: he picks hilariously mismatched pairs of guests and is delighted by his own terrible choices.
- Brand line: **ONE MIC. ZERO STANDARDS.** Crowd reaction: **MICK, WHYYYY?!** Mick's reply: **YOU'RE WELCOME.**
- User's intentional funny catchphrase (quote verbatim): **BE THE MY GUEST!** Put it in a playful speech bubble, as an original character catchphrase, not song lyrics or an audio recording.
- Visual: warm saturated orange and amber stage lighting, silver-metal Mick, dark burgundy curtains, light cream text and tasteful stage spotlights; clean, minimal geometry with richly expressive cartoon pictures. Emotion, timing and character acting should make the site hilarious—not layers of gratuitous effects.
- **Image:text storytelling target 70:30.** The first 3-4 desktop scrolls should feel like a live comedy performance, not paragraphs. Mobile must reveal every essential section by SCROLLING DOWN, without requiring carousels, hover, menus or modals to read it.
- Navigation label is **Performance** (NEVER 'Community').
- Do not use unauthorized original music, Hotel Lobby video footage, Disney artwork, or make official associations. This website uses the meme's unexpected duo / single-mic idea but is an original Mick identity. Satirical caricatures of public crypto figures are NOT endorsements.

## What was benchmarked (DO NOT clone either site)
**Wormhole Wassie** https://wormholewassie.lol/ — verified homepage includes single-sentence premise and hero creature, large lore/comic illustration, short story captions, a clickable panel gallery, copyable CA, How to Buy, Chart and Join sections. Borrow its episodic visual storytelling, comic-panel gallery, above-the-fold character hook and compact utility; replace multiverse/comic-book content with a chaotic LIVE VARIETY SHOW and totally new artwork.
**Trololol** https://trololol.io/ — verified homepage is extremely sparse: instantly recognizable single meme, short positioning statement, prominent links/social destinations, GIF and contract. Borrow the instant meme recognition, no-nonsense links and very little explanatory prose. Do not copy its meme or black-page composition. Do not claim exact original CSS or animation timings have been measured: only directly inspectable layout/content were confirmed.
Creative result: it should feel like **a talent show that went off the rails**, not generic Home/About/Tokenomics cards; no purple cyberpunk, no bank-card tiles, no chart-dashboard hero, no wall of lore, no fake roadmap.

## Tech stack / implementation choices (strict)
- Vite + React + TypeScript, a SINGLE page, semantic HTML and ONE organized CSS stylesheet or CSS modules. No Next.js SSR, no backend, no database, no auth, no wallet-connection SDK.
- No Tailwind, Three.js, GSAP, Framer Motion, Swiper, canvas particle engines, video backgrounds or heavy animation libraries. Use modern CSS transforms, keyframes, `clamp`, CSS grid, container queries when useful; a small `IntersectionObserver` for only a few reveals, and React state for the real guest picker. Prefer no extra dependencies beyond Vite, React and TypeScript.
- Build for static deployment (Netlify / Vercel / Cloudflare Pages): `npm install`, `npm run dev`, `npm run build`. Generate `package.json`, `vite.config.ts`, `index.html`, `src/` etc. Use accessible buttons and safe, typed React components.
- Use local files in `public/assets` ONLY; DO NOT hotlink reference sites, generate images externally, or add CDN assets. Use system/display font stacks to avoid external font network traffic (`Arial Black`, `Impact`, `system-ui`, sans-serif), with excellent typographic hierarchy.
- Palette: stage orange `#FF781F`, lit amber `#FFB546`, cream `#FFF4DC`, deep burgundy `#44170C`, almost-black `#190C08`, mic silver `#C8CED2`. Use simple large soft pools of light, sparing drop shadows and soft CSS curtains; nothing glassmorphic.
- Set `font-display` only if local fonts supplied; none are. No runtime image compression needed—the provided WebP images are optimized.

## Exact image mapping (refer to these paths verbatim)
- `/assets/stage/hero-stage-3x1.webp` — PRIMARY 3:1 cinematic stage hero; Mick LEFT, parody guests RIGHT, deliberately empty CENTER. Overlay a REAL HTML hero title centered in the clear area. NEVER use the text-baked bonus banners as default responsive hero.
- `/assets/identity/mick-approved-master.webp` — selected ORIGINAL full-length Mick identity, approved grin and pose.
- `/assets/identity/mick-fullbody-cutout.webp` — transparent figure: reserve for layered theater entrance or mobile hero if it improves composition. Do not crop his limbs/shoes/cable.
- `/assets/identity/mick-circle-logo.webp` — circular token badge for brand identification.
- `/assets/identity/mick-face-badge.webp` — compact face identity for masthead or stickers.
- `/assets/stage/episode-01-cat-vs-bot.webp` — first performance, panic cat + terrified AI bot with Mick presenting.
- `/assets/stage/episode-02-tech-titans-parody.webp` — second performance, caricatured Ethereum/tech personalities with Mick; parody only, no endorsement.
- `/assets/stage/bonus-crypto-guests-banner.webp` — optional guest lineup / social preview; has embedded text so don't lay live titles directly over text.
- `/assets/stage/bonus-meme-cast-banner.webp` — optional bonus crowd reaction / archive image; has embedded text.
- `/assets/memes/mick-gleeful.webp`, `/assets/memes/mick-smug.webp`, `/assets/memes/mick-oh-no.webp` — expression portraits in a set; each was cropped out of a matching three-panel composition. Use as large comic-style reaction cards and as optional share/download images.
- `/assets/meta/optional-promotional-poster.webp` — optional only; baked-in promo lettering; avoid as the default webpage hero.
- `/assets/meta/favicon-32.png`, `/assets/meta/apple-touch-icon.png`, `/assets/meta/icon-512.png` — icon assets.
- Each image has exact dimensions in `ASSET_MANIFEST.json`. Do not make duplicates or add placeholder stock photos.

## Page direction: an ORIGINAL six-beat comedic performance

**Beat 1 — GRAND OPENING / theater entrance, shown without scrolling**
- The first viewport should feel almost entirely pictorial: giant responsive image of the orange stage, glowing theater-lights border, a modest pill **LIVE FROM THE WORST TALENT SHOW**, live headline in negative-space center: `MIC PICKED WHO?!` and underneath `$MICKWHY` / `ONE MIC. ZERO STANDARDS.`
- A Mick speech bubble says `BE THE MY GUEST!` positioned so it does not collide with live title. Pinned top bar brand mini avatar left; simple nav items `The Show`, `Bad Picks`, `Performance`, `How to Buy`; right single status-aware Buy CTA.
- One unmistakable large scroll CTA `SEE WHO MICK PICKED ↓`. Tiny crowd-reaction ticker/marquee below hero with `MICK, WHYYYY?! / YOU'RE WELCOME. / WRONG DUO. GREAT SHOW.` Repeat through pure CSS, pause on hover and respect reduced motion.
- Desktop: preserve cinematic ~3:1 composition, ensure headline legible against central negative space. Mobile: do NOT crush the 3:1 full panorama into unreadable strip or crop Mick/guests offscreen. Instead make hero a 9:14-ish CSS stage with `mick-fullbody-cutout.webp` or approved master as main image, a short live title ABOVE or BESIDE it, then show the 3:1 group artwork as a separate scrollable image directly below. All copy visible without tapping anything.

**Beat 2 — THE WORST TALENT SCOUT (mini story)**
- Use a huge character image (`mick-approved-master.webp`) on one side and a few oversized editorial captions like theatrical cue cards on the other. Only three short lines of prose:
   `HE HAS THE MIC.`
   `HE PICKS THE DUO.`
   `YOU QUESTION EVERYTHING.`
- Punchline: `Mick: "YOU'RE WELCOME."` Make his grin the visual center. Give a slight responsive tilt when hovered on desktop (no giant parallax).

**Beat 3 — THE BAD PICKS / mini episodes**
- Two big cinematic comic panels, NOT generic small cards; images should occupy at least 70% of each feature.
  Episode 001: `A PANIC CAT + AN AI GENIUS.` Supporting caption: `One predicts the market. One ate the keyboard.` Use episode-01 image.
  Episode 002: `THE TECH TITANS.` Caption: `Absolutely nobody approved this collaboration.` Use episode-02 image and a small `SATIRE / UNOFFICIAL` ribbon.
- Below them an image-first bonus gallery strip using the optional crypto-guest/banner assets. Clicking an image can open an accessible dialog/lightbox on desktop, but mobile essentials must still be in the vertical layout even if JavaScript is disabled.
- Design visually like intercut theater acts: stage curtain dividers, giant handwritten-look caption stickers, cinematic images touching section edges, limited text.

**Beat 4 — LET MICK PICK / useful interactive moment**
- Implement a lightweight REAL client-side picker using React state only. A big button `LET MICK PICK 🎤` shuffles an array of 8 funny ORIGINAL fictional guest archetypes (e.g. Panic Cat, Overqualified Bot, Paper Hands, Diamond Hands, Sleepy Dog, Frog Who Bought the Top, The Guy with 37 Wallets, The Confused Duck) and outputs two different guests.
- On pick: animate two name placards popping into spotlights, trigger a very short CSS curtain wiggle, and reveal the huge caption `MIC PICKED WHO?!` and the reaction `MICK, WHYYYY?!`. No fake live API, no claims that real people are being summoned. Screen-reader announce results with aria-live. Respect reduced motion.
- One punchline on the button area `TALENT? OPTIONAL. CONFIDENCE? UNLIMITED.`
- Repeat-pick action works indefinitely, never requires wallet connect, and is reliable on mobile tapping.

**Beat 5 — THE REACTION BOOTH / emotional image wall**
- Place three full-size large Mick portraits (gleeful, smug, horrified) as bold editorial panels, NOT a dense grid with tiny thumbnails. Caption each with a meme-ready 2–4-word line: `I PICKED THEM.`, `TRUST MY VISION.`, `WAIT. I PICKED WHO?!`.
- Desktop slightly stagger panels with a dynamic but clean magazine-like composition; mobile stack vertically with no missing images, preserve aspect ratios. Optional `Save meme` links point directly to the local image. Do not pretend they are auto-generated user memes.

**Beat 6 — PERFORMANCE + HOW TO BUY + FOOTER**
- Community section must be titled exactly **PERFORMANCE** (not Community), theme: `THE STAGE BELONGS TO EVERYBODY.` CTA labels `JOIN THE PERFORMANCE` and `SUGGEST A TERRIBLE DUO`, wired only to verified actual configured X/Telegram links. If not configured, clearly label `LINK COMING SOON` and do not create dead URLs.
- Show a small clear token info / How to Buy section that can be consumed entirely by scrolling on mobile: `Ethereum mainnet`, `MIC PICKED WHO?!`, `$MICKWHY`, `Contract: Coming soon` until supplied. Simple 3 steps: `1. Have ETH and gas in an Ethereum wallet. 2. Verify the token contract from official sources. 3. Use a trusted Ethereum DEX to swap if you choose.`
- Supply, taxes, LP burn, renounce statuses, market cap, holder numbers and launch time: do NOT claim or infer ANY unless supplied; omit or display `Not announced` in a controlled config-driven way.
- Footer includes a clear small disclaimer: `Independent parody/meme project. Satirical depictions do not imply endorsement by or affiliation with public figures, companies, original performers or related IP owners. Crypto assets are risky; no returns are promised.`

## Editable launch config (very important)
Create `src/config/site.ts` with fields:
```
export const site = {
  tokenName: 'MIC PICKED WHO?!',
  ticker: 'MICKWHY',
  chain: 'Ethereum mainnet',
  contractAddress: '', // empty until owner provides the exact verified Ethereum address
  xUrl: '', // leave empty
  telegramUrl: '', // leave empty
  dexUrl: '', // leave empty
  explorerUrl: '', // leave empty
  totalSupply: null as number | null,
  buyTax: null as number | null,
  sellTax: null as number | null,
  lpStatus: '',
};
```
Use config everywhere. Contract copy-to-clipboard only appears if address is a syntactically valid Ethereum 0x + 40 hex chars. Build a `COPY CA` button only when valid; otherwise show `CONTRACT COMING SOON`. Same rule for Buy/X/Telegram links (render disabled or coming soon, not a clickable fake href). No unrelated addresses or Solana identifiers anywhere. Never falsely claim presale, verified audits, burned LP, ownership renunciation, or endorsement.

## Detailed interaction design
- Premium but **not corporate**: bold uneven theatrical lettering, small imperfect speech bubbles, clean full-bleed stage art, no transparent glass card background, no fake charts, no overbuilt nav.
- Main animations: title flicker very subtly once on load, Mick image CSS enter/small hover lean (desktop), moving marquee, spotlight pulse, reveal-on-scroll. Each should be CSS-only when possible. Disable when `prefers-reduced-motion: reduce`.
- Use 1 theme, with section color rhythm from orange hero → richer burgundy stage → orange spotlight episodes → amber picker → orange reaction booth → dark burgundy performance/footer. Keep boundaries visually blended with CSS gradients/curtains; never hard disconnected banking-dashboard sections.
- Cards/media use `border-radius` sparingly, do not make everything pill-shaped. Use bold editorial strips/oversized type rather than table UI.
- All linked controls must have functional target or disabled 'Coming Soon' state. Avoid filler links and broken navigation.
- If lightbox used: native `dialog` or accessible React dialog; escape key works, focus restored, next/prev accessible. Lazy-load its images. But don't hide essential info in it on mobile.

## Performance, SEO, mobile and quality gates
- Static Vite build with route-less architecture; put responsive CSS in `src/styles.css` and `src/App.tsx`/small components as needed.
- Use actual HTML headings and live text, never image-only site. Proper H1 exactly `MIC PICKED WHO?!`. `meta description`, OpenGraph/Twitter card, favicon paths. The OG preview can use bonus poster/banner; do not duplicate that text as CSS labels over the graphic.
- Hero image eager and high fetch priority, all below-fold images `loading="lazy"`, `decoding="async"`, `width`/`height`/CSS aspect ratio declared to avoid CLS. Native `<picture>` only if true alternate sources exist; no fabricated URLs. Keep image dimensions suitable for 390px devices; optionally generate smaller JPEG/WebP variants locally via `sharp` or native image tooling only if available; don't make new artwork.
- Target a responsive page that stays visually strong at **375px, 390px, 768px, 1024px, 1440px**. Minimum touch target 44x44px, no horizontal overflow, no accidental cropping of main Mick, no navbar covering anchors, keyboard navigability, alt text, text contrast and `aria-live` picker result. Mobile is **entirely scroll-first**—NO forced accordion, hidden story, horizontal-only gallery, carousel-only content, or multiple route navigation.
- Target initial transfer comfortably below ~1.5 MB on typical mobile when image delivery is reasonably optimized; lazy-load the optional posters. Defer noncritical JS, no external tracking SDK. Protect core web vitals; avoid huge blur filters and constantly repainting shadows.
- Build must pass `npm run build`; inspect for missing assets. If browsing/screenshot tools are available, check desktop and mobile screenshots and fix obvious clipping/layout defects. Do not assert external performance scores without measuring them.
- Finish with a succinct note of what was built, local dev command, and exact config fields to fill before launch. Do not request extra prompts to implement the site.

## Content tone / comedy microcopy (use selectively, do not put all lines on screen)
- `THE WORLD'S WORST TALENT SHOW.`
- `ONE MIC. ZERO STANDARDS.`
- `MICK, WHYYYY?!`
- `BE THE MY GUEST!`
- `YOU'RE WELCOME.`
- `TOO LATE. HE ALREADY PICKED.`
- `EVERY DUO IS A BAD IDEA. THAT'S THE POINT.`
- `THE STAGE BELONGS TO EVERYBODY.`

Start coding NOW. Do not simply describe a plan; generate the working project from this prompt and these bundled assets.
