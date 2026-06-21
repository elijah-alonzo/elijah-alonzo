<h1 align="center"> Flutter </h1>

Flutter is Google's cross-platform UI framework for building mobile, web, and desktop applications from a single Dart codebase. It uses a widget-based architecture and compiles to native code for high performance.

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

To develop Flutter applications, install the [Flutter SDK](https://flutter.dev/docs/get-started/install) which includes the Dart SDK. For Android development, install [Android Studio](https://developer.android.com/studio), which provides the Android SDK, emulator, and development tools. If targeting iOS, install [Xcode](https://developer.apple.com/xcode/) on macOS.

After installation, ensure Flutter is available through **Environment Variables > Path**. Most installers do not automatically configure Flutter, so you will typically need to add the Flutter `bin` directory to your system `Path` manually.

| Command                                      | Description                                                  |
| -------------------------------------------- | ------------------------------------------------------------ |
| `flutter doctor`                             | Verify Flutter installation and detect missing dependencies. |
| `flutter doctor -v`                          | Display detailed environment diagnostics.                    |
| `flutter create my_app`                      | Create a new Flutter project.                                |
| `flutter run`                                | Build and run the application.                               |
| `flutter run -d chrome`                      | Run the application in a web browser.                        |
| `flutter devices`                            | List available devices and emulators.                        |
| `flutter emulators`                          | List available emulators.                                    |
| `flutter pub get`                            | Install project dependencies.                                |
| `flutter pub upgrade`                        | Upgrade dependencies to newer versions.                      |
| `flutter pub add package_name`               | Add a dependency to the project.                             |
| `flutter pub remove package_name`            | Remove a dependency from the project.                        |
| `flutter clean`                              | Remove build artifacts and cached files.                     |
| `flutter build apk`                          | Create an Android APK build.                                 |
| `flutter build appbundle`                    | Create an Android App Bundle for Play Store deployment.      |
| `flutter build ios`                          | Create an iOS build.                                         |
| `flutter build web`                          | Create a production web build.                               |
| `flutter test`                               | Run unit and widget tests.                                   |
| `flutter analyze`                            | Analyze code for issues and best practices.                  |
| `flutter format .`                           | Format all Dart files in the project.                        |
| `dart create my_app`                         | Create a new Dart project.                                   |
| `dart run`                                   | Run a Dart application.                                      |
| `flutter gen-l10n`                           | Generate localization files.                                 |
| `flutter pub add provider`                   | Install Provider state management.                           |
| `flutter pub add flutter_riverpod`           | Install Riverpod state management.                           |
| `flutter pub add dio`                        | Install Dio HTTP client.                                     |
| `flutter pub add go_router`                  | Install GoRouter navigation.                                 |
| `flutter pub add freezed freezed_annotation` | Install Freezed for immutable models.                        |
| `flutter pub add json_annotation`            | Install JSON serialization annotations.                      |
| `flutter pub add hive`                       | Install Hive local database.                                 |
| `flutter pub add shared_preferences`         | Install local key-value storage.                             |
| `flutter pub add flutter_dotenv`             | Install environment variable support.                        |
