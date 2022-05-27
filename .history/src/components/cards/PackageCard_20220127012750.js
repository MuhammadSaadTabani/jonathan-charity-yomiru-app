import React from 'react';
import { 
    View,
    Text,
    ImageBackground,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const PackageCard = () => {
    return(
        <ImageBackground 
            borderRadius={hp('3%')}
            source={require('../../assets/images/package-card.png')}
            style={{height: hp('20%'), width: wp('90%')}}
            imageStyle={{borderRadius: hp('1.5%')}}
        >

        </ImageBackground>
    )
}

export default PackageCard;