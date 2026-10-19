---
title: Surgery budget maker for medical clinics
summary: Desktop app that runs a surgical clinic's front office — patients, a priced procedure catalog, automatic quotes with discounts and payment plans, PDF/Word export, NFS-e issuing, and basic stock control.
kind: playground
featured: true
order: 1
stack: [Go, Fyne, SQLite, PDF / DOCX generation, NFS-e, macOS packaging]
year: 2026
status: shipped
---

## Problem

Surgical clinics often build quotes by hand: copy last month's spreadsheet, look up the procedure price for the patient's tier, apply discounts, work out the deposit and installments, paste it into a letterhead, and hope nothing drifted. The people doing it are **not technical**, and the data is patient data — no SaaS, no cloud.

## Approach

- **Single-binary desktop app** in Go with a Fyne GUI, packaged for macOS so it installs like any other app. Everything lives in a local **SQLite** file.
- **Patient registry** with Brazilian masks and lookups (CPF/CNPJ, CEP address autofill) — the fields invoicing needs later.
- **Procedure catalog** priced by tier, plus a reusable catalog of extras (implants, technology fees).
- **Automatic budgets**: pick a patient and one or more procedures; the app computes gross and final totals, splits fees vs hospital vs extras, applies fixed then percentage discounts, and lays out the deposit, installments and PIX (cash) options with a validity date.
- **Export** to branded **PDF** (default) or **Word**, in Portuguese or English, plus a WhatsApp summary.
- **NFS-e** (service invoice) issuing against the municipal system, so a closed budget turns into an invoice without retyping.
- **Basic stock control** — items, lots and movements — for the supplies the clinic keeps on hand.
- **Clinic profiles**: name, letterhead and settings live in a per-clinic folder with a YAML config, so any clinic that follows the same quoting process can run it under its own brand.

## Why it matters

Small businesses rarely get software shaped to how they actually work. This one is: Portuguese-first UI, money math done in one place and tested, and a release path (pre-push gates, CI, Mac packaging) that keeps a non-technical user's app boring and reliable.

## What's next

- Fuller invoicing flow (cancellations, reports for the accountant)
- Stock tied to procedures, so a budget can reserve supplies
- Sync/backup for a second workstation without giving up local-first
