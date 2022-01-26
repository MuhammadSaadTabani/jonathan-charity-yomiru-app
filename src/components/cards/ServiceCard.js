import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, primaryPurple } from '../../assets/colors';
import { medium, regular } from '../../assets/fonts';

const ServiceCard = ({image, text, amount, onPress}) => {
    return(
        <TouchableOpacity 
            style={styles.card}
            onPress={onPress}
        >
            <Image 
                source={image}
                style={styles.image}
            />
            <View style={{flex:1, justifyContent: 'space-between'}}>
                <Text style={styles.text}>{text}</Text>
                <Text style={styles.amount}>Starting from ${amount}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ServiceCard;

const styles = StyleSheet.create({
    card:{
        height:'auto',
        width:hp('22.5%'),
        margin: hp('1%'),
        backgroundColor:'white',
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        
        borderRadius: hp('1%')
    },
    image:{
        height:hp('15%'),
        width:hp('22.5%'),
        borderRadius: hp('1%')
    },
    text:{
        fontSize:hp('1.75%'),
        fontFamily: regular,
        color: black,
        padding:hp('1%')
    },
    amount:{
        fontSize:hp('1.75%'),
        fontFamily: medium,
        color: primaryPurple,
        paddingTop:hp('1%'),
        marginVertical:hp('1%'),
        borderTopWidth:0.5,
        alignSelf: 'center'
    }
})