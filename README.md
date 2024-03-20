
# SP React Native - CompassUOL - Challenge 02 - Squad 06 - Felipe Ferreira Rocha

This project is intended for the Compass UOL Scholarship Program. This challenge aims to test the knowledge obtained during studies of React Native, Typescript, Styled-Components, Navigation, making requests in a backend, and others. The proposed challenge aims to:

 - [x] Login screen
 - [x] User registration screen
 - [x] Password reset screen
 - [x] Home screen (after login)


![](https://i.imgur.com/RBCNFll.png)

## Requirements

- React Native
- Npm or Yarn
- Expo
- Android Studio or a Mobile Phone with Expo Go (android)

## Main dependencies

The **most relevant dependencies** I used during the development of the application were:

 - Firebase: used to create users and authenticate them at login, as
   well as send email messages to reset passwords
   
 - Styled-components: I used it to create custom components
   
  - React Native Svg and React Native Svg Transformer: used to configure
   the application so that it can read Svg files and use them as a
   component.
   
  - Yup: used to validate inputs such as minimum password length,
   required fields, correct email formatting, etc.
   
  - React Hook Form: used to perform form validations

## Starting the project

 In the terminal, use the `npm i` command to install all project dependencies
 
![](https://i.imgur.com/mpawOEY.png)
 
 In the terminal, use the `npx expo start` command to start expo
 
![](https://i.imgur.com/pYK70mU.png)

 1. To use **Android Studio** (I assume you have already installed and configured Android Studio. If necessary, use this link to help you install/configure Android Studio [Windows | Rocketseat Docs](https://react-native.rocketseat.dev/android/windows)), press the key `a`
2. To use a **mobile device**, install the Expo Go app on the device and open the app
	- In the option "***Enter URL manually***" you can type the link that is in your terminal, in the example above it would be `exp://192.168.3.25:8081`.

	- In the "***Scan QR code***" option you can scan the QR code on the terminal.


![enter image description here](https://i.imgur.com/i7xOh7D.jpeg)



> [!NOTE]
> The Firebase configuration is in "***src/services/FirebaseConfig.ts***". I'm leaving the configuration data for my Firebase project to *facilitate evaluation*, as this repository is only intended for Compass UOL SP instructors. If you want to use your own data, create a project in your Firebase account and update the value of `const firebaseConfig = { ...any code }` with your data from the [Console Firebase](https://firebase.google.com/?hl=pt).
