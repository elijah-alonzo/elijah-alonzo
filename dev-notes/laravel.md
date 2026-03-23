<h1 align="center"> Laravel </h1>
When developing a Laravel project, I follow this architecture. However, the structure still depends on the tools I want to use—whether it is pure Laravel, Filament, or both. This structure can be adapted depending on which of the mentioned tools you aim to use.

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
│   │   ├── Services/
│   │   │   └── FeatureService.php
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
│   ├── UserResource/
│   │   ├── UserResource.php
│   │   ├── Pages/
│   │   │   ├── ListUsers.php
│   │   │   ├── CreateUser.php
│   │   │   └── EditUser.php
│   │   ├── Relations/
│   │   │   └── UserPostsRelation.php
│   │   ├── Widgets/
│   │   │   └── UserStatsWidget.php
│   │   ├── Schemas/
│   │   │   └── UserForm.php
│   │   └── Tables/
│   │       └── UserTable.php
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
│   │   ├── AdminHooks.php
│   │   └── StaffHooks.php
│   │
│   └── Clusters/
│       ├── UserManagement.php
│       └── ContentManagement.php   
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
  - Everything related to that feature (models, controllers, actions, services, policies, tests, views, routes, providers) stays inside its folder.

- **Models**
  - Represent the database tables for that feature.
  - Keep business logic out of models—use Actions or Services instead.

- **Controllers**
  - Keep them thin: just handle requests and call Actions.
  - Don’t put business logic here.

- **Actions**
  - All the main business logic lives here.
  - Each Action does one specific job (like `CreateFeature` or `UpdateFeature`).

- **Services**
  - Hold reusable code that doesn’t fit in Actions or Models.
  - Shouldn’t depend on Controllers.

- **Policies**
  - Handle authorization (who can do what) for this feature.
  - Keep them focused on the feature itself.

- **Tests**
  - Put tests in `Tests/` inside the feature folder.
  - Final classes, extend the base test case, use traits like database refresh.
  - Only mock external services or irreversible actions.

- **Views**
  - Blade templates for this feature.
  - Use subfolders if there are lots of views.

- **Routes**
  - Each feature has its own `Routes/web.php`.
  - Name routes like `feature.action` (e.g., `feature.create`).
  - Don’t add feature routes to the global route files.

- **Providers**
  - Feature-specific service providers (for services, observers, events, etc.).

- **Shared**
  - `Features/Shared` is for code used by multiple features (traits, helpers, utilities).
  - Don’t put feature-specific stuff here.
  
### Filament Directory
For systems focused on data and analytics and information management, I usually use Filament. Sometimes, if two user types share almost the same features, I create a single panel for both and use RBAC for security. But if the user types have very different features, I make separate panels to keep things clean and secure.

- **Resources**
  - Each resource represents a model (like `UserResource` for the User model).
  - They handle only Filament-specific stuff: forms, tables, filters, and actions.
  - Keep business logic out—put that in Actions or Services in `Features`.
  - Use policies for authorization; don’t manually check permissions in the resource.
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
  - Renderhooks are used to customize Filament elements and are typically place in the `FilamentPanelProvider/`. I use this directory to keep the `FilamentPanelProvider/` clean and thin.
  - These are used to customize Filament elements (like navigation, forms, tables, or dashboards).

- **Clusters**
  - Logical groups of related resources, pages, and widgets (like `UserManagement` or `ContentManagement`) to keep things organized.
  - Clusters also help organize navigation and permissions in the admin panel.

- **Providers**
  - Service providers for the app and Filament panels.
  - Global providers like `AppServiceProvider`, `AuthServiceProvider`, `EventServiceProvider`.
  - Filament-specific panel providers like `AdminPanelProvider` and `UserPanelProvider` handle panel setup, menus, and security.

