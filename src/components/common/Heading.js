import React from 'react';
import { 
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primaryPurple } from '../../assets/colors';
import { medium } from '../../assets/fonts';

export default ({text, style}) => {
    return <Text style={[styles.text, style]}>{text}</Text>
}

const styles = StyleSheet.create({
    text:{
        fontSize: hp('2.5%'),
        fontFamily: medium,
        color: primaryPurple,
        marginVertical: hp('1%'),
        // marginLeft: hp('3%'),
    }
})