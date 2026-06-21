<h1 align="center"> Next.js </h1>

Next.js is a React framework for building web applications. It comes with features like routing, API routes, server-side rendering, and static site generation, making it a popular choice for full-stack React projects. If this isn't what you're looking for, click [Me](../../NOTEBOOK.md).

```text
project/
│
├── app/                    # Pages, layouts, routes, server actions
│   ├── api/                # API routes
│   ├── dashboard/          # Route segment
│   ├── layout.tsx          # Shared layout
│   └── page.tsx            # Route page
│
├── components/             # Reusable UI components
│
├── lib/                    # Utilities, helpers, database clients
│
├── public/                 # Static assets
│
├── styles/                 # Global styles (optional)
│
├── middleware.ts           # Request middleware
│
├── .env                    # Environment variables
│
└── next.config.ts          # Next.js configuration
```

To start building Next.js applications, install [Node.js](https://nodejs.org/), which includes npm for package management. Next.js runs on Node.js, so no additional runtimes are required. Once installed, make sure the `node`, `npm`, and `npx` commands work in your terminal before creating a new project.

| Command                             | Description                                            |
| ----------------------------------- | ------------------------------------------------------ |
| `npx create-next-app@latest my-app` | Create a new Next.js project using the latest version. |
| `npm run dev`                       | Start the local development server.                    |
| `npm run build`                     | Create a production build.                             |
| `npm run start`                     | Start the production server.                           |
| `npm run lint`                      | Check the project for code issues.                     |
| `npm install`                       | Install project dependencies.                          |
| `npm install package-name`          | Install a package.                                     |
| `npm uninstall package-name`        | Remove a package.                                      |
| `npx next telemetry disable`        | Disable Next.js telemetry.                             |
| `npx next info`                     | Show information about the current environment.        |
| `npx shadcn@latest init`            | Initialize Shadcn UI.                                  |
| `npx shadcn@latest add button`      | Add a Shadcn UI component.                             |
| `npx prisma init`                   | Initialize Prisma.                                     |
| `npx prisma migrate dev`            | Create and apply a migration.                          |
| `npx prisma migrate reset`          | Reset the database and rerun migrations.               |
| `npx prisma generate`               | Generate the Prisma client.                            |
| `npx prisma studio`                 | Open Prisma Studio.                                    |
| `npx auth secret`                   | Generate a secret for NextAuth/Auth.js.                |
| `npm run type-check`                | Run TypeScript type checking.                          |

```
```
