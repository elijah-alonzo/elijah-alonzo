<h1 align="center">
  <a href="../readme.md">
    <img src="https://laravel.com/img/logotype.min.svg" alt="Laravel Logo" width="200">
  </a>
</h1>

When developing a Laravel project, I usually organize everything under the `app/` directory. The exact structure depends on the tools I plan to use—whether it's just pure Laravel, Filament, or a combination of both. I adapt the structure to fit the tools and features I need, keeping things clean and modular.

```
app/
├── Features/                 
│   ├── Feature/
│   │   ├── Models/
│   │   │   └── Feature.php
│   │   ├── Controllers/
│   │   │   └── FeatureController.php
│   │   ├── Actions/
│   │   │   └── CreateFeature.php
│   │   ├── Livewire/
│   │   │   └── FeatureForm.php
│   │   ├── Policies/
│   │   │   └── FeaturePolicy.php
│   │   ├── Tests/
│   │   │   └── FeatureTest.php
│   │   ├── Views/
│   │   │   └── Feature.blade.php
│   │   ├── Routes/
│   │   │   └── web.php
│   │   └── Providers/
│   │       └── FeatureServiceProvider.php
│   │
│   └── Shared/
│       ├── Traits/
│       └── Helpers/
│
├── Filament/                
│   ├── Resources/
│   │   └── UserResource/
│   │       ├── UserResource.php
│   │       ├── Pages/
│   │       │   ├── ListUsers.php
│   │       │   ├── CreateUser.php
│   │       │   └── EditUser.php
│   │       ├── Relations/
│   │       │   └── UserPostsRelation.php
│   │       ├── Widgets/
│   │       │   └── UserStatsWidget.php
│   │       ├── Schemas/
│   │       │   └── UserForm.php
│   │       └── Tables/
│   │           └── UserTable.php
│   │
│   ├── Pages/
│   │   ├── Dashboard.php
│   │   └── Settings.php
│   │
│   ├── Widgets/
│   │   ├── StatsOverview.php
│   │   └── RecentActivity.php
│   │
│   ├── Hooks/
│   │   └── GlobalHooks.php
│   │
│   └── Clusters/
│       ├── UserManagement/
│       │   ├── UserManagement.php
│       │   ├── Resources/
│       │   │   └── UserResource.php
│       │   └── Pages/
│       │       └── ManageUsers.php
│       └── ContentManagement/
│           ├── ContentManagement.php
│           ├── Resources/
│           │   └── PostResource.php
│           └── Pages/
│               └── ManageContent.php
│
└── Providers/
    ├── AppServiceProvider.php
    ├── AuthServiceProvider.php
    ├── EventServiceProvider.php
    └── Filament/
        ├── AdminPanelProvider.php
        └── UserPanelProvider.php
```
### Features Directory
When adding a feature in Laravel, I organize it inside the `Features` directory. I follow a modular approach for scalability and maintainability. Each directory inside `Features` is self-contained, making management easier. If certain logic is shared across multiple features, I include a `Shared` directory within `Features` to hold that reusable code.

- **Feature Folder**
  - Each feature has its own folder under `Features/FeatureName/`.
  - Everything related to that feature (models, controllers, actions, livewire, policies, tests, views, routes, providers) stays inside its folder.

- **Models**
  - Represent the database tables for that feature.
  - Keep business logic out of models — use Actions instead.

- **Controllers**
  - Keep them thin: just handle requests and call Actions.
  - Don't put business logic here.

- **Actions**
  - All the main business logic lives here.
  - Each Action does one specific job (like `CreateFeature` or `UpdateFeature`).
  - The Controller just calls the Action and returns a response — it doesn't care how the job is done.

- **Policies**
  - Handle authorization (who can do what) for this feature.
  - Keep them focused on the feature itself.

- **Tests**
  - Put tests in `Tests/` inside the feature folder.
  - Final classes, extend the base test case, use traits like database refresh.
  - Only mock third-party integrations (mail, payment APIs, etc.) or irreversible actions.

- **Views**
  - Blade templates for this feature.
  - Use subfolders if there are lots of views.

