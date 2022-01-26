import React from 'react';
import {
    View,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { white } from '../../assets/colors';
// import { useTheme } from '../../theme/ThemeContext';
// import { useTheme } from '@react-navigation/native'; 

export const Container = (props) => {
    // const {colors} = useTheme();
    return(
        <View style={[{flex:1, padding:0, backgroundColor:white, paddingBottom:0},props.style]}>
            {props.children}
        </View>
    )
}