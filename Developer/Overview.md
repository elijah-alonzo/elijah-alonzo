# Laravel

Laravel is a PHP web application framework built with the Model-View-Controller (MVC) architecture.

---

## Downloads

### Required

- Node.js  
  https://nodejs.org/

- PHP  
  https://www.php.net/downloads

- Composer  
  https://getcomposer.org/

### Optional

- Laravel Herd (Recommended for Windows and macOS)
  https://herd.laravel.com/

- Laravel Valet (macOS)
  https://laravel.com/docs/11.x/valet

- Laravel Cloud
  https://laravel.com/cloud

---

## Verify Installation

```bash
node -v
npm -v

php -v

composer -V
```

---

## Install Laravel Globally

```bash
composer global require laravel/installer
```

Verify:

```bash
laravel --version
```

---

## Create New Project

Using Laravel Installer:

```bash
laravel new my-app
```

Using Composer:

```bash
composer create-project laravel/laravel my-app
```

---

## Run Development Server

```bash
cd my-app

php artisan serve
```

Default URL:

```text
http://127.0.0.1:8000
```

---

## Install Frontend Dependencies

```bash
npm install
```

---

## Run Vite Development Server

```bash
npm run dev
```

Production build:

```bash
npm run build
```

---

## Database Setup

Create environment file:

```bash
cp .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Run migrations:

```bash
php artisan migrate
```

Fresh migration:

```bash
php artisan migrate:fresh
```

Fresh migration with seeders:

```bash
php artisan migrate:fresh --seed
```

---

## Common Artisan Commands

Create controller:

```bash
php artisan make:controller UserController
```

Create model:

```bash
php artisan make:model User
```

Create model with migration:

```bash
php artisan make:model User -m
```

Create migration:

```bash
php artisan make:migration create_users_table
```

Create seeder:

```bash
php artisan make:seeder UserSeeder
```

Create factory:

```bash
php artisan make:factory UserFactory
```

Run seeders:

```bash
php artisan db:seed
```

Clear caches:

```bash
php artisan optimize:clear
```

List routes:

```bash
php artisan route:list
```

---

## Queue Commands

Start queue worker:

```bash
php artisan queue:work
```

Restart workers:

```bash
php artisan queue:restart
```

---

## Testing

Run tests:

```bash
php artisan test
```

Run PHPUnit directly:

```bash
vendor/bin/phpunit
```

---

## Useful Commands

Update Composer dependencies:

```bash
composer update
```

Install Composer dependencies:

```bash
composer install
```

Install Node dependencies:

```bash
npm install
```

Reinstall dependencies:

```bash
rm -rf vendor
composer install

rm -rf node_modules
npm install
```

---

## Troubleshooting

### No .NET SDKs found

Laravel Herd on Windows may require the .NET SDK.

Download:

https://dotnet.microsoft.com/download

Verify:

```bash
dotnet --list-sdks
```

### Missing APP_KEY

```bash
php artisan key:generate
```

### Vite Manifest Not Found

```bash
npm install
npm run build
```

### Clear Everything

```bash
php artisan optimize:clear
```

---

## Personal Setup Checklist

- [ ] Install Node.js
- [ ] Install PHP
- [ ] Install Composer
- [ ] Install Laravel Herd
- [ ] Verify versions
- [ ] Install Laravel installer
- [ ] Clone repository
- [ ] Copy `.env`
- [ ] Run `composer install`
- [ ] Run `npm install`
- [ ] Run `php artisan key:generate`
- [ ] Configure database
- [ ] Run migrations
- [ ] Start Laravel server
- [ ] Start Vite server