# Learning Dashboard

A modern responsive learning dashboard built with Next.js, Tailwind CSS, Framer Motion, and Supabase. The project focuses on creating a highly interactive Bento-style UI with smooth animations, responsive layouts, and optimized server/client rendering.

---

# Tech Stack

* Next.js 15 (App Router)
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Supabase

---

# Project Architecture

The application follows a modular component-driven architecture to improve scalability, maintainability, and reusability.

## Folder Structure

```bash
components/
 ├── dashboard/
 │    ├── DashboardGrid.tsx
 │    ├── HeroTile.tsx
 │    ├── ActivityTile.tsx
 │    └── CourseCard.tsx
 │
 ├── sidebar/
 │    ├── Sidebar.tsx
 │    └── SidebarItem.tsx
 │
 └── ui/
      └── BentoCard.tsx
```

Each feature is separated into focused reusable components:

* `Sidebar` handles navigation and responsive behavior
* `DashboardGrid` controls layout and staggered animations
* `HeroTile`, `ActivityTile`, and `CourseCard` represent Bento tiles
* `BentoCard` provides shared card styling and hover interactions

This structure keeps UI concerns isolated and makes scaling easier.

---

# Server / Client Component Strategy

The project uses Next.js App Router’s hybrid rendering model.

## Server Components

Server Components were used for:

* Data fetching from Supabase
* Initial page rendering
* Reducing unnecessary client-side JavaScript



---

## Client Components

Client Components were only used where interactivity or animation was required.

Examples include:

* Sidebar state management
* Framer Motion animations
* Hover interactions
* Progress bar animations
* Mobile navigation
* Staggered page load animations

These components use `"use client"` to enable hooks and browser-side interactions.

This separation helped maintain a balance between performance and rich UI behavior.

---


# Challenges Faced

## 1. Hydration Mismatch Errors

A major issue occurred because random activity data was being generated during server rendering, causing mismatches between server HTML and client HTML.

### Problem

Using:

Math.random()


inside rendered JSX caused different outputs between server and client.

### Solution

The random data generation was moved into:

useEffect()

This ensured random values were generated only on the client after hydration.

---

## 2. Sidebar Animation Click Issues

The animated active background initially blocked click events during layout transitions.

### Solution

The animated background layer was updated with:

pointer-events-none

This prevented the motion layer from intercepting clicks.

---

## 3. Responsive Bento Layout

Maintaining a visually balanced Bento grid across desktop, tablet, and mobile layouts required careful handling of:

* column spans
* tile heights
* responsive breakpoints
* stretched card layouts

Special attention was given to ensuring Hero tiles aligned properly beside Activity tiles.

---



# Conclusion

This project demonstrates a modern full-stack frontend architecture using Next.js App Router with a strong focus on:

* responsive design
* component reusability
* animation systems
* performance optimization
* clean UI engineering

The final result is an interactive and scalable learning dashboard with production-style frontend architecture and polished user experience.
