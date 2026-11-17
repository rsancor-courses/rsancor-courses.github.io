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

All four courses are forthcoming for now. To publish one, in **both** `docs/index.html` and `docs/es/index.html`:

1. Change its `<div class="cover soon">` to `<a class="cover ai" href="intro-ai/">` (`../intro-ai/` in `es/`), and its closing `</div>` to `</a>`. Classes: `ai`, `ml`, `ds`, `gd`; folders: `intro-ai`, `machine-learning`, `data-science`, `ediv`.
2. Change `Forthcoming` / `Próximamente` in its spine to the academic year (e.g. `2026/27`).
3. Add the links right after the cover (Spanish labels: Teoría, Ejercicios, Exámenes; prefix `../` in `es/`):

   ```html
   <nav class="parts" aria-label="Introduction to Artificial Intelligence"><a href="intro-ai/theory/">Theory</a><a href="intro-ai/exercises/">Exercises</a><a href="intro-ai/exams/">Past exams</a></nav>
   ```

   Only link routes the course site really has.

Each course site lives in its own repo in the org (`intro-ai`, `machine-learning`, `data-science`, `ediv`), served at `/<repo>/`.
