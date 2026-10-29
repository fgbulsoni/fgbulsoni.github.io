---
title: bxretro — team retro in one binary
summary: A live retrospective board for my team — hidden cards with a countdown reveal, spotlight, reactions, timer and export — that replaced a paid retro service. One Go binary and SQLite on the facilitator's machine; the team joins through a Cloudflare tunnel link, with no accounts and no server.
kind: playground
featured: true
order: 6
stack: [Go, JavaScript, SQLite, WebSockets, Cloudflare Tunnel]
year: 2026
status: shipped
---

## Problem

The team ran retros on a paid service with limits on boards and features, when all it really needed was three columns, text cards and a timer. Paying per seat for that — and putting the team's candid feedback on someone else's server — didn't add up.

## Approach

- **One binary, started at retro time**: a **Go** server with plain JS front end and **SQLite** runs on the facilitator's laptop. A **Cloudflare quick tunnel** gives the team an HTTPS link; when the retro ends, the binary stops and nothing stays online.
- **Hidden cards for real**: everyone writes without seeing the others — the server doesn't even send hidden text until the facilitator reveals, with a "3, 2, 1" countdown and cards unblurring column by column.
- **Facilitation tools**: spotlight one card at a time on everyone's screen, drag cards together to merge repeated topics, a shared timer with a bell, and synced background music.
- **Live and fun**: who's online, "typing" hints, emoji reactions and confetti show up on every screen at once.
- **Wrap-up**: a summary with cards per column, participation and the most-reacted card; export to PNG, JPEG, Markdown or CSV. Every retro stays in history.
- English and Portuguese, light and dark, works on a phone.

## Why it matters

It's a small tool with an outsized effect on a recurring team ritual: free, private by default, and shaped around how this team actually runs retros. It's also a reminder that a lot of SaaS can be one binary and a tunnel.

## What's next

- Retro-game music from SNES `.spc` rips, played in the browser — a spike showed it works
