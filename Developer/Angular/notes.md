<h1 align="center"> Angular </h1>

Angular is a TypeScript-based frontend framework developed by Google for building large-scale, component-based web applications. It includes built-in routing, dependency injection, forms, HTTP clients, and state management patterns.

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

To develop Angular applications, install [Node.js](https://nodejs.org/) which includes npm for package management, and the [Angular CLI](https://angular.dev/tools/cli) which provides project scaffolding, development tools, and code generators. After installation, ensure both Node.js and Angular CLI are available through **Environment Variables > Path**. Most installers configure this automatically, but if a command is not recognized in the terminal, verify that its installation directory has been added to the `Path` variable.

| Command                               | Description                                                    |
| ------------------------------------- | -------------------------------------------------------------- |
| `npm install -g @angular/cli`         | Install Angular CLI globally.                                  |
| `ng version`                          | Display installed Angular and CLI versions.                    |
| `ng new my-app`                       | Create a new Angular application.                              |
| `ng serve`                            | Start the Angular development server.                          |
| `ng serve --open`                     | Start the server and open the application in a browser.        |
| `ng build`                            | Create a production-ready build.                               |
| `ng test`                             | Run unit tests using Karma.                                    |
| `ng lint`                             | Run linting checks on the project.                             |
| `ng generate component users`         | Generate a new component.                                      |
| `ng generate service user`            | Generate a new service.                                        |
| `ng generate guard auth`              | Generate a route guard.                                        |
| `ng generate interceptor auth`        | Generate an HTTP interceptor.                                  |
| `ng generate pipe currency-format`    | Generate a custom pipe.                                        |
| `ng generate directive highlight`     | Generate a custom directive.                                   |
| `ng generate interface user`          | Generate a TypeScript interface.                               |
| `ng generate class user`              | Generate a TypeScript class.                                   |
| `ng generate module admin`            | Generate a feature module.                                     |
| `ng add @angular/material`            | Install Angular Material.                                      |
| `npm install bootstrap`               | Install Bootstrap.                                             |
| `npm install axios`                   | Install Axios for API requests.                                |
| `npm install rxjs`                    | Install RxJS reactive extensions.                              |
| `npm install @ngrx/store`             | Install NgRx state management.                                 |
| `ng build --configuration production` | Create an optimized production build.                          |
| `ng deploy`                           | Deploy the application (if deployment provider is configured). |

```
```
