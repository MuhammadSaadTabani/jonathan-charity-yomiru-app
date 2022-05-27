import React from 'react';
import { 
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Home from '../screens/main/home/Home';
import { gray, primary, white } from '../assets/colors';
import { regular } from '../assets/fonts';
import { StatusBar } from 'react-native';
import Profile from '../screens/main/profile/Profile';
import Winner from '../screens/main/wallet/Winners';
import Packages from '../screens/main/wallet/Packages';

const TabViewComponent = () => (
    <View
        style={{
            flex:1,
            backgroundColor: 'white',
        }}
    />
)

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
                tabBarShowLabel: false,
                tabBarActiveTintColor: primary,
                tabBarInactiveTintColor: gray,
                tabBarIconStyle:{marginTop: hp('1%')},
                tabBarBackground:TabViewComponent,
                tabBarStyle:{
                    backgroundColor: 'white',
                    height:hp('8.25%'),
                    borderTopEndRadius:hp('2.5%'),
                    borderTopStartRadius:hp('2.5%'),
                    // borderWidth: 5
                    // shadowColor: "#000",
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 2,
                    // },
                    // shadowOpacity: 0.25,
                    // shadowRadius: 5,

                    // elevation:0,
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
                component={WalletStack}   
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <FontAwesome color={focused ? primary : gray} size={focused ? 28 : 25} name={'user'}/>
                        </>
                    ),  
                    
                }} 
                name="Profile" 
                component={ProfileStack} 
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
            <Stack.Screen name="WalletScreen" component={Winner} />
            <Stack.Screen name="Packages" component={Packages} />
        </Stack.Navigator>
    )
}

const ProfileStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ProfileScreen" component={Profile} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
        </Stack.Navigator>
    )
}



const OtherStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
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