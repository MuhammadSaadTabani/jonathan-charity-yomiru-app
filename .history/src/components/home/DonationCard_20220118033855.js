import React from 'react';
import { 
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { Button } from '../common';
import { primary, black, darkGray, white } from '../../assets/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { regular } from '../../assets/fonts';


const DonationCard = ({image, onPress, text}) => {
    return(
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
                borderTopRightRadius={hp('1%')}
                borderTopLeftRadius={hp('1%')}
            />
            <View style={styles.row}>
                <Text style={styles.text}>{text}</Text>
                <Button 
                    color={primary}
                    text={"Donate"}
                    textColor={black}
                    style={{width: wp('30%'), height: hp('5%'), marginTop:0}}
                />
            </View>
        </View>
    )
}

export default DonationCard;

const styles = StyleSheet.create({
    container:{
        
        borderTopEndRadius: hp('10%'),
        borderTopStartRadius: hp('1%'),
        backgroundColor: white,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,

        marginTop: hp('2%'),
    },
    image:{
        height: hp('25%'),
        width: '100%'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text:{
        fontFamily: regular,
        color: darkGray,
        fontSize: hp('2.5%'),
    }
});
