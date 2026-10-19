---
title: Portfolio tracker
summary: Self-hostable investment tracker for P&L, dividends, and multi-currency, multi-market portfolios — built with a distributed team, where I'm one of two maintainers and the top contributor.
kind: playground
featured: true
order: 3
stack: [Go, Gin, SQLite, TypeScript, React, Vite, Docker, GitLab CI]
year: 2026
status: wip
---

## Problem

Open-source portfolio trackers tend to be hard to install, hard to trust, and built around one market. Investors with holdings in Brazil, the US, and India — plus crypto and fixed income — end up stitching spreadsheets together.

## Approach

- **Go + Gin** API shipped as a single binary; **SQLite** by default (pure Go, no CGO) behind a repository layer so PostgreSQL can arrive for hosted mode.
- **React 19 + Vite** SPA, localised in English, Portuguese, and Hindi.
- **Money done carefully**: ISO 4217 minor units, FX rates, TWR and money-weighted returns, and a CI gate that scans production code for unsafe money handling.
- **Multi-market modules** owned by teammates in each region — Brazilian treasury bonds, US instruments, crypto — instead of one "first market" bottleneck.
- **Data in** from live providers, manual entry, or file import; a seeded demo book keeps first run useful offline.
- Optional **AI analysis** through the user's own logged-in CLI, with no tokens stored.
- Decisions recorded as **ADRs**; coverage gates and pre-push checks keep a fast-moving team honest.

## My role

One of the two maintainers and the largest contributor in a team of about eight. Beyond reviewing and merging the team's work and steering the roadmap, I build across the stack — import flows, AI provider integration, quality gates, and the review follow-ups that keep the codebase coherent as more people join.

## What's next

- Public release and hosted option
- Real-estate and rental-income module
- Desktop and mobile clients on the same API
