# Mohith Reddy — Cinematic Developer Portfolio

A production-quality personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## DESIGN CONTRACT

1. The design system is stable.
2. Content updates must not redesign the website.
3. Personal information belongs in data files.
4. Project images belong in assets.
5. Components must remain reusable.
6. Future projects should be added through data.
7. Backend integration should happen through the service/API layer.
8. Do not rewrite working components unnecessarily.
9. Do not change the visual identity unless explicitly requested.
10. Do not add fake information.

## Project Structure
- `src/data/`: Centralized content data (projects, profile, hackathons)
- `src/services/`: Abstraction layer for fetching data (currently local, ready for future backend)
- `src/components/`: Reusable, data-agnostic UI components
- `src/assets/`: All static images, including profile portrait and project screenshots
