## Next.js Pokedex

[NextPokedex](https://nextpokedex-alpha.vercel.app/) is the first part of a three-phase project to build a Pokedex app using three distinct React tech stacks. In this version, users can explore 12 randomly selected Pokémon and visit dynamic URLs to view detailed information about each one.

[Authenticated](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate) users gain access to an admin panel, where they can interact with the app’s database—fetching Pokémon data from the [PokeAPI](https://pokeapi.co/), and saving, updating, or deleting Pokémon records stored in a Postgres database.

NextPokedex is built with [Next.js](https://nextjs.org/) as the React framework, [Vercel](https://vercel.com/) for hosting, and Vercel [Postgres](https://vercel.com/docs/storage/vercel-postgres) for cloud-based data storage. The app also leverages [Radix Themes](https://www.radix-ui.com/) for accessible UI components and [Tailwind CSS](https://tailwindcss.com/) for styling.

## Goals

1. Build a simple, full-stack application with Next.js
2. **Showcase the power and simplicity of server components and server actions by fetching from a database without useEffect, hooks, or other lifecycle React methods**
3. Gain a deeper understanding of Next.js's static vs. dynamic and client side loading
4. Explore a Next.js-inspired UI methodology
5. Conduct an informal developer experience review using: Next.js, Vercel, Vercel Postgres, Radix Themes, and Tailwind

## Todo

- [x] Project scaffolding (radixui, prettier, etc)
- [x] Host project on Vercel
- [x] Build out basic UI
- [x] Implement PokeAPI calls
- [x] Display data
- [x] Setup postgres tables
- [x] Refine UI
- [x] Get dynamic routes / pages working
- [x] Finish server actions + error handling
- [x] Implement basic authorization /w server actions
- [x] Finish nextifying the UI
- [x] Update README (summary, review, tidying)

## Extras

- [ ] Add extra Pokémon data
- [ ] Add Fonts
- [ ] Dark and Light mode
- [ ] Fetch throttling
- [ ] Handle caching
- [ ] Optimistic updates
- [ ] Analytics

## Scripts

```bash
pnpm dev
# launch development server with live reloading, updates, and debugging.

pnpm build
# bundle project and create deployable app
```

## Review

- Next.js (React Framework) - 8/10

  - Pros
    - New, innovative framework, closely related with the React team
    - Server generated, async friendly development from the ground up
    - UI Looks great
    - Documentation is great
    - Developing mastery of the framework feels fun and empowering
  - Cons
    - A lot of extra small things to learn
    - Some framework implementations feel complicated, hack-y, or very specific
    - Version updates can seemingly 180 design methodology

- Vercel (Hosting) - 10/10

  - Pros
    - Extremely easy 1 click hosting
    - Adding ENV variables is simple
    - Clear, easy-to-navigate UI
    - Generous free tier
  - Cons
    - N/A

- Vercel Postgres (Database) - 9/10

  - Pros
    - Extremely easy to setup
    - Clear, easy-to-navigate UI
    - Fairly generous free tier
  - Cons
    - Could have better documentation for non-ORM implementations

- Radix Themes (Component Library) - 6/10

  - Pros
    - Generally fast development
    - Components look simple and clean
    - Components are accessibility friendly
  - Cons
    - Custom styling of components is an unintuitive hassle
    - Not plug-and-play; need to read documentation on Radix Themes design methodology
    - Docs could be more comprehensive
    - Doesn't tend to play well with Tailwind

- Tailwind (CSS Framework) - 8.5/10
  - Pros
    - Fast development
    - Easy, intuitive implementation
    - Clear, comprehensive docs
    - Easy-to-read styling for simple elements
  - Cons
    - Hard-to-read styling for any moderately complex elements
    - Poor readability when there's many elements in one component

## Dev Notes

- Admin dashboard https://nextpokedex-alpha.vercel.app/admin or http://localhost:3000/
- Vercel: gh
