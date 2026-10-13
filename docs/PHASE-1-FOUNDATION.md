# Phase 1 — Foundation & Repair

Status: **initial source-code repair submitted for review**. No production deployment is claimed.

## Baseline (2026-10-13)
- Static HTML, CSS and vanilla JavaScript; no package.json or automated test suite found in the paths inspected.
- Entry point: index.html; styles.css; script.js.
- Affirmations are stored in script.js (many more than the original 20 displayed before initialization).
- Favorites and user-added affirmations use localStorage on the same browser/device only.
- No server accounts or cross-device backup; private cloud storage is a later phase.

## Repairs included in this branch
- Replace misleading static "1 of 20" markup with neutral loading text.
- Add explicit intro button, metadata, live-region status messages, input label and character limit.
- Accessible navigation button names, favorite pressed state and favorites panel expanded state.
- Avoid rendering hundreds of progress dots on a mobile screen.
- Prevent duplicate or overlong user affirmations.
- Improve focus indicators, input usability, touch target size and reduced-motion handling.

## Manual QA before merge
- Open app on iPhone Safari, Android Chrome, desktop Chrome/Firefox.
- Enter app using intro button and tap outside it; observe automatic dismissal.
- Use Previous/Next/Shuffle and keyboard arrows, Space, F, A and R.
- Add an affirmation, refresh, confirm it remains.
- Try empty, duplicate and 301-character affirmation; verify rejection.
- Favorite and unfavorite an affirmation, refresh, reopen Favorites; check count.
- Open/close Favorites and check screen-reader expanded state.
- Verify read aloud and auto-play on supported browsers, stopping when requested.
- Toggle prefers-reduced-motion and verify minimal animation.
- Inspect console for errors; check no horizontal overflow at 320px width.
- Check production source and Vercel project connection before enabling automatic deployment.

## Known limitations / next fixes
- localStorage persistence is browser-specific; clearing site data removes stored changes.
- Current storage saves the entire affirmation array; migrate to custom-only records carefully, preserving existing users' data.
- Favorites use numeric indices; migrate to stable affirmation IDs before editing/removing base content.
- Favorite list items use non-interactive div elements; convert to semantic buttons in a subsequent a11y pass.
- Speech synthesis behavior is browser-dependent; do manual mobile audio tests.
- No automated browser tests, staging preview verification, secure accounts or backup process yet.
- Do not collect payments or sensitive financial data until subsequent security/billing phases.
