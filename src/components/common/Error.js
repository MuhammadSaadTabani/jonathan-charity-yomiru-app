import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { regular } from '../../assets/fonts';
import { useTheme } from '../../theme/ThemeContext';

const Error = ({text}) => {
    const {colors} = useTheme();
    return(
        <View style={styles.container}>
            <Icon name={"error-outline"} size={50} color={colors.border}/>
            <Text style={[styles.text,{color:colors.border}]}>{text}</Text>
        </View>
    )
}
export default Error;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:hp('2.25%'),
        fontFamily:regular,
        margin:hp('2%'),
        textAlign:'center',  
    }
})