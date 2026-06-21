<h1 align="center"> Laravel  </h1>

Laravel is a PHP web application framework that follows the Model-View-Controller (MVC) architecture and is designed for building modern web applications.
```text
project-root/
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
To develop Laravel applications, install [Node.js](https://nodejs.org/) for frontend tooling, [Composer](https://getcomposer.org/) for PHP package management, and either [PHP](https://www.php.net/downloads) or [Laravel Herd](https://herd.laravel.com/) as the PHP runtime. If you use Laravel Herd, you do **not** need to install PHP separately because Herd already includes and manages PHP for you.

After installing each tool, ensure its executable is available through the system **Environment Variables > Path**. Most installers configure this automatically, but if a command is not recognized in the terminal, verify that its installation directory has been added to the `Path` variable.


