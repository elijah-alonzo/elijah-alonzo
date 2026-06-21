<h1 align="center"> .NET </h1>

.NET is Microsoft's framework for building applications. I've mostly used it for creating APIs and web applications with ASP.NET Core, but it can also be used for desktop applications, cloud projects, and other types of software. If you're coming from Laravel, think of ASP.NET Core as the part of .NET that handles the web side of things. If this isn't what you're looking for, click [Me](../../NOTEBOOK.md).

```text
project/
│
├── Controllers/            # Request handling & API endpoints
│
├── Models/                 # Data models & DTOs
│
├── Services/               # Business logic
│
├── Data/                   # Database context & configurations
│
├── Migrations/             # Database schema changes
│
├── Views/                  # Razor views (MVC projects)
│
├── wwwroot/                # Static files (CSS, JS, images)
│
├── appsettings.json        # Application configuration
│
├── Program.cs              # Application entry point
│
└── Properties/
    └── launchSettings.json # Development launch settings
```

To start working with .NET, install the [.NET SDK](https://dotnet.microsoft.com/download). This gives you everything needed to create, build, and run .NET projects. Once it's installed, open a terminal and make sure the `dotnet` command works. If it doesn't, check if the installation path was added to your system's Path environment variable.

| Command                                  | Description                        |
| ---------------------------------------- | ---------------------------------- |
| `dotnet --version`                       | Check your installed .NET version. |
| `dotnet --list-sdks`                     | Show all installed SDKs.           |
| `dotnet new webapi -n MyApi`             | Create a new Web API project.      |
| `dotnet new mvc -n MyApp`                | Create a new MVC project.          |
| `dotnet new console -n MyApp`            | Create a console application.      |
| `dotnet restore`                         | Install project dependencies.      |
| `dotnet build`                           | Build the project.                 |
| `dotnet run`                             | Run the application.               |
| `dotnet watch run`                       | Run with hot reload.               |
| `dotnet clean`                           | Remove generated build files.      |
| `dotnet test`                            | Run tests.                         |
| `dotnet publish`                         | Create a production build.         |
| `dotnet add package PackageName`         | Install a NuGet package.           |
| `dotnet remove package PackageName`      | Remove a NuGet package.            |
| `dotnet list package`                    | Show installed packages.           |
| `dotnet tool install --global dotnet-ef` | Install Entity Framework tools.    |
| `dotnet ef migrations add InitialCreate` | Create a migration.                |
| `dotnet ef migrations remove`            | Remove the latest migration.       |
| `dotnet ef database update`              | Apply migrations.                  |
| `dotnet ef database drop`                | Delete the database.               |
| `dotnet ef migrations list`              | Show all migrations.               |
| `dotnet new gitignore`                   | Generate a .NET gitignore file.    |
| `dotnet sln create`                      | Create a solution file.            |
| `dotnet sln add MyProject.csproj`        | Add a project to a solution.       |
| `dotnet new classlib -n MyLibrary`       | Create a class library.            |
| `dotnet new xunit -n MyTests`            | Create an xUnit test project.      |

```
```
