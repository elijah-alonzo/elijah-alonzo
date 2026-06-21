<h1 align="center"> Laravel </h1>

Laravel is a PHP framework for building web applications and APIs. It follows the MVC pattern and comes with many features already built in, making it one of the most popular frameworks in the PHP ecosystem. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
project/
│
├── app/
│   ├── Http/
│   │   ├── Controllers/      # Business logic
│   │   └── Requests/         # Validation logic
│   └── Models/               # Database models
│
├── database/
│   ├── migrations/           # Database structure
│   ├── seeders/              # Initial/sample data
│   └── factories/            # Fake test data
│
├── resources/
│   ├── views/                # Blade templates/UI
│   ├── js/                   # Frontend JavaScript
│   └── css/                  # Frontend styles
│
├── routes/
│   ├── web.php               # Web routes
│   └── api.php               # API routes
│
├── storage/                  # Logs, cache, uploads
│
├── tests/                    # Unit & feature tests
│
└── .env                      # Environment variables
```

To start building Laravel applications, install [Node.js](https://nodejs.org/) for frontend tooling, [Composer](https://getcomposer.org/) for package management, and either [PHP](https://www.php.net/downloads) or [Laravel Herd](https://herd.laravel.com/). If you're using Laravel Herd, you don't need to install PHP separately since Herd already manages it for you.

Once everything is installed, make sure the `node`, `npm`, `composer`, `php`, and `laravel` commands work in your terminal before creating a new project.

| Command                                                 | Description                                                  |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| `laravel new my-app`                                    | Create a new Laravel project using the Laravel installer.    |
| `composer create-project laravel/laravel my-app`        | Create a new Laravel project directly from Composer.         |
| `php artisan serve`                                     | Start the local Laravel development server.                  |
| `php artisan key:generate`                              | Generate the application's encryption key and update `.env`. |
| `php artisan optimize:clear`                            | Clear route, config, view, and application caches.           |
| `php artisan route:list`                                | Display all registered routes and their handlers.            |
| `php artisan make:controller UserController`            | Generate a new controller class.                             |
| `php artisan make:model User`                           | Generate a new Eloquent model.                               |
| `php artisan make:model User -m`                        | Generate a model and its migration file.                     |
| `php artisan make:model User -mc`                       | Generate a model, migration, and controller.                 |
| `php artisan make:migration create_users_table`         | Create a new database migration.                             |
| `php artisan migrate`                                   | Run all pending database migrations.                         |
| `php artisan migrate:fresh`                             | Drop all tables and recreate the database schema.            |
| `php artisan migrate:fresh --seed`                      | Rebuild the database and execute all seeders.                |
| `php artisan make:seeder UserSeeder`                    | Generate a database seeder class.                            |
| `php artisan db:seed`                                   | Execute database seeders.                                    |
| `php artisan make:factory UserFactory`                  | Generate a factory for creating fake model data.             |
| `php artisan queue:work`                                | Start processing queued jobs.                                |
| `php artisan queue:restart`                             | Restart all active queue workers.                            |
| `php artisan test`                                      | Run all Laravel feature and unit tests.                      |
| `composer require filament/filament`                    | Install Filament into the project.                           |
| `php artisan make:filament-user`                        | Create a Filament administrator account.                     |
| `php artisan make:filament-resource User`               | Generate a Filament resource for a model.                    |
| `php artisan make:filament-resource User --generate`    | Generate a resource with forms, tables, and CRUD pages.      |
| `php artisan make:filament-page Dashboard`              | Create a custom Filament page.                               |
| `php artisan make:filament-widget StatsOverview`        | Create a reusable Filament widget.                           |
| `php artisan make:filament-widget SalesChart --chart`   | Create a chart-based dashboard widget.                       |
| `php artisan make:filament-widget RecentOrders --table` | Create a table-based dashboard widget.                       |
| `php artisan make:filament-panel`                       | Create an additional Filament panel.                         |
| `php artisan make:filament-relation-manager`            | Create a relation manager for related records.               |
| `composer require bezhansalleh/filament-shield`         | Install Filament Shield for roles and permissions.           |
| `php artisan shield:install`                            | Publish and configure Filament Shield.                       |
| `php artisan shield:generate`                           | Generate permissions from Filament resources.                |

```
```
