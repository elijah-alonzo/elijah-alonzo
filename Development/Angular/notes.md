<h1 align="center"> Angular </h1>

Angular is Google's frontend framework for building web applications. It comes with many features built in, such as routing, forms, API handling, and state management, making it a popular choice for larger applications. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
project/
│
├── src/
│   ├── app/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages/views
│   │   ├── services/        # Business logic & API calls
│   │   ├── guards/          # Route protection
│   │   ├── interceptors/    # HTTP request/response handlers
│   │   ├── app.routes.ts    # Application routes
│   │   └── app.config.ts    # Application configuration
│   │
│   ├── assets/              # Images, icons, fonts
│   ├── styles.css           # Global styles
│   └── main.ts              # Application entry point
│
├── public/                  # Static assets
│
├── .env                     # Environment variables (if configured)
│
└── angular.json             # Angular workspace configuration
```

To start building Angular applications, install [Node.js](https://nodejs.org/) first since it includes npm. After that, install the [Angular CLI](https://angular.dev/tools/cli), which provides commands for creating projects, generating components, running development servers, and building applications. Once everything is installed, make sure the `node`, `npm`, and `ng` commands work in your terminal.

| Command                               | Description                                         |
| ------------------------------------- | --------------------------------------------------- |
| `npm install -g @angular/cli`         | Install Angular CLI globally.                       |
| `ng version`                          | Check installed Angular and CLI versions.           |
| `ng new my-app`                       | Create a new Angular project.                       |
| `ng serve`                            | Start the development server.                       |
| `ng serve --open`                     | Start the server and open it in the browser.        |
| `ng build`                            | Build the application.                              |
| `ng test`                             | Run tests.                                          |
| `ng lint`                             | Check the project for code issues.                  |
| `ng generate component users`         | Create a new component.                             |
| `ng generate service user`            | Create a new service.                               |
| `ng generate guard auth`              | Create a route guard.                               |
| `ng generate interceptor auth`        | Create an HTTP interceptor.                         |
| `ng generate pipe currency-format`    | Create a custom pipe.                               |
| `ng generate directive highlight`     | Create a custom directive.                          |
| `ng generate interface user`          | Create a TypeScript interface.                      |
| `ng generate class user`              | Create a TypeScript class.                          |
| `ng generate module admin`            | Create a feature module.                            |
| `ng add @angular/material`            | Install Angular Material.                           |
| `npm install bootstrap`               | Install Bootstrap.                                  |
| `npm install axios`                   | Install Axios for API requests.                     |
| `npm install rxjs`                    | Install RxJS.                                       |
| `npm install @ngrx/store`             | Install NgRx for state management.                  |
| `ng build --configuration production` | Create an optimized production build.               |
| `ng deploy`                           | Deploy the application if deployment is configured. |

```
```
