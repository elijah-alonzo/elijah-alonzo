<h1 align="center"> Flutter </h1>

Flutter is Google's framework for building mobile applications with Dart. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

```text
project/
│
├── lib/
│   ├── screens/            # Application screens/pages
│   ├── widgets/            # Reusable UI components
│   ├── services/           # API calls & business logic
│   ├── models/             # Data models
│   ├── providers/          # State management
│   ├── utils/              # Helper functions
│   └── main.dart           # Application entry point
│
├── assets/
│   ├── images/             # Images
│   ├── icons/              # Icons
│   └── fonts/              # Custom fonts
│
├── android/                # Android native project
│
├── ios/                    # iOS native project
│
├── web/                    # Web platform files
│
├── test/                   # Unit & widget tests
│
├── pubspec.yaml            # Dependencies & assets
│
└── .env                    # Environment variables (if used)
```

Install the [Flutter SDK](https://flutter.dev/docs/get-started/install). If you're targeting Android devices, install [Android Studio](https://developer.android.com/studio). If you're targeting iOS, you'll need [Xcode](https://developer.apple.com/xcode/) on macOS.

Run `flutter doctor` to check if everything is configured correctly. If it doesn't, check if the installation path was added to your system's Path environment variable.

| Command                                      | Description                              |
| -------------------------------------------- | ---------------------------------------- |
| `flutter doctor`                             | Check if Flutter is installed correctly. |
| `flutter doctor -v`                          | Show detailed setup information.         |
| `flutter create my_app`                      | Create a new Flutter project.            |
| `flutter run`                                | Run the application.                     |
| `flutter run -d chrome`                      | Run the application in Chrome.           |
| `flutter devices`                            | Show available devices.                  |
| `flutter emulators`                          | Show available emulators.                |
| `flutter pub get`                            | Install project dependencies.            |
| `flutter pub upgrade`                        | Update dependencies.                     |
| `flutter pub add package_name`               | Add a package.                           |
| `flutter pub remove package_name`            | Remove a package.                        |
| `flutter clean`                              | Remove generated build files.            |
| `flutter build apk`                          | Build an Android APK.                    |
| `flutter build appbundle`                    | Build an Android App Bundle.             |
| `flutter build ios`                          | Build an iOS application.                |
| `flutter build web`                          | Build the web version.                   |
| `flutter test`                               | Run tests.                               |
| `flutter analyze`                            | Check the code for issues.               |
| `flutter format .`                           | Format all Dart files.                   |
| `dart create my_app`                         | Create a new Dart project.               |
| `dart run`                                   | Run a Dart application.                  |
| `flutter gen-l10n`                           | Generate localization files.             |
| `flutter pub add provider`                   | Install Provider.                        |
| `flutter pub add flutter_riverpod`           | Install Riverpod.                        |
| `flutter pub add dio`                        | Install Dio for API requests.            |
| `flutter pub add go_router`                  | Install GoRouter.                        |
| `flutter pub add freezed freezed_annotation` | Install Freezed for immutable models.    |
| `flutter pub add json_annotation`            | Install JSON serialization support.      |
| `flutter pub add hive`                       | Install Hive database.                   |
| `flutter pub add shared_preferences`         | Install local storage support.           |
| `flutter pub add flutter_dotenv`             | Install environment variable support.    |