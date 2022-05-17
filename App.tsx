import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { AuthProvider } from './src/hooks/auth'

//import * as SplashScreen from 'expo-splash-screen';
//import * as Font from 'expo-font';
//import Entypo from '@expo/vector-icons/Entypo';
//expo doctor --fix-dependencies
//https://docs.expo.dev/versions/latest/sdk/splash-screen/
// cd android && gradlew signinReport não funcionou
//import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Mulish_200ExtraLight,
  Mulish_300Light,
  Mulish_400Regular,
  Mulish_700Bold
} from '@expo-google-fonts/mulish';

import { Router } from './src/routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Mulish_200ExtraLight,
    Mulish_300Light,
    Mulish_400Regular,
    Mulish_700Bold
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}
