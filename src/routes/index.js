import React, { useEffect } from 'react';
import Slide from '../assets/animation/Slide'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from '../context'
import {isReadyRef, navigationRef} from '../navigation'
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

const Stack = createStackNavigator();

const Routes = () => {

    // const [isLoggedIn, setIsLoggedIn] = useState(null)

    // const {colors} = useTheme();
    // const dispatch = useDispatch()

    useEffect(()=>{
        // checkToken();
    },[])

    const checkToken = async () => {
    //     getItem('user').then((user)=>{
    //         if(user){
    //             setIsLoggedIn(true);
    //             dispatch({
    //                 type: PUT_USER_DATA, 
    //                 payload: JSON.parse(user)
    //             })
    //         }else{
    //             setIsLoggedIn(false);
    //         }
    //     });
    }

    // if(isLoggedIn === null){
    //     return <AuthScreen/>
    // }

    return(
        <>
            <AuthContext.Provider 
                value={{updateState:checkToken}}
            >
                <NavigationContainer 
                    // theme={{colors:{background:colors.background}}}
                    ref={navigationRef}
                    onReady={() => {
                        isReadyRef.current = true;
                    }}
                >
                    <Stack.Navigator screenOptions={{headerShown: false}} >
                        <Stack.Screen name="AuthRoutes" component={AuthRoutes}/>
                        <Stack.Screen options={{ cardStyleInterpolator: Slide }} name="MainRoutes" component={MainRoutes}/>   
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
        </>
    )
}
export default Routes;