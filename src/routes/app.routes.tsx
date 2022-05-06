import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Menu } from '../screens/menu';
import { ConferenceMenu } from '../screens/conferenceMenu';
import { BuyList } from '../screens/buylist';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.background,
        tabBarInactiveTintColor: theme.colors.background,
        tabBarActiveBackgroundColor: theme.colors.foreGroundSecondary,
        tabBarInactiveBackgroundColor: theme.colors.secondary,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 60,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        }
      }}
    >
      <Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="menu"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Conference Menu"
        component={ConferenceMenu}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="check-circle"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Lista de compras"
        component={BuyList}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="shopping-cart"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}
