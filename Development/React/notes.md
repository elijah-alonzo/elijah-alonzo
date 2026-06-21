<h1 align="center"> React </h1>

React is a JavaScript library for building user interfaces. It uses reusable components to build applications and is one of the most popular choices for frontend development. Frameworks such as Next.js are built on top of React. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
project/
│
├── public/                 # Static assets
│
├── src/
│   ├── assets/             # Images, icons, fonts
│   ├── components/         # Reusable UI components
│   ├── pages/              # Application pages/views
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API calls & external services
│   ├── utils/              # Helper functions
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Application entry point
│
├── .env                    # Environment variables
│
└── vite.config.ts          # Vite configuration
```

To start building React applications, install [Node.js](https://nodejs.org/), which includes npm for package management. Most React projects today use [Vite](https://vitejs.dev/) for creating projects and running the development server. Once installed, make sure the `node`, `npm`, and `npx` commands work in your terminal before creating a new project.

| Command                                                | Description                             |
| ------------------------------------------------------ | --------------------------------------- |
| `npm create vite@latest my-app -- --template react`    | Create a new React project with Vite.   |
| `npm create vite@latest my-app -- --template react-ts` | Create a new React TypeScript project.  |
| `npm run dev`                                          | Start the development server.           |
| `npm run build`                                        | Create a production build.              |
| `npm run preview`                                      | Preview the production build locally.   |
| `npm install`                                          | Install project dependencies.           |
| `npm install package-name`                             | Install a package.                      |
| `npm uninstall package-name`                           | Remove a package.                       |
| `npm run lint`                                         | Check the project for code issues.      |
| `npm run type-check`                                   | Run TypeScript type checking.           |
| `npm install react-router-dom`                         | Install React Router.                   |
| `npm install axios`                                    | Install Axios for API requests.         |
| `npm install zustand`                                  | Install Zustand state management.       |
| `npm install @tanstack/react-query`                    | Install React Query.                    |
| `npm install tailwindcss @tailwindcss/vite`            | Install Tailwind CSS.                   |
| `npx shadcn@latest init`                               | Initialize Shadcn UI.                   |
| `npx shadcn@latest add button`                         | Add a Shadcn UI component.              |
| `npm install react-hook-form`                          | Install React Hook Form.                |
| `npm install zod`                                      | Install Zod validation.                 |
| `npm install react-hook-form @hookform/resolvers zod`  | Install a common form validation stack. |

```
```
