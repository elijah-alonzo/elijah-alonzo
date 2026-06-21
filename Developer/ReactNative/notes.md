<h1 align="center"> React Native </h1>

React Native is a framework for building cross-platform mobile applications using JavaScript or TypeScript and React. It allows a single codebase to run on both Android and iOS while rendering native UI components.

```text
project/
│
├── src/
│   ├── screens/            # Application screens/pages
│   ├── components/         # Reusable UI components
│   ├── navigation/         # Navigation configuration
│   ├── services/           # API calls & external services
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Helper functions
│   ├── assets/             # Images, icons, fonts
│   └── types/              # TypeScript types/interfaces
│
├── android/                # Android native project
│
├── ios/                    # iOS native project
│
├── App.tsx                 # Root application component
│
├── .env                    # Environment variables
│
└── app.json                # React Native configuration
```

To develop React Native applications, install [Node.js](https://nodejs.org/) for JavaScript tooling and package management, and [Android Studio](https://developer.android.com/studio) for Android development and emulation. If targeting iOS, install [Xcode](https://developer.apple.com/xcode/) on macOS. For new projects, the recommended approach is to use [Expo](https://expo.dev/), which simplifies setup, development, and deployment.

After installation, ensure that Node.js and Android SDK tools are available through **Environment Variables > Path**. Most installers configure this automatically, but if commands are not recognized in the terminal, verify that their installation directories have been added to the `Path` variable.

| Command                                                                | Description                                   |
| ---------------------------------------------------------------------- | --------------------------------------------- |
| `npx create-expo-app@latest my-app`                                    | Create a new Expo React Native project.       |
| `npx react-native init MyApp`                                          | Create a new React Native CLI project.        |
| `npm start`                                                            | Start the Metro bundler.                      |
| `npx expo start`                                                       | Start the Expo development server.            |
| `npx expo start --clear`                                               | Start Expo and clear cache.                   |
| `npm run android`                                                      | Build and launch the app on Android.          |
| `npm run ios`                                                          | Build and launch the app on iOS.              |
| `npx expo run:android`                                                 | Build and run the Expo app on Android.        |
| `npx expo run:ios`                                                     | Build and run the Expo app on iOS.            |
| `npm install`                                                          | Install project dependencies.                 |
| `npm install package-name`                                             | Install a dependency.                         |
| `npm uninstall package-name`                                           | Remove a dependency.                          |
| `npm install @react-navigation/native`                                 | Install React Navigation.                     |
| `npm install @react-navigation/native-stack`                           | Install native stack navigation.              |
| `npx expo install react-native-screens react-native-safe-area-context` | Install React Navigation peer dependencies.   |
| `npm install axios`                                                    | Install Axios for API requests.               |
| `npm install zustand`                                                  | Install Zustand state management.             |
| `npm install @tanstack/react-query`                                    | Install React Query.                          |
| `npm install react-hook-form`                                          | Install React Hook Form.                      |
| `npm install zod`                                                      | Install Zod validation.                       |
| `npm install react-hook-form @hookform/resolvers zod`                  | Install common form validation stack.         |
| `npx expo install expo-image-picker`                                   | Install image picker support.                 |
| `npx expo install expo-location`                                       | Install location services.                    |
| `npx expo install expo-notifications`                                  | Install push notification support.            |
| `npx expo doctor`                                                      | Check project configuration and dependencies. |
| `npx expo prebuild`                                                    | Generate native Android and iOS projects.     |
| `npx expo export`                                                      | Export the application for deployment.        |
| `npx eas build --platform android`                                     | Create an Android production build using EAS. |
| `npx eas build --platform ios`                                         | Create an iOS production build using EAS.     |

```
```
