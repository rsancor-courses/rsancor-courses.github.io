# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: plain static HTML/CSS/JS, no build step (one page in two languages; Quarto would add Bootstrap and a build for nothing). Course sites use Quarto. Deployed to GitHub Pages from the `rsancor-courses` org as `rsancor-courses.github.io`. English at `/`, Spanish at `/es/`, with a language switch.

## Users

University of Deusto students of the four courses (arriving from ALUD/Moodle, a link, or a search) who need to reach their course site fast. Secondary: other lecturers and anyone curious about the material, since the site is public.

## Product Purpose

A personal teaching hub: a catalog of course cards that send visitors to each course site, plus a short "about me" with email and profile links. Little else. Success: a student finds their course and leaves in one click.

## Positioning

The front door to one lecturer's open course material (theory, solved exercises, solved past exams, interactive pieces), which complements, not replaces, the university's official Moodle (ALUD).

## Operating Context

ALUD (Moodle) remains the official channel for grades, submissions and announcements. Each course site is a separate Quarto site under the same org (e.g. `/intro-ai/`). Course material is licensed CC BY-NC-SA.

## Capabilities and Constraints

- Courses: Introduction to AI (EN; mostly paper exercises, some code), Machine Learning (EN; code and maths heavy), Data Science (EN; code and maths heavy), Estructura y Diseño de Videojuegos / EDiV (ES; theoretical).
- About me: short bio, email, links to Deusto staff profile, Google Scholar / ORCID, LinkedIn.
- Open: exact URLs of the profiles, bio text, photo, degree names for each course, which courses are live vs in preparation.
- Must not look like an official University of Deusto site; it can say the courses are taught at Deusto.

## Brand Commitments

Existing course material uses a Deusto-style blue accent (#196bde), Source Sans 3 and JetBrains Mono (see UDEUSTO_INTRO/theme). Reference sites the user likes, as craft bar not as look: Hugging Face Learn (course catalog with cards), Andrew Heiss teaching pages, Red Blob Games.

## Evidence on Hand

Logos and licence badges in UDEUSTO_INTRO/img. No bio, photo or course descriptions written yet: anything shown in sketches is placeholder.

## Product Principles

- One click to the course: the catalog leads.
- Open and honest: public material, clear licence, clear that Moodle is official.
- One family: the hub and the four course sites read as the same system.
- Low maintenance: one page, two languages, no build gymnastics.
