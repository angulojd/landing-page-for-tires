# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for "Llantas Angulo" — a tire sales business. Spanish-language site built with Next.js (App Router) and bootstrapped via v0. Deploys automatically to Vercel on merge to `main`. Linked to a v0 project for continued development.

## Commands

- `pnpm dev` — start dev server (localhost:3000)
- `pnpm build` — production build
- `pnpm lint` — run ESLint

Package manager is **pnpm** (see `pnpm-lock.yaml`).

## Tech Stack

- **Next.js 16** with App Router, React 19, TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/postcss`; config lives in `app/globals.css`, not a separate tailwind.config)
- **shadcn/ui** (new-york style, RSC-enabled) — primitives in `components/ui/`
- **Lucide React** for icons
- **Vercel Analytics** integrated in root layout

## Architecture

Single-page app: `app/page.tsx` composes all landing page sections in order. Each section is a self-contained component in `components/`:

`Header → Hero → Products → Brands → Features → Testimonials → CTA → Footer → WhatsAppButton`

- `components/ui/` — shadcn/ui primitives (do not manually edit; use `npx shadcn@latest add <component>`)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `hooks/` — shared React hooks
- Path alias: `@/*` maps to project root

## Key Details

- HTML lang is `es` (Spanish) — all user-facing text should be in Spanish
- WhatsApp floating button is a core CTA element for the business
- No test framework is configured
- No ESLint config file present — uses Next.js defaults
