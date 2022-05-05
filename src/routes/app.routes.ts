import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from  'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/dashboard'

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator >
      <Screen 
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}
