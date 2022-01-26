import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { black, darkGray, gray } from '../../assets/colors';
import {medium, regular } from '../../assets/fonts';

export default ({icon, text, onPress}) => {
    return(
        <TouchableOpacity
            style={styles.row}
            onPress={onPress}
        >
            <Icon name={icon} size={hp('3%')} color={black} />
            <View style={styles.column}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        borderRadius: hp('1%'),
        backgroundColor: '#FFFAEB',
        marginHorizontal: hp('5%'),
        marginVertical: hp('1.5%'),
        padding: hp('2%'),
    },
    image:{
        height: hp('7%'),
        width: hp('7%'),
        borderRadius: 100
    },
    column:{
        flex:1,
        marginLeft: hp('1%'),
        justifyContent: 'center'
    },
    text:{
        fontSize: hp('2.5%'),
        fontFamily: medium,
        color: black,
    },
})