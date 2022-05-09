import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createNativeStackNavigator();

import { Dashboard } from '../screens/dashboard';
import { AppRoutes } from '../routes/app.routes';

export function Router() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{headerShown: false}}
            >
                <Screen name='dashboard' component={Dashboard} />
                <Screen name='approutes' component={AppRoutes} />
            </Navigator>
        </NavigationContainer>
    )
}
