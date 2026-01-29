import React, { useEffect } from 'react'; // Added useEffect
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CleverTap from 'clevertap-react-native'; // Import CleverTap

import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { AppProvider } from './src/context/AppContext';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    // 1. Create the Notification Channel for Android
    CleverTap.createNotificationChannel("test_channel", "Test Notifications", "Testing push", 5, true);

    // 2. Identify the user on launch (Useful for testing)
    // In a real app, you would move this to your actual Login/SignUp success logic
    CleverTap.onUserLogin({
      'Name': 'Test User',
      'Identity': 'test_user_001',
      'Email': '[email protected]'
    });

    console.log("CleverTap Initialized");
  }, []);

  return (
    <AppProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: '#1E1E1E' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen} 
            options={{ title: 'Create GmZ ID' }} 
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              title: 'GmZ Store',
              headerLeft: () => null 
            }} 
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ title: 'Player Profile' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}