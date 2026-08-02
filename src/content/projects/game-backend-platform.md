---
title: Live multiplayer game backend platform
summary: Services behind mobile and console titles — authentication, inventory, matchmaking, match lifecycle, and social graph features for tens of thousands of daily players.
kind: case-study
featured: true
order: 2
stack: [Go, Python, PostgreSQL, Cosmos DB, Kubernetes, Terraform, MQTT, Grafana]
year: 2021
status: shipped
---

## Context

Live games are a reliability product with a fun UI. Backend platform work covered **player identity, economy, matchmaking, and social** for titles with **30K+ daily active players**, including console and multi-platform releases.

*(Anonymized narrative from contract platform engineering in gaming; no internal titles or proprietary APIs detailed beyond public-facing facts.)*

## Problem

- Domains that grow painful when they stay in a monolith-era shape: parties, friends, match flow
- Need for **horizontal scale** and clearer service boundaries without freezes in live ops
- Real-time and near-real-time paths (presence, match lifecycle) alongside classic request/response APIs
- Observability that works when “a match felt wrong” is the only bug report

## Approach

- Backend services for auth, payments/inventory-shaped flows, matchmaking, match lifecycle, and social (parties, clans, friends)
- Incremental **migration of critical domains toward Go** (from a Python service lineage), redesigning models that had hit maintainability walls
- Data on **PostgreSQL** and a distributed document store where access patterns needed it; orchestration with **Kubernetes** and infra as code
- **MQTT** for realtime-ish communication; external platform integrations where the business required them
- Production habits: **Grafana, Loki, Sentry** — dashboards and error signal, not only deploy green

## Outcomes (directional)

- Live titles stayed on a platform that could absorb feature work without rewriting the world each season
- Hot domains (social/match-adjacent) gained clearer ownership and a path off legacy constraints
- Ops and eng shared better signal when failures clustered by service or player journey

## What I’d still push

- Stricter domain events between match and social graphs
- Load tests as release gates for matchmaking paths
- Chaos-friendly health checks for realtime edges
