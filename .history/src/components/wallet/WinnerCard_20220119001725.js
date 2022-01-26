import React from 'react';
import { 
    Text,
    Image,
    View,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { black, primary } from '../../assets/colors';
import { regular } from '../../assets/fonts';

const WinnerCard = ({winner}) => {
    return(
        <View style={[styles.container, winner.winner && styles.winnerContainer]}>
            <Image source={winner.image} style={styles.image}/>
            <Text style={styles.text}>{winner.name}</Text>
        </View>
    )
}

export default WinnerCard;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: hp('2%'),
    },
    winnerContainer:{
        backgroundColor: primary,
        borderTopStartRadius: hp('5%')
    },
    image: {
        height: hp('9%'),
        width: hp('9%'),
        borderRadius: 100,
    },
    text:{
        width: wp('20%'),
        textAlign: 'center',
        marginTop: hp('1%'),
        fontFamily: regular,
        color: black,
        fontSize: hp('2.25%')
    }
})