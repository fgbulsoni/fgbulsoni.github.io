---
title: Healthtech integration platform
summary: Client agents and server-side services that connect a healthcare marketplace to heterogeneous customer ERPs — designed for scale, operability, and a growing engineering team.
kind: case-study
featured: true
order: 1
stack: [C# / .NET, Python, FastAPI, microservices, Docker, CI/CD, AWS]
year: 2019
status: shipped
---

## Context

Healthcare marketplaces only create value when they talk cleanly to **customer ERPs** — purchase, catalog, and operational data moving both ways without a bespoke snowflake per hospital or distributor. The work sat at the intersection of product, platform, and customer delivery.

*(Details anonymized; patterns from staff work in healthtech integrations.)*

## Problem

- Many customers, many ERP shapes, one product surface that had to stay coherent
- Integrations that were hard to operate: weak visibility, uneven quality bars, tribal knowledge
- A team that needed to **scale headcount and throughput** without every integration becoming a hero project

## Approach

- An **integration engine** ecosystem: **client-side agents** where customer networks required it, plus **server-side services** for orchestration, APIs, and shared capabilities
- **High-performance APIs** in C# (.NET Core) and Python (FastAPI) as the contract layer between platform and external systems
- **Data paths** (including lake-oriented pipelines where batch enrichment mattered) treated as productized flows, not one-off scripts
- Delivery rails — Docker, quality gates, artifact repos, CI/CD — so merges and releases were boring on purpose
- Engineering management in parallel: backlog, prioritization, and technical direction while staying in design and implementation reviews

## Outcomes (directional)

- Team grew from a small core to **12+** engineers and QAs on the integration surface
- Clearer split between **shared platform** and **customer-specific adapters**
- Faster path from “new ERP shape” to something operable, with room for data and API work in the same ecosystem

## What I’d still push

- Stronger end-to-end tracing across agent → API → downstream jobs
- Contract tests as the default for every adapter
- Explicit SLOs for integration freshness and failure budgets — not only “it deployed”
