import React from 'react';
import { 
    View,
    Text,
    ImageBackground,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { white } from '../../assets/colors';
import { bold } from '../../assets/fonts';

const PackageCard = ({amount, amountType}) => {
    const styles = {color: white, fontSize: hp('2%'), fontFamily: bold}
    return(
        <ImageBackground 
            borderRadius={hp('3%')}
            source={require('../../assets/images/package-card.png')}
            style={{height: hp('20%'), width: wp('90%'), marginVertical: hp('1%')}}
            imageStyle={{borderRadius: hp('1.5%')}}
        >
            <Text style={[styles]}>{amountType}</Text>
        </ImageBackground>
    )
}

export default PackageCard;