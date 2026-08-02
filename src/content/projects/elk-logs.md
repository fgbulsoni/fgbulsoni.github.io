---
title: Structured logging with ELK on Kubernetes
summary: Lab stack — .NET sample app on Kind shipping JSON logs into ELK for queryable analysis in Kibana. Public reference for log shape and local K8s wiring.
kind: playground
featured: false
order: 10
stack: [C# / .NET, Kubernetes, Kind, Elasticsearch, Logstash, Kibana, Docker]
repo: https://github.com/fgbulsoni/elk-logs
year: 2025
status: demo
---

## Problem

Logs that are only lines on disk die the moment you need to debug across pods. I wanted a **reproducible local stack** that shows how a service should emit structured logs and how an ELK pipeline turns them into something you can filter in Kibana.

## Approach

- Sample **.NET** application that writes **JSON** logs (fields you can query, not free-text soup).
- **Kind** cluster so the Kubernetes path is real without cloud cost.
- Full **ELK** stack wired to parse and index those JSON events.
- Focus on the path from container stdout → Logstash/parser → Elasticsearch → Kibana.

## Why it matters

Observability is part of backend craft. Shipping a feature without a log model is half a feature. This project is a **portable reference** for structured logging on K8s — useful as a teaching kit and as a baseline when standing up real environments.

## What’s next (production lens)

- Log sampling and PII redaction policies
- Correlation IDs across service boundaries
- Dashboards + alerts, not only search
- Swap Kind for a managed cluster when the pattern is proven
