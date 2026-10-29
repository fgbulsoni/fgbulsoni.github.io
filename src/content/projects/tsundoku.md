---
title: tsundoku — self-hosted manga catalog
summary: One library for the manga and webtoons I read across many sites — read state, new-chapter alerts, duplicate grouping, and a suggestion feed. The app knows no site; every source is a JavaScript plugin installed at runtime. Runs on a Raspberry Pi in a few MB of RAM.
kind: playground
featured: true
order: 5
stack: [Go, SQLite, goja, React, TypeScript, Docker, Raspberry Pi]
year: 2026
status: shipped
---

## Problem

Reading manga and webtoons means reading on a dozen different sites, each with its own account, history and idea of what you've read. Nothing tells you when a series you finished months ago gets new chapters, and the same title shows up again and again — re-uploaded, retranslated, renamed — so a plain bookmark list turns into a pile of duplicates.

## Approach

- **Plugin-first**: the core knows no site. Each source is a **JavaScript extension** installed at runtime from an extension repository added in the UI — the same idea as Mihon/Tachiyomi repos. Adding a site means writing one plugin, never rebuilding the app. Files are checked by sha256, and each job runs in its own sandboxed **goja** VM.
- **Duplicates grouped on its own**: a pure normalizer strips group tags, languages, chapter and volume markers from titles; a matcher scores each new entry against known works using title keys, creator, chapters and a **perceptual hash** of the cover. It merges, splits, or asks — and only asks when it really can't tell. Every decision can be undone.
- **Feeds and alerts**: a scheduler checks each source on its own cron, flags new chapters on works you've read, and builds a suggestion feed from the tags you like and the ones you block.
- **Built for a Pi**: one static **Go** binary with the **React** UI embedded, one **SQLite** file, a ~22 MB `FROM scratch` arm64 image. Idle it uses a few MB of RAM; each running plugin job adds about 2.5 MB.
- Offline test runner and fixtures for plugins, so a site changing its HTML shows up as a failing test, not a silent empty feed.

## Why it matters

It's a small exercise in drawing the right boundary: keep the core generic and stable, and push everything that changes often — site quirks, APIs, HTML layouts — into small plugins that can be swapped without touching it.

## What's next

- More source plugins on the same contract — one file per site, no change to the app
