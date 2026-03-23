<h1 align="center">
<img src="https://cdn.worldvectorlogo.com/logos/nextjs-13.svg" alt="Laravel Logo" width="200">
</h1>

When developing a Next.js project, I organize everything under the `src/` directory. The structure is built around the App Router — pages, layouts, Server Actions, and API routes all live close to where they are used. I use Tailwind CSS for styling and shadcn/ui for components. The goal is to keep each part of the app easy to find and easy to change without touching anything else.

```
src/
├── app/
│   ├── (public)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── about/
│   │       └── page.tsx
│   │
│   ├── (protected)/
│   │   ├── layout.tsx
│   │   └── dashboard/
│   │       ├── page.tsx
│   │       └── settings/
│   │           └── page.tsx
│   │
│   ├── api/
│   │   └── [feature]/
│   │       └── route.ts
│   │
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── error.tsx
│
├── components/
│   ├── ui/                   
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── dialog.tsx
│   │
│   ├── [feature]/            
│   │   └── FeatureCard.tsx
│   │
│   └── layout/
│       ├── Navbar.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
│
├── actions/
│   └── [feature]/
│       ├── createFeature.ts
│       └── deleteFeature.ts
│
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   ├── utils.ts
│   └── constants.ts
│
├── hooks/
│   └── useFeature.ts
│
└── types/
    └── index.ts
```

### App Directory
This is the core of the project. Every page, layout, and API route lives here. I use route groups to separate parts of the app that need different layouts or access rules.

- **`(public)/`**
  - Pages anyone can visit without logging in.
  - Has its own `layout.tsx` with a navbar and footer.
  - Examples: home page, about page, pricing page.

- **`(protected)/`**
  - Pages that require the user to be logged in.
  - Has its own `layout.tsx` with a sidebar and auth check.
  - Examples: dashboard, settings, profile.

- **API Routes**
  - Used for things that need a real HTTP endpoint — webhooks, third-party callbacks, or routes called from outside the app.
  - Each feature gets its own folder under `app/api/[feature]/route.ts`.
  - Keep these thin. Just handle the request and call a function from `actions/` or `lib/`.
  - For everything else inside the app, use Server Actions instead.

- **Global Files**
  - `layout.tsx` — Root layout. Sets up fonts, global metadata, and any top-level providers.
  - `not-found.tsx` — Shows when the URL doesn't match any page.
  - `error.tsx` — Shows when something breaks at runtime.

### Components Directory
All UI components live here, split into three groups.

- **`ui/`**
  - These come from shadcn/ui and are the base building blocks — `Button`, `Input`, `Dialog`, `Card`, and so on.
  - Don't edit these for feature-specific needs. Use them as-is.
  - When you run `npx shadcn@latest add`, the component goes here.

- **`[feature]/`**
  - Components built for a specific part of the app, like `UserCard` or `InvoiceTable`.
  - They use `ui/` components inside them but add real product logic and layout.
  - Name the folder after the feature, for example `components/users/` or `components/invoices/`.

- **`layout/`**
  - Structural components like `Navbar`, `Sidebar`, and `Footer`.
  - Used inside route group layouts, not inside pages directly.

### Actions Directory
Server Actions live here. These are the main way the app writes data — form submissions, mutations, and any logic that needs to run on the server.

- **Structure**
  - Each feature gets its own folder, for example `actions/users/` or `actions/invoices/`.
  - Each file does one thing, like `createUser.ts` or `sendInvoice.ts`.

- **Rules**
  - Always mark them with `"use server"` at the top.
  - Validate incoming data before doing anything with it.
  - Call `lib/db.ts` for database work — don't write queries directly in the action.
  - Return a result the UI can use, like `{ success: true }` or `{ error: "..." }`.

### Lib Directory
Setup and helper code shared across the whole app. Nothing here is specific to one feature.

- `db.ts` — The database client (e.g. Prisma). Set it up once and export the instance.
- `auth.ts` — Auth configuration (e.g. NextAuth). Export session helpers and auth options from here.
- `utils.ts` — Small helper functions like formatting, string trimming, or date handling.
- `constants.ts` — Fixed values used across the app, like role names, status labels, or base URLs.

### Hooks Directory
Custom React hooks that components use to manage local state or talk to the server.

- **Rules**
  - Hooks are client-side only. Don't use them in Server Components or Server Actions.
  - Keep them focused — one hook per concern.
  - If a hook only makes sense for one feature, consider co-locating it in `components/[feature]/` instead.

### Types Directory
Shared TypeScript types used across the app.

- `index.ts` — Export all shared types from one place so imports stay clean.
- Only put types here that are used in more than one place.
- Types that only belong to one component or action should stay in that file.