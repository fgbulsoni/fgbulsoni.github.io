# fgbulsoni.github.io — Astro site helpers. `make help` lists targets.

.DEFAULT_GOAL := help

ASTRO := npx astro

.PHONY: help install dev start stop status logs build preview clean

help:
	@echo "fgbulsoni.github.io — make targets"
	@echo ""
	@echo "  Run"
	@echo "  make dev       Dev server in the foreground, hot reload (http://localhost:4321)"
	@echo "  make start     Dev server in the background"
	@echo "  make stop      Stop the background dev server"
	@echo "  make status    Is the background dev server running?"
	@echo "  make logs      Background dev server logs"
	@echo ""
	@echo "  Build"
	@echo "  make build     Production build into dist/"
	@echo "  make preview   Build, then serve dist/ like production"
	@echo "  make install   npm ci from the lockfile"
	@echo "  make clean     Remove dist/ and .astro/"

# Reinstall only when the lockfile changes.
node_modules: package-lock.json
	npm ci
	@touch node_modules

install: node_modules

dev: node_modules
	$(ASTRO) dev

start: node_modules
	$(ASTRO) dev --background

stop:
	$(ASTRO) dev stop

status:
	$(ASTRO) dev status

logs:
	$(ASTRO) dev logs

build: node_modules
	$(ASTRO) build

preview: build
	$(ASTRO) preview

clean:
	rm -rf dist .astro
