---
name: Rubén Sánchez Corcuera · Courses
description: One lecturer's open course material, shelved as volumes of a single series.
colors:
  course-ai: "#196bde"
  course-ml: "#0d6a4c"
  course-ds: "#a5521a"
  course-ediv: "#6a2c9e"
  cool-ground: "#f4f5f7"
  ink: "#121721"
  body-text: "#232a36"
  muted-slate: "#5a6271"
  hairline: "#d9dde4"
  pencil-grey: "#c4cad3"
  paper-white: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "76px"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "34px"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 70"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "'wdth' 72"
  brand:
    fontFamily: "Archivo, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1
    fontVariation: "'wdth' 88"
  lede:
    fontFamily: "'Source Sans 3', system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Source Sans 3', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  link:
    fontFamily: "'Source Sans 3', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  fine:
    fontFamily: "'Source Sans 3', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  focus: "2px"
  control: "4px"
  cover: "2px 6px 6px 2px"
spacing:
  gutter: "28px"
  gutter-narrow: "16px"
  link-gap: "16px"
  cover-pad: "18px"
  shelf-gap: "24px"
  intro-gap: "40px"
  section: "72px"
components:
  cover-published:
    backgroundColor: "{colors.course-ai}"
    textColor: "{colors.paper-white}"
    typography: "{typography.headline}"
    rounded: "{rounded.cover}"
    padding: "18px 18px 16px"
  cover-forthcoming:
    backgroundColor: "transparent"
    textColor: "{colors.muted-slate}"
    rounded: "{rounded.cover}"
    padding: "18px 18px 16px"
  lang-switch:
    textColor: "{colors.muted-slate}"
    typography: "{typography.link}"
    rounded: "{rounded.control}"
    padding: "6px 10px"
  lang-switch-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.control}"
    padding: "6px 10px"
  part-link:
    textColor: "{colors.ink}"
    typography: "{typography.link}"
  contact-mail:
    textColor: "{colors.course-ai}"
    typography: "{typography.lede}"
---

# Design System: Rubén Sánchez Corcuera · Courses

## Overview

**Creative North Star: "The Series Shelf"**

Every course is a volume in one series, and the catalog is the shelf they stand on. A published course is a solid-colour book cover in its own identity colour, with a white line drawing of its subject; a course in preparation is the same volume left as a grey outline. The ground is a cool, quiet grey so the covers carry all the colour on the page.

Density is low and the page is short: a condensed display title, one lede, four covers, a colophon. Type does the structural work (Archivo condensed for anything that names a thing, Source Sans 3 for anything read), and depth exists only where a physical book would have it. The course colours are not decoration of this page; they are each course's identity and travel with it to its own Quarto site.

**Key Characteristics:**
- One solid identity colour per published course, used as the whole cover, never as an accent sprinkle.
- Cool grey ground and near-black ink; no other hues outside the course set.
- Condensed Archivo at heavy weight for names; Source Sans 3 for reading.
- White single-weight line drawings of each subject, which replay how they were drawn.
- Forthcoming volumes are grey outlines: no colour, no links, no motion.

## Colors

A cool neutral ground under a set of four saturated, mid-dark identity colours, one per course.

### Primary
- **Deusto Blue** (`course-ai`): Introduction to AI's identity colour. Also the page's single interactive accent: the email link and text selection. Carried over from the existing course material.

### Secondary
- **Pine** (`course-ml`): Machine Learning's identity colour.
- **Burnt Sienna** (`course-ds`): Data Science's identity colour.
- **Royal Violet** (`course-ediv`): EDiV's identity colour.

These three are recorded from the direction and the stylesheet; on the hub they appear only once a course is published.

### Neutral
- **Cool Ground** (`cool-ground`): page background and browser theme colour.
- **Ink** (`ink`): headings, brand, current-language chip, link underlines on hover, the colophon's top rule, focus outline.
- **Body Text** (`body-text`): running text.
- **Muted Slate** (`muted-slate`): secondary text, forthcoming cover titles and spines, inactive language.
- **Hairline** (`hairline`): header rule, forthcoming cover outline, resting link underlines.
- **Pencil Grey** (`pencil-grey`): the subject drawing on a forthcoming cover.
- **Paper White** (`paper-white`): all type and line work on a published cover.

### Named Rules
**The One Course, One Colour Rule.** Each course owns exactly one colour, used as its full cover here and as its identity on its course site. A new course gets a new hue of similar depth (white text must pass AA on it); it never borrows another course's colour or a tint of one.

**The Earned Colour Rule.** A course shows its colour only once it is published. Until then its cover is a 1.5px Hairline outline with Muted Slate type and a Pencil Grey drawing.

## Typography

**Display Font:** Archivo (variable width and weight, condensed via `font-stretch`)
**Body Font:** Source Sans 3 (with system-ui)

**Character:** A tall, tightly condensed grotesque names things like a book spine; a calm humanist sans reads like the inside pages.

