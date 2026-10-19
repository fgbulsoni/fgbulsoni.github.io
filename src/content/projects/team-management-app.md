---
title: Engineering team management app
summary: A full web app on top of Jira for helping manage and run an engineering team — track feature delivery, work the support queue against SLAs, manage the roster and quality goals, and resolve bug attribution with AI assist, all from one place.
kind: playground
featured: true
order: 2
stack: [React, TypeScript, Vite, Python, SQLite, Jira API, Claude Code]
year: 2026
status: shipped
---

## Problem

Jira is a great source of truth — it's where the stories live. But managing a team means asking questions it can't answer on its own: which epics are slipping, which support tickets are about to breach SLA, who is overloaded, how the team is tracking against its quality goals. Those need **totals, ratios, comparisons and history** — hours over effort, bugs caused over tasks delivered, time spent in each workflow stage — and Jira's filters and gadgets don't compute them. Turning the raw issues into intelligence you can act on usually means paid third-party add-ons, or a spreadsheet rebuilt every week.

## Approach

A local web app — **React** SPA, **Python** API and report engine, **SQLite** cache — that both reads from and acts on Jira. It has grown into separate workspaces, each built around a recurring management job:

- **Feature health**: pick one epic or a portfolio and see remaining work, scope changes, risk, trends, and staffed finish dates. Views are shareable by URL.
- **Support queue**: escalated tickets ordered by resolution SLA with a live countdown, colour-coded urgency, and actions — transition, assign, link, open a bug — without leaving the page and with single clicks.
- **Team view**: roster with roles and stacks; per-person open work, history, time spent in each workflow stage, hours logged, and the team's yearly quality goals (rework, escape rate, effort accuracy) computed from Jira history.
- **Bug attribution assist**: metrics like rework and escape rate only mean something if each bug is traced back to who introduced it — the developer whose code had the bug, or the QA who let it through. Doing that by hand for every bug is slow and easy to skip. The app works it out: plain code settles the clear cases from Jira history (who worked the issue, who moved it through QA) and `git blame` on the fix; **Claude** only weighs in on the ambiguous ones and on attributions someone has disputed. Each suggestion comes with its evidence, and nothing is written back to Jira until I approve it.
- **Fast by design**: incremental refreshes, cached lookups, and parallel fetches keep it quick without hammering Jira; long refreshes run in the background and survive a page reload.

## Why it matters

It's the kind of tool you only build when you're the user: every feature exists because I needed the answer that week. It replaces a pile of filters, spreadsheets and weekly rituals with one app that gives the insight and lets you act on it in the same place.

## What's next

- Packaging it so other leads can run it
- Trend alerts instead of only on-demand views
