# rsancor-courses.github.io

Home page for Rubén Sánchez Corcuera's open course sites. Plain HTML, no build step: GitHub Pages serves the `docs/` folder as is (Settings → Pages → Deploy from branch `main`, folder `/docs`). Everything outside `docs/` is never published.

```
docs/index.html       English
docs/es/index.html    Spanish (same markup, translated text)
docs/assets/hub.css   styles; course colours: AI #196bde, ML #0d6a4c, DS #a5521a, EDiV #6a2c9e
docs/assets/hub.js    replays each published cover's drawing on first view and on hover/focus
```

Preview locally: `python3 -m http.server -d docs`, then open http://localhost:8000.

## Publish a course

In **both** `docs/index.html` and `docs/es/index.html`:

1. Change its `<div class="cover soon">` to `<a class="cover ml" href="machine-learning/">` (`../machine-learning/` in `es/`). Classes: `ai`, `ml`, `ds`, `gd`.
2. Change `Forthcoming` / `Próximamente` in its spine to the academic year, and add the links below the cover by copying the Intro AI `<nav class="parts">`.

Each course site lives in its own repo in the org (`intro-ai`, `machine-learning`, `data-science`, `ediv`), served at `/<repo>/`.

The Intro AI links assume the course site exposes `theory/`, `exercises/` and `exams/` under `/intro-ai/`. Keep those routes in that site, or change the links here; publish this hub only once `/intro-ai/` is live.
