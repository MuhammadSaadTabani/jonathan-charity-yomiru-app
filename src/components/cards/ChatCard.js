import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { darkGray, gray, primaryPurple } from '../../assets/colors';
import { medium, regular } from '../../assets/fonts';

export default ({image, name, text, onPress}) => {
    return(
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
        >
            <Image source={image} style={styles.image}/>
            <View style={styles.column}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.msg}>{text}</Text>
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
        // marginHorizontal: hp('3%'),
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
    name:{
        fontSize: hp('2.125%'),
        fontFamily: medium,
        color: primaryPurple,
    },
    msg:{
        fontSize: hp('2%'),
        fontFamily: regular,
        color: darkGray,
    },
})