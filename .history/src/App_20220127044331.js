import React, { useEffect } from 'react';
import { 
    View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Routes from './routes';

const App = () => {

    useEffect(()=>{
        SplashScreen.hide()
    },[])

    return (
        <Routes/>
    )
}

export default App;