<h1 align="center"> Next.js </h1>

Next.js is a React framework for building full-stack web applications with server-side rendering, static site generation, API routes, and optimized routing.

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

To develop Next.js applications, install [Node.js](https://nodejs.org/), which includes npm for package management. Next.js runs on Node.js and does not require additional runtimes such as PHP. After installation, ensure that Node.js is available through **Environment Variables > Path**. Most installers configure this automatically, but if a command is not recognized in the terminal, verify that its installation directory has been added to the `Path` variable.

| Command                             | Description                                                |
| ----------------------------------- | ---------------------------------------------------------- |
| `npx create-next-app@latest my-app` | Create a new Next.js project using the latest version.     |
| `npm run dev`                       | Start the local development server with hot reloading.     |
| `npm run build`                     | Create an optimized production build.                      |
| `npm run start`                     | Start the production server after building the project.    |
| `npm run lint`                      | Run ESLint to detect code quality issues.                  |
| `npm install`                       | Install project dependencies from `package.json`.          |
| `npm install package-name`          | Install a dependency into the project.                     |
| `npm uninstall package-name`        | Remove a dependency from the project.                      |
| `npx next telemetry disable`        | Disable anonymous Next.js telemetry.                       |
| `npx next info`                     | Display information about the current Next.js environment. |
| `npx shadcn@latest init`            | Initialize Shadcn UI in the project.                       |
| `npx shadcn@latest add button`      | Add a Shadcn UI component.                                 |
| `npx prisma init`                   | Initialize Prisma configuration.                           |
| `npx prisma migrate dev`            | Create and apply a new database migration.                 |
| `npx prisma migrate reset`          | Reset the database and rerun migrations.                   |
| `npx prisma generate`               | Generate the Prisma client.                                |
| `npx prisma studio`                 | Open Prisma Studio for database management.                |
| `npx auth secret`                   | Generate a secret for NextAuth/Auth.js.                    |
| `npm run type-check`                | Run TypeScript type checking (if configured).              |

```
```
