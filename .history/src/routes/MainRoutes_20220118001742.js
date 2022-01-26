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
                tabBarInactiveTintColor: gray,
                tabBarLabelStyle:{marginBottom: hp('1%'), fontFamily: regular},
                tabBarIconStyle:{marginTop: hp('1%')},
                tabBarStyle:{
                    backgroundColor:white,
                    height:hp('8.25%'),
                    borderTopEndRadius:hp('2%'),
                    borderTopStartRadius:hp('2%'),
                },
            }}
        >
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon color={focused ? primaryPurple : white} size={focused ? 28 : 25} name={'home'}/>
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
                            <Icon color={focused ? primaryPurple : white} size={focused ? 28 : 25} name={'compass'}/>
                        </>
                    ),  
                    
                }} 
                name="EXPLORE" 
                component={ExploreStack}   
            />
            <Tab.Screen 
                options={{
                    tabBarLabelStyle:{marginBottom: hp('2%')},
                    tabBarIconStyle:{
                        backgroundColor: primaryPurple,
                        borderRadius: 100,
                        height: hp('6.5%'),
                        width: hp('6.5%'),
                        position: 'absolute', 
                        top: hp('-3%')
                    },
                    tabBarIcon: ({ focused }) => (
                        <>
                            <FontAwesome color={white} size={focused ? 30 : 26} name={'plus'}/>
                        </>
                    ),  
                    
                }} 
                name="POST A JOB" 
                component={JobPostStack}   
            />
           
     
        </Tab.Navigator>
    )
}

const HomeStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        </Stack.Navigator>
    )
}
const ExploreStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ExploreScreen" component={Explore} />
            <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        </Stack.Navigator>
    )
}

const JobPostStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="JobPost" component={JobPost} />
        </Stack.Navigator>
    )
}

const ChatsStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ChatScreen" component={Chats} />
        </Stack.Navigator>
    )
}

const SettingsStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Settings" component={Settings} />
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
            <StatusBar barStyle='light-content' backgroundColor={primaryPurple}/>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="HomeStack" component={HomeStack} />
                <Stack.Screen name="ExploreStack" component={ExploreStack} />
                <Stack.Screen name="ChatsStack" component={ChatsStack} />
                <Stack.Screen name="SettingsStack" component={SettingsStack} />
                <Stack.Screen name="OtherStack" component={OtherStack} />
            </Stack.Navigator>
        </>
    )
}