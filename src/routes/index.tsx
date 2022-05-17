import React, {useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth'

const { Navigator, Screen } = createNativeStackNavigator();

import { Dashboard } from '../screens/dashboard';
import { AppRoutes } from '../routes/app.routes';

export function Router() {
    const {user} = useAuth();
    console.log(user);
    
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
