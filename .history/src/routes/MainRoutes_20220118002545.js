import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Home from '../screens/main/home/Home';
import { gray, primary, white } from '../assets/colors';
import { regular } from '../assets/fonts';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            backBehavior
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: primary,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: gray,
                tabBarLabelStyle:{marginBottom: hp('1%'), fontFamily: regular},
                tabBarIconStyle:{marginTop: hp('1%')},
                tabBarStyle:{
                    backgroundColor:'red',
                    height:hp('8.25%'),
                    borderTopEndRadius:hp('2.5%'),
                    borderTopStartRadius:hp('2%'),
                },
            }}
        >
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon color={focused ? primary : gray} size={focused ? 28 : 25} name={'compass'}/>
                        </>
                    ),  
                    
                }} 
                name="HOME" 
                component={HomeStack}   
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon color={focused ? primary : gray} size={focused ? 28 : 25} name={'wallet'}/>
                        </>
                    ),  
                    
                }} 
                name="Wallet" 
                component={HomeStack}   
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <FontAwesome color={focused ? primary : gray} size={focused ? 30 : 26} name={'plus'}/>
                        </>
                    ),  
                    
                }} 
                name="Profile" 
                component={HomeStack}   
            />
           
     
        </Tab.Navigator>
    )
}

const HomeStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
    )
}
const WalletStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ExploreScreen" component={Explore} />
        </Stack.Navigator>
    )
}

const ProfileStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="JobPost" component={JobPost} />
        </Stack.Navigator>
    )
}



const OtherStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    )
}



export default () => {
    return(
        <>
            {/* <StatusBar barStyle='light-content' backgroundColor={}/> */}
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="HomeStack" component={HomeStack} />
                <Stack.Screen name="WalletStack" component={WalletStack} />
                <Stack.Screen name="ProfileStack" component={ProfileStack} />
                <Stack.Screen name="OtherStack" component={OtherStack} />
            </Stack.Navigator>
        </>
    )
}