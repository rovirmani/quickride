# startupxmobile
apologize for bad formatting will work on it as we go on 

1) Visit this link and setup everything for your machine(macOS and iOS) clicking on the React Native CLI Quickstart (https://reactnative.dev/docs/environment-setup?guide=native#command-line-tools) or follow these instructions.
  * `brew install node`
  * `brew install watchman`
2) Make sure XCode is installed.
  * Command Line Tools
  You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and     install the tools by selecting the most recent version in the Command Line Tools dropdown.
  * Installing an iOS Simulator in Xcode
  To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to   use.
3) If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues:
`npm uninstall -g react-native-cli @react-native-community/cli`
4) Then run the following commands in your terminal.
  * `npx react-native start`
  * `npx react-native run-ios`
