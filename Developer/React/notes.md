<h1 align="center"> React </h1>

React is a JavaScript library for building user interfaces using reusable components and a declarative rendering model. It is commonly used for single-page applications (SPAs) and serves as the foundation for frameworks such as Next.js.

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

To develop React applications, install [Node.js](https://nodejs.org/), which includes npm for package management. Most modern React projects use [Vite](https://vitejs.dev/) as the build tool and development server. After installation, ensure that Node.js is available through **Environment Variables > Path**. Most installers configure this automatically, but if a command is not recognized in the terminal, verify that its installation directory has been added to the `Path` variable.

| Command                                                | Description                                           |
| ------------------------------------------------------ | ----------------------------------------------------- |
| `npm create vite@latest my-app -- --template react`    | Create a new React project using Vite.                |
| `npm create vite@latest my-app -- --template react-ts` | Create a new React TypeScript project using Vite.     |
| `npm run dev`                                          | Start the Vite development server with hot reloading. |
| `npm run build`                                        | Create an optimized production build.                 |
| `npm run preview`                                      | Preview the production build locally.                 |
| `npm install`                                          | Install project dependencies from `package.json`.     |
| `npm install package-name`                             | Install a dependency into the project.                |
| `npm uninstall package-name`                           | Remove a dependency from the project.                 |
| `npm run lint`                                         | Run ESLint to detect code quality issues.             |
| `npm run type-check`                                   | Run TypeScript type checking (if configured).         |
| `npm install react-router-dom`                         | Install React Router for client-side routing.         |
| `npm install axios`                                    | Install Axios for API requests.                       |
| `npm install zustand`                                  | Install Zustand state management.                     |
| `npm install @tanstack/react-query`                    | Install React Query for server-state management.      |
| `npm install tailwindcss @tailwindcss/vite`            | Install Tailwind CSS for styling.                     |
| `npx shadcn@latest init`                               | Initialize Shadcn UI.                                 |
| `npx shadcn@latest add button`                         | Add a Shadcn UI component.                            |
| `npm install react-hook-form`                          | Install React Hook Form.                              |
| `npm install zod`                                      | Install Zod schema validation.                        |
| `npm install react-hook-form @hookform/resolvers zod`  | Install a common form validation stack.               |

```
```
