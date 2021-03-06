import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            {/* <Stack.Screen name="Register" component={Register}></Stack.Screen>  */}
        </Stack.Navigator>
    )
}

export default AuthRoutes;