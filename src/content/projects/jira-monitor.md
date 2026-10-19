---
title: Jira bug monitor and worker
summary: A lightweight Go monitor and worker pair — the monitor watches Jira for bug changes and publishes them over MQTT; the worker acts on them. Today it notifies Teams and the desktop; next, it triages bugs with AI as they arrive.
kind: playground
featured: true
order: 4
stack: [Go, SQLite, MQTT, systemd, Raspberry Pi]
year: 2025
status: shipped
---

## Problem

When you're responsible for a team's bug queue, finding out about a new or reopened bug an hour late is an hour lost. Jira's own notifications are either too noisy or too quiet, and saved filters only help when you remember to open them. I wanted the changes to **come to me** — and, eventually, to have something already working on them by the time I look.

## Approach

- The **monitor**, a Go poller, queries Jira on a timer, caches issues in **SQLite**, and diffs each run against the cache to find what actually changed.
- Changes are published on **MQTT** topics. That pub/sub split is the point: the monitor doesn't know or care who's listening, so workers can grow or multiply without touching it.
- The **worker**, a Go listener, consumes those events. Today its job is notification — **Teams** messages and **desktop notifications**, filtered so only what matters makes noise — but notifying is just the first thing it does, not what it is.
- Everything is **plain Go binaries and systemd** timers and services, running unattended on a **Raspberry Pi**. The always-on worker sits at about **23 MB of RAM and ~0% CPU**; the monitor runs as a oneshot on a timer and exits, so between cycles it costs nothing at all. No runtime, no containers, no scheduler service to babysit.

## Why it matters

The event-driven shape (poll → diff → publish → consume) is the same one I'd use for any integration where the source system has no good webhooks. And because it's this cheap to run, it can stay on all the time on hardware that costs less than a month of most SaaS tools.

## What's next

- **AI triage in the worker**: each new bug triggers a Claude agent that triages it on arrival — gather context, find related issues and likely code, suggest priority and owner — so the first human look starts from a draft, not from zero
- Smarter notification ranking (fewer, better pings)
- More consumers on the same topics: daily digests, feeds into the team management app
