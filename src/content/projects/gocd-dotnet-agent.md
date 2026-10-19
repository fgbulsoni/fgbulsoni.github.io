---
title: GoCD agent image with .NET SDK
summary: Custom GoCD agent on Ubuntu with dotnet-sdk preinstalled — less bootstrap friction for .NET pipelines.
kind: playground
featured: false
order: 20
stack: [Docker, GoCD, .NET, Ubuntu]
repo: https://github.com/fgbulsoni/gocd_agent_dotnet2.2_ubuntu18.04
status: demo
---

## Intent

CI agents that still need a package install on every job waste minutes and hide environment drift. This image bakes **.NET SDK** into a **GoCD agent** on Ubuntu so pipelines start closer to ready.

## Takeaway

Platform work is often about **removing repeated toil**: pin a base image, document the toolchain, make the path boring. Boring CI is good CI.
