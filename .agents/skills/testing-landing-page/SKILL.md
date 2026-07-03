---
name: testing-landing-page
description: Test the Gabarix landing page end-to-end. Use when verifying UI, copy, responsiveness, or form changes.
---

# Testing the Gabarix Landing Page

## How to Run Locally

```bash
cd /home/ubuntu/repos/Gabarix
python3 -m http.server 8080 &
```

Then open `http://localhost:8080` in Chrome.

## Key Sections to Verify

1. **Hero section** (top): Title, subtitle, CTA button, eyebrow text
2. **Pain points** ("Isso e para voce se..."): Check icon style and text
3. **Feature cards**: Horizontal carousel — scroll right to verify all cards render
4. **CTA section** (black background): Countdown timer, progress bar, form, microcopy
5. **Footer**: Year and brand name

## Critical Tests

- **Anchor link**: The hero CTA button links to `#form` — verify it smooth-scrolls to the form section
- **Form validation**: Submit empty form — should show error. Submit with valid data — should show success message and redirect
- **Countdown timer**: Seconds should tick down live
- **Progress bar**: Count should increment periodically
- **Mobile responsiveness**: Use DevTools device toolbar at 375px width — no horizontal overflow, CTA full-width

## Form Integration

The form submits to Google Forms via `fetch` with `mode: 'no-cors'`. After submission it redirects to `obrigado.html`. Do NOT expect a response body from the fetch — CORS will block it but the data still gets recorded.

## Common Issues

- If images don't load, check the `IMG/` folder has the logo files (`Logo do site.png`, `Gabrix.png`)
- The countdown is relative (45 days from page load), not a fixed date
- The progress counter auto-increments every 9 seconds (social proof simulator)

## Devin Secrets Needed

None — this is a static HTML page with no authentication required.
