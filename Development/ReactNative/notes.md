<h1 align="center"> React Native </h1>

React Native is a framework for building mobile applications with React. If this isn't what you're looking for, click here to go back to the [previous page](../../NOTEBOOK.md).

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

Install [Node.js](https://nodejs.org/) and [Android Studio](https://developer.android.com/studio). If you're building for iOS, you'll also need [Xcode](https://developer.apple.com/xcode/) on macOS. For most projects, it's recommended to use [Expo](https://expo.dev/) since it makes setup and development much easier.

Once everything is installed, make sure the `node`, `npm`, and `npx` commands work in your terminal before creating a new project.

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
| `npm install react-hook-form @hookform/resolvers zod`                  | Install a common form validation stack.       |
| `npx expo install expo-image-picker`                                   | Install image picker support.                 |
| `npx expo install expo-location`                                       | Install location services.                    |
| `npx expo install expo-notifications`                                  | Install push notification support.            |
| `npx expo doctor`                                                      | Check project configuration and dependencies. |
| `npx expo prebuild`                                                    | Generate native Android and iOS projects.     |
| `npx expo export`                                                      | Export the application for deployment.        |
| `npx eas build --platform android`                                     | Create an Android production build using EAS. |
| `npx eas build --platform ios`                                         | Create an iOS production build using EAS.     |

