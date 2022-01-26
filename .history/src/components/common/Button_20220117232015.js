import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    ActivityIndicator,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { white } from '../../assets/colors';
import { medium } from '../../assets/fonts';

export const Button = ({onPress, color, text, textColor, image, style, loading}) => {
    return(
        <TouchableOpacity disabled={loading} onPress={onPress} style={[styles.container,{backgroundColor:color},style]}>
            {loading 
            ?
                <ActivityIndicator color={textColor || white} size="small" />
            :
            <>
                {image && <Image style={styles.image} source={image}/>}
                <Text style={[styles.text,textColor && {color: textColor}, image && {fontSize: hp('2%')}]}>{text}</Text>
            </>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:'100%',
        height:hp('6%'),
        marginTop:hp('2.5%'),
        borderRadius:hp('1%'),
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
    },
    text:{
        fontFamily: medium,
        fontSize:hp('2.5%'),
        color: white
    },
    image:{
        height:hp('4%'),
        width:'3%',
        marginRight:hp('2%')
    }
})