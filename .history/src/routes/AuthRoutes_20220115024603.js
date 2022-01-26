import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import GettingStarted from '../screens/auth/GettingStarted';
import RegisterOption from '../screens/auth/RegisterOption';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name="GettingStarted" component={GettingStarted}></Stack.Screen> */}
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            {/* <Stack.Screen name="RegisterOption" component={RegisterOption}></Stack.Screen>
            <Stack.Screen name="Register" component={Register}></Stack.Screen> */}
        </Stack.Navigator>
    )
}

export default AuthRoutes;