# fgbulsoni.github.io

Personal portfolio for **Felipe Bulsoni** — senior software engineer (backend, DevOps, observability).

Built with **Astro**, **Tailwind CSS v4**, and **TypeScript**. Hosted on **GitHub Pages**.

## Stack (v1)

- Astro static site
- Tailwind CSS (Vite plugin)
- Content Collections for projects (`case-study` | `playground`)
- GitHub Actions → Pages deploy

## Develop

Requires **Node.js ≥ 22.12**.

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Content

| Path | Purpose |
|------|---------|
| `src/data/site.ts` | Bio, domains, skills, staff experience, contracts, links |
| `src/content/projects/*.md` | Case studies + playground writeups |
| `src/pages/resume.astro` | Printable resume (`/resume/` → Print → PDF) |

Project frontmatter:

```yaml
title: string
summary: string
kind: case-study | playground
featured: boolean
order: number
stack: string[]
repo: url (optional)
demo: url (optional)
year: number (optional)
status: shipped | demo | learning | wip
```

## Deploy

Pushes to `master` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

In the GitHub repo: **Settings → Pages → Source → GitHub Actions**.

## License

Apache-2.0 (see [LICENSE](LICENSE)).
