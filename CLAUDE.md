# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

StartupX Mobile is the mobile application for QuickRide, a ridesharing platform. Cross-platform iOS and Android app built with React Native and Expo. Features maps, location services, and navigation for ride-hailing functionality.

## Tech Stack

- **Language**: TypeScript
- **Framework**: React Native 0.72
- **Platform**: Expo 48
- **Maps**: react-native-maps + react-native-maps-directions
- **Location**: expo-location
- **Animations**: react-native-gesture-handler, react-native-reanimated
- **Icons**: react-native-vector-icons
- **Responsive**: react-native-size-matters
- **Linting**: ESLint (@react-native-community config)
- **Formatting**: Prettier
- **Testing**: Jest + React Test Renderer

## Project Structure

```
startupxmobile/
├── sxmobile/
│   ├── package.json             # React Native + Expo dependencies
│   ├── app.json                 # Expo configuration
│   ├── babel.config.js          # Babel configuration
│   ├── tsconfig.json            # TypeScript configuration
│   ├── .eslintrc.js             # ESLint with React Native config
│   ├── .prettierrc.js           # Prettier formatting rules
│   ├── .watchmanconfig          # Watchman file watching
│   ├── App.tsx                  # Root component
│   ├── src/
│   │   ├── screens/             # Screen components
│   │   ├── components/          # Reusable components
│   │   ├── navigation/          # Navigation configuration
│   │   └── services/            # API and location services
│   ├── ios/                     # iOS native code
│   ├── android/                 # Android native code
│   ├── __tests__/               # Jest test files
│   └── Gemfile                  # Ruby dependencies (iOS build tools)
└── .github/workflows/
    └── claude.yml               # Claude Code Actions workflow
```

## Development Commands

```bash
cd sxmobile

# Install dependencies
npm install

# Install iOS pods (macOS only)
cd ios && pod install && cd ..

# Start Metro bundler
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run tests
npm test

# Lint
npm run lint
```

## Environment & Config

- `app.json` contains Expo configuration (app name, version, permissions)
- API keys for maps/location services may be needed
- iOS requires Xcode + Command Line Tools
- Android requires Android SDK + emulator

## Code Style & Standards

- **ESLint**: @react-native-community config with import ordering rules
- **Prettier**: Configured in `.prettierrc.js`
- TypeScript strict mode
- React Native component patterns
- Screens in `src/screens/`, reusable components in `src/components/`

## Architecture Notes

- Expo provides managed workflow with access to native APIs
- react-native-maps renders Google/Apple Maps with custom markers
- react-native-maps-directions draws route polylines between points
- expo-location handles GPS and geofencing
- react-native-gesture-handler + reanimated for smooth gesture-based animations
- Navigation handled via React Navigation (stack, tab, drawer navigators)

## Prerequisites

- Node.js 16+
- Watchman: `brew install watchman`
- Xcode + Command Line Tools (iOS)
- Android Studio + SDK (Android)
- CocoaPods: `sudo gem install cocoapods` (iOS)

## Troubleshooting

- Metro bundler stuck: Clear cache with `npm start -- --reset-cache`
- iOS build fails: `cd ios && pod install --repo-update`
- Android build fails: Check ANDROID_HOME environment variable
- Maps not rendering: Verify Google Maps API key in native config files
- Note: Source code is in `sxmobile/` subdirectory, not project root
