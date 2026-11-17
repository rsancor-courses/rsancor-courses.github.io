---
version: 1
slug: "docs-index-html"
primary_target: "docs/index.html"
related_targets: ["docs/es/index.html"]
---

# Hub home (docs/index.html, docs/es/index.html)

Scope: the one-page teaching hub at rsancor-courses.github.io, EN at `/`, ES at `/es/`. Mode: Read (a catalog the visitor scans and leaves through).
Audience/job: Deusto students reaching their course site in one click; secondary, other lecturers.
Constraints: plain static HTML/CSS/JS in docs/, no build; must not look official Deusto; ALUD stays the official channel.
Chosen: user picked sketch B "series volumes" plus per-course colour, per-course subject drawing, and an animation (from sketch C's BFS hover). Forthcoming courses: grey outline only, no colour, until published (user's answer, round 2).

## Direction contract

THESIS: each course is a volume in one series; the shelf is the catalog. Refuses the generic icon-card grid.
OWN-WORLD: cool grey ground #f4f5f7, ink #121721; one solid cover colour per published course (AI #196bde, ML #0d6a4c, DS #a5521a, EDiV #6a2c9e); Archivo condensed for covers and display, Source Sans 3 for reading; white line drawings of each subject on the cover; forthcoming volumes are grey outlines.
STORY: the visitor sees which courses exist, which are live, opens theirs; can find the lecturer's email and profiles at the foot.
FIRST VIEWPORT: name and EN/ES switch top; condensed display title left, lede plus ALUD note right; four covers in a row at 3:4 with Theory/Exercises/Past exams links under the live ones.
FORM: assigned direction was the squared exam paper; user chose the pick (series volumes), position 1 of my grounded list. seed:1bc82dc91d7a6c37. Signature interaction: each live cover's drawing replays its subject (minimax values rising, boundary fitted, histogram filling, token walking a level) on first view and on hover/focus.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
