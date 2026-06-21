<h1 align="center"> .NET </h1>

.NET is a Microsoft development platform for building web applications, APIs, desktop applications, cloud services, and microservices. ASP.NET Core is the web framework commonly used for building MVC applications and REST APIs.

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

To develop .NET applications, install the [.NET SDK](https://dotnet.microsoft.com/download). The SDK includes the .NET runtime, CLI tools, project templates, and build tools required for development. After installation, ensure that `dotnet` is available through **Environment Variables > Path**. Most installers configure this automatically, but if a command is not recognized in the terminal, verify that its installation directory has been added to the `Path` variable.

| Command                                  | Description                                |
| ---------------------------------------- | ------------------------------------------ |
| `dotnet --version`                       | Display the installed .NET SDK version.    |
| `dotnet --list-sdks`                     | Display all installed .NET SDKs.           |
| `dotnet new webapi -n MyApi`             | Create a new ASP.NET Core Web API project. |
| `dotnet new mvc -n MyApp`                | Create a new ASP.NET Core MVC project.     |
| `dotnet new console -n MyApp`            | Create a new console application.          |
| `dotnet restore`                         | Restore NuGet package dependencies.        |
| `dotnet build`                           | Compile the project.                       |
| `dotnet run`                             | Build and run the application.             |
| `dotnet watch run`                       | Run the application with hot reload.       |
| `dotnet clean`                           | Remove build artifacts.                    |
| `dotnet test`                            | Run unit and integration tests.            |
| `dotnet publish`                         | Create deployment-ready build artifacts.   |
| `dotnet add package PackageName`         | Install a NuGet package.                   |
| `dotnet remove package PackageName`      | Remove a NuGet package.                    |
| `dotnet list package`                    | List installed NuGet packages.             |
| `dotnet tool install --global dotnet-ef` | Install Entity Framework CLI tools.        |
| `dotnet ef migrations add InitialCreate` | Create a new Entity Framework migration.   |
| `dotnet ef migrations remove`            | Remove the latest migration.               |
| `dotnet ef database update`              | Apply pending migrations to the database.  |
| `dotnet ef database drop`                | Drop the configured database.              |
| `dotnet ef migrations list`              | Display all migrations.                    |
| `dotnet new gitignore`                   | Generate a .NET gitignore file.            |
| `dotnet sln create`                      | Create a solution file.                    |
| `dotnet sln add MyProject.csproj`        | Add a project to a solution.               |
| `dotnet new classlib -n MyLibrary`       | Create a reusable class library.           |
| `dotnet new xunit -n MyTests`            | Create an xUnit test project.              |

```
```
