import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { darkGray, gray } from '../../assets/colors';
import {regular } from '../../assets/fonts';

export default ({image, text, onPress}) => {
    return(
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
        >
            <Image source={image} style={styles.image}/>
            <View style={styles.column}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: hp('1%'),
        borderColor: gray,
        marginHorizontal: hp('3%'),
        marginVertical: hp('1%'),
        padding: hp('1%'),
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
        fontSize: hp('2%'),
        fontFamily: regular,
        color: darkGray,
    },
})