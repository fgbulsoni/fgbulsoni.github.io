---
title: Opinionated FastAPI project template
summary: A minimal FastAPI skeleton that encodes good defaults — structure, practices, and a clean starting point for real services.
kind: playground
featured: true
order: 5
stack: [Python, FastAPI, API design]
repo: https://github.com/fgbulsoni/fastapi_templated_project
year: 2024
status: learning
---

## Intent

Greenfield Python APIs go wrong fastest when every service invents its own layout. This template captures a **sensible baseline** so the next FastAPI service starts closer to production habits than a tutorial `main.py`.

## What’s in the playground

- Project layout that separates concerns instead of dumping everything in one module
- Patterns aligned with maintainable FastAPI services (routing, config, structure)
- A place to evolve shared conventions (logging, settings, health) without ceremony

## When I’d use it

Spinning up a small internal API, a workshop service, or a spike that might graduate to something real — and I don’t want to re-decide folder structure under time pressure.

## Evolution ideas

- Auth middleware plug-in
- OpenAPI examples + contract tests
- Docker multi-stage build + non-root user
- Structured logging hooks (same philosophy as the ELK case study)