### Hierarchy
- **Display** (800, 76px, 0.92, width 72%): the page title only. 56px under 520px. Balanced wrap.
- **Headline** (800, 34px, 0.95, width 70%): course title on a cover. 32px on mobile; forthcoming covers drop to weight 500 (26px on mobile).
- **Title** (800, 28px, width 72%): colophon heading.
- **Brand** (700, 19px, width 88%): the lecturer's name in the header.
- **Lede** (400, 19px, max 46ch): the intro sentence; its footnote is 15px Muted Slate.
- **Body** (400, 17px, 1.55, max 56ch in the colophon).
- **Link** (600, 15px): course part links and the language switch (14px there).
- **Fine** (400, 14px, Muted Slate): licence and disclaimer line.
- **Label** (Archivo 600, 12px, 0.08em tracking): the cover spine (language, year or "Forthcoming"). Mixed case as authored.

### Named Rules
**The Spine Type Rule.** Archivo names (titles, brand, spine, drawing numerals); Source Sans 3 explains. Never set reading text in Archivo or a title in Source Sans 3.

## Layout

A single centred column, max 1180px, with a 28px gutter (16px under 520px). The intro is a two-column grid (title left, lede right, bottom-aligned, 40px gap) over the shelf: four equal columns with a 24px gap, each cover at 3:4. The colophon sits 72px below, opened by a 1px Ink rule, in a 200px / 1fr / 1fr grid.

Under 900px the shelf becomes two columns and the intro and colophon stack. Under 520px the shelf is one column, covers drop the fixed ratio, the drawing caps at 130px tall, and forthcoming volumes shrink to title plus spine (drawing hidden) so the live course and the contact stay close.

## Elevation & Depth

The page is flat; only a published cover has depth, and its depth is a book's. A dark inset strip on the left edge reads as the spine, a tight contact shadow grounds it, and a long soft drop lifts it off the shelf. On hover the cover lifts 6px and tilts -0.6deg, like a book drawn from the shelf, and the drop lengthens. Forthcoming covers carry no shadow.

### Shadow Vocabulary
- **Volume at rest** (`box-shadow: inset 6px 0 0 rgba(0,0,0,.18), 0 2px 4px rgba(18,23,33,.12), 0 18px 34px -18px rgba(18,23,33,.5)`): every published cover.
- **Volume lifted** (`box-shadow: inset 6px 0 0 rgba(0,0,0,.18), 0 2px 4px rgba(18,23,33,.12), 0 30px 44px -20px rgba(18,23,33,.55)`): published cover on hover.

### Named Rules
**The Only Books Have Depth Rule.** Shadows belong to covers. Header, links, colophon and forthcoming outlines stay flat.

## Shapes

Near-square. A cover is a book: 2px at the spine edge, 6px at the fore-edge (`2px 6px 6px 2px`). Controls round to 4px; focus rings to 2px. Rules are 1px hairlines or 1.5px underlines. The drawings are single-weight 1.6px round-capped strokes (2.4px for a fitted curve, 3px for a walked path) on a 200 by 116 viewBox.

## Components

### Course cover (signature)
- **Published:** a link filled with the course colour; Paper White headline at top, the subject drawing pinned to the bottom, then a spine row (language left, academic year right) above a 1px white 45% rule.
- **Forthcoming:** a non-link div, transparent with a 1.5px Hairline inset outline; Muted Slate type, Pencil Grey drawing, Hairline spine rule, "Forthcoming" in the spine.
- **Hover / Focus:** lift and tilt (0.35s, `cubic-bezier(.16,1,.3,1)`); focus adds a 2px Ink outline at 4px offset and replays the drawing.
- **Drawing motion:** each subject replays its own process (minimax values rising and one branch pruned, points landing then a boundary fitted, histogram bars growing then a density drawn, a token walking an isometric level). The rest state is always the finished drawing. It plays once when the cover is 60% in view (staggered 220ms by position) and again on hover or focus; only published covers animate. Reduced motion shows the finished drawing with no transition.

### Part links
Under a published cover: Theory, Exercises, Past exams in Ink 600 15px with a 1.5px Hairline underline that turns Ink on hover. Wrap with a 6px by 16px gap.

### Language switch
EN / ES as two 14px 600 links, 6px 10px padding, 4px radius. The current language is an Ink chip with white text; the other is Muted Slate, Ink on hover.

### Colophon contact
Stacked links in Ink 600 with a transparent 1.5px underline that appears on hover. The email leads, at 19px in Deusto Blue with a permanent underline.

## Do's and Don'ts

### Do:
- **Do** give each published course its full cover in its own identity colour, with all type and line work in Paper White.
- **Do** draw a course's subject in single-weight white strokes on a 200 by 116 canvas, and make its replay show how the result is reached, ending on the finished drawing.
- **Do** keep forthcoming courses as Hairline outlines with Pencil Grey drawings, no links, no motion.
- **Do** set names in condensed heavy Archivo and reading text in Source Sans 3.
- **Do** keep the email link as the one Deusto Blue element outside a cover.

### Don't:
- **Don't** put a course colour on a course that is not published, or reuse one course's colour for another.
- **Don't** add shadows to anything other than a published cover.
- **Don't** add a generic icon-card grid; a course is a volume, not a card with an icon.
- **Don't** use official University of Deusto branding or marks; the site is personal and says so.
