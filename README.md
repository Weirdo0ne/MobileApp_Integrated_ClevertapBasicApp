<img width="1024" height="250" alt="image" src="https://github.com/user-attachments/assets/6ac8facb-489c-43a9-aa3b-61df30a994e8" />

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
<img width="1915" height="1000" alt="image" src="https://github.com/user-attachments/assets/da43e1f3-26b8-458f-8808-31549308627a" />

---

2. In "Android Studio" do this setup as provided in screenshot. (Use Virtual Device Manager)
<img width="1904" height="66" alt="Screenshot 2026-01-29 130040" src="https://github.com/user-attachments/assets/02aadf16-e58a-4390-b4fb-7bcbcea6dc29" />

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

<img width="1546" height="317" alt="image" src="https://github.com/user-attachments/assets/0112f242-9cce-4c12-b2b3-68d7c4abb6cb" />

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

<img width="1897" height="477" alt="Screenshot 2026-01-29 130902" src="https://github.com/user-attachments/assets/9c330246-be17-4384-a87c-fd7b25fb0890" />
<img width="1897" height="477" alt="Screenshot 2026-01-29 130902" src="https://github.com/user-attachments/assets/2503bfdc-e600-4696-9d3d-0e0d1fbcbcd7" />
<img width="1918" height="926" alt="Screenshot 2026-01-29 131535" src="https://github.com/user-attachments/assets/6bef6aa5-06fd-4913-a093-6441b25ae8c9" />
<img width="1918" height="963" alt="Screenshot 2026-01-29 131547" src="https://github.com/user-attachments/assets/03de44e0-00c3-432b-bc6a-520de6fa7b8d" />

---

## OutPut Images of Mobile App in Android Studio 

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/f8f4fb42-4942-4276-bde1-591e52f8461b" width="250"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/69794daf-5534-4005-a04f-b15052944035" width="250"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/6e09b5c3-26bc-4598-8bad-db2a592ebace" width="250"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/83f45abb-8166-430b-8023-f99d795e8697" width="250"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/4daab7c2-fc3c-4f7b-ba0c-57db0ce3b388" width="250"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/7a1560c6-1437-47df-9d78-c641d7a3086c" width="250"/>
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