- **Routes**
  - There are two levels of routes: global and feature-specific.
  - The global `routes/web.php` (Laravel's default) only handles app-wide routes like the landing page.
  - Each feature has its own `Routes/web.php` for all routes belonging to that feature.
  - The feature's `ServiceProvider` is responsible for loading its own `Routes/web.php` via `loadRoutesFrom()` — this is what keeps feature routes out of the global route file.
  - Name routes as `feature-name.action` (e.g., `service-projects.index`, `service-projects.create`).
  - Use `->whereNumber('id')` to constrain numeric route parameters.
  - Only wrap routes in `Route::middleware('auth')->group()` when they actually require authentication — don't apply it globally to the whole feature.
  - Use single-action invokable controllers for dedicated routes, inline closures for simple view-only routes, and `ControllerClass::class.'@method'` for controllers that handle multiple related actions.

- **Providers**
  - Feature-specific service providers (for observers, events, route loading, etc.).

- **Shared**
  - `Features/Shared` is for code used by multiple features (traits, helpers, utilities).
  - Don't put feature-specific stuff here.
  
### Filament Directory
For systems focused on data and analytics and information management, I usually use Filament. Sometimes, if two user types share almost the same features, I create a single panel for both and use RBAC for security. But if the user types have very different features, I make separate panels to keep things clean and secure.

- **Resources**
  - Each resource represents a model (like `UserResource` for the User model).
  - They handle only Filament-specific stuff: forms, tables, filters, and actions.
  - Keep business logic out — put that in Actions inside `Features`.
  - Use policies for authorization; don't manually check permissions in the resource.
  - Filament automatically picks up your policy — never gate access manually inside a resource.
  - **Inside each resource**, you can have:
    - `Pages/` → resource-specific pages like Create, Edit, or List.
    - `Relations/` → manage relationships with other models.
    - `Widgets/` → resource-specific widgets for dashboards or stats.
    - `Forms/` → schemas that define the forms for this resource.
    - `Tables/` → schemas that define the tables for this resource.

- **Pages**
  - Custom admin pages like `Dashboard` or `Settings`.
  - Use Livewire components for interactivity, but keep them small and focused.

- **Widgets**
  - Dashboard or stats widgets, or any reusable UI block.
  - Build small, focused widgets and combine them as needed.
  - Cache expensive queries, like stats overview, to keep things fast.

- **Hooks**
  - Renderhooks are used to customize Filament elements (like navigation, styles, tables, or dashboards).
  - Start by chaining `->renderHook()` directly on the `$panel` object inside the panel provider. When the provider starts getting too long, extract all renderhooks into a single `GlobalHooks` class inside `Hooks/` and register it from `AppServiceProvider::boot()`.
  - `FilamentView::registerRenderHook()` always applies globally across all panels regardless of where it is called from — which makes the `GlobalHooks` + `AppServiceProvider` pattern the right choice for multi-panel projects where all panels share the same design.

- **Clusters**
  - Clusters are used to group related resources and pages under a shared navigation group in the sidebar, replacing the need for manual `->navigationGroups()` assignment on each resource.
  - Resources and pages belonging to a cluster must be placed inside a subdirectory named after the cluster, not left in the top-level `Resources/` or `Pages/` folders.
  - To connect a resource or page to a cluster, set the `$cluster` property on the class pointing to the cluster class.

- **Providers**
  - Service providers for the app and Filament panels.
  - Global providers like `AppServiceProvider`, `AuthServiceProvider`, `EventServiceProvider`.
  - Filament-specific panel providers like `AdminPanelProvider` and `UserPanelProvider` handle panel setup, menus, and security.

### Database Directory

- **Migrations**
  - During development, if you forget to add a field in a migration, don't create a new migration just to add it, and don't run `migrate:fresh`.
  - Instead, edit the original migration directly and use `php artisan migrate:refresh` to re-run it.
  - This keeps the migration history clean and easy to read while you're still building.
  - ⚠️ This is only for development. In production, always create a new migration for any change — never edit an existing one.

- **N+1 Queries**
  - An N+1 problem happens when the app runs one query to get a list, then runs another query for each item in that list.
  - Fix this by eager loading relationships using `with()` so everything is fetched in as few queries as possible.