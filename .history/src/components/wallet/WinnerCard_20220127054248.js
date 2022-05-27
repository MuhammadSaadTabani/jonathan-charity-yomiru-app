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
import Icon from 'react-native-vector-icons/FontAwesome5';

const WinnerCard = ({winner}) => {
    return(
        <View style={[styles.container, winner.winner && styles.winnerContainer]}>
            <Image source={winner.image} style={styles.image}/>
            <Text style={styles.text}>{winner.name}</Text>
            {winner.winner &&
                <Icon style={{position:'absolute', top:hp('-2.5%'), right:hp('-1.75%'), transform:[{rotate:'35deg'}]}} name="crown" color={primary} size={25} />
            }
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
        borderTopStartRadius: hp('4%'),
        borderTopEndRadius: hp('4%'),
        borderBottomStartRadius: hp('4%'),
        borderBottomEndRadius: hp('4%'),
    },
    image: {
        height: hp('9%'),
        width: hp('9%'),
        borderRadius: 100,
    },
    text:{
        width: '60%',
        textAlign: 'center',
        marginTop: hp('1%'),
        fontFamily: regular,
        color: black,
        fontSize: hp('2.25%')
    }
})