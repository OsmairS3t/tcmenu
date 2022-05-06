import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from  'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/dashboard'

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator>
      <Screen 
        name="Dashboard"
        component={Dashboard}  
      />
    </Navigator>
  )
}
