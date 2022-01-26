import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from '../../theme/ThemeContext';

const AuthScreen = () => {
    const {colors} = useTheme();
    return(
        <View style={[styles.container,{backgroundColor: colors.background}]}>
            {/* <StatusBar backgroundColor={black} barStyle="light-content"/> */}
            <Image resizeMode="center" style={styles.imageStyle} source={require('../../assets/images/logo.png')}/>
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:black,
    },
    imageStyle:{
        // width:wp('55%'),
        height:hp('25%'),
    }
});