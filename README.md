<img width="1200" height="330" alt="clevertap-android-sdk" src="https://github.com/user-attachments/assets/cea2fa94-ded9-4bdc-adbd-3c70783a0ada" />


# GmZ Store 
!!! Developed for CleverTap Interview as their given guidelines to "Develop Mobile Application integrating CleverTap SDK" !

---

GmZ Store is a mobile gaming marketplace application built with React Native.  
The app allows users to securely register, browse gaming products, manage carts and orders, and track user behavior using CleverTap analytics.
IMP -> Main aim was to integrate the 'CleverTap SDK' and access the 'CleverTap dashboard analytics'.

---


## Features

- Secure user authentication (Login & Signup)
- Search and browse gaming products
- Add to cart and purchase functionality
- Order cancellation and purchase history
- Global state management using Context API
- User behavior tracking with CleverTap SDK
- Dark-themed, user-friendly UI

---

## Tech Stack

- **Framework:** React Native (TypeScript)
- **Navigation:** React Navigation (Stack)
- **State Management:** React Context API
- **Analytics:** CleverTap React Native SDK
- **UI Components:** NativeBase & Custom Styling
- **Platform:** Android

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or higher)
- Java JDK (v11 or higher)
- Android Studio with Emulator
- React Native CLI

---

## Installation

### Requirements
1. "Start a free trial" of CleverTap to Integrate the DashBoard and key Events. (For "ProjectID and ProjectToken / AccountID And AccountToken" -> Same)
<img width="1915" height="1000" alt="Screenshot 2026-01-29 135211" src="https://github.com/user-attachments/assets/2069156b-d661-435a-bfd7-4262cf9cea13" />

---

2. In "Android Studio" do this setup as provided in screenshot. (Use Virtual Device Manager)
<img width="1904" height="66" alt="Screenshot 2026-01-29 130040" src="https://github.com/user-attachments/assets/92191375-facd-47b3-90c6-50d8f8232aae" />

---

3. Project Setup.

```bash
# Clone the repository
git clone https://github.com/YourUsername/GmZ-Store.git

# Navigate to the project directory
cd MOBILEAPP

# Install dependencies
npm install

```
---

4. Optional I guess.  

I have also tried to integrate Firebase Messaging, but I didn’t verify it and decided not to continue because I was already using dummy credentials. So, you will have to configure it neatly on your own and set it up with the FCM HTTP v1 API on Firebase itself, where you need to download a .json file and upload it to your project.

---

-> Add your own .json file downloaded from FireBase in android/app/

---

But you can check if it is connected on CleverTap Dasboard by verifying the Bell Button Icon in User Profile - Green Bell Means Addressable & Grey/Red Bell Means Unreachable ! 

---

<img width="1546" height="317" alt="Screenshot 2026-01-29 151135" src="https://github.com/user-attachments/assets/30baa33a-8cf9-4f4a-825a-451e262845ea" />

---

## CleverTap Configuration

### Add your CleverTap credentials in the Android manifest file:
```bash
Path:

android/app/src/main/AndroidManifest.xml

<meta-data
    android:name="CLEVERTAP_ACCOUNT_ID"
    android:value="YOUR_ACCOUNT_ID"/>

<meta-data
    android:name="CLEVERTAP_TOKEN"
    android:value="YOUR_TOKEN"/>
```
Ensure CleverTap is properly initialized in MainApplication.java.

---

## Event Tracking

### The application tracks the following events using CleverTap:
-User Login
-Product Viewed
-Add to Cart
-Product Purchased
-Order Cancelled

---

## Project Structure
```bash
MOBILEAPP/
├── src/
│   ├── context/        # Global state management
│   ├── navigation/     # App navigation
│   └── screens/        # Application screens
├── App.tsx             # Application entry point
└── package.json        # Project dependencies
```
---

## Running the App

Start the Metro server: In 1st Terminal - Let it be as it is after starting ! ( Act as a Live bridge )
```bash
npx react-native start
```

Run the app on Android: In 2nd Terminal - Use the below command to start the app on Android ! (sequence of events that builds the bridge between your code and the physical device )
```bash
npx react-native run-android
```
---

## OutPut Images of CleverTap Analytics 

<img width="1897" height="477" alt="Screenshot 2026-01-29 130902" src="https://github.com/user-attachments/assets/f5b50ceb-6f77-4d02-86eb-06a2c1887b42" />
<img width="1918" height="972" alt="Screenshot 2026-01-29 131503" src="https://github.com/user-attachments/assets/aeb4489e-9c37-4bb7-b032-0aeaed6b86c0" />
<img width="1918" height="926" alt="Screenshot 2026-01-29 131535" src="https://github.com/user-attachments/assets/5d0d2c3e-3ad3-47fd-b6ce-9ef69a80ef3f" />
<img width="1918" height="963" alt="Screenshot 2026-01-29 131547" src="https://github.com/user-attachments/assets/7375ad64-bfe5-4ba3-a239-a2c457f8fd91" />

---

## OutPut Images of Mobile App in Android Studio 

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/82ced770-a040-4ac0-b4f5-965473fc5847" width="250"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/05ee7874-9868-45df-ac1a-769111bee31d" width="250"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/01b742e1-d7d5-4206-a3e4-3521136f9c19" width="250"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/7444ad70-46bf-4adf-930a-3fc647e11ec4" width="250"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/5fa6495d-751c-4780-ac7b-d15a1a0df231" width="250"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/37664931-6511-45a0-a1f1-f262a0ca71c7" width="250"/>
    </td>
  </tr>
</table>




---

## License

The UnLicence License 

---

Developed by
```bash
- > WeirdoOne
```
---

Have any doubts -> Contact me on Linkedin | https://www.linkedin.com/in/kaustubhghosalkar03/ |
And yes before you contact me, know this things !

I am not a pure coder, my strengths in DSA are limited. However, I know how to prompt, understand what and where the build is, where to make changes, and what is happening in my code. You could say I am more of a Prompt Engineer for now. I love to explore new things, but covering each element in depth and from the basics takes time. So, I value time and follow easy-peesy resources as provided on the internet. In the future, I plan to master Java and Python. Currently, I am learning and applying my skills in the cybersecurity domain. So, please be kind.

---


