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
            borderRadius={hp('1%')}
            source={require('../../assets/images/package-card.png')}
            style={{backgroundColor: 'red'}}
            imageStyle={{height: hp('20%'), width: wp('100%'),}}
        >

        </ImageBackground>
    )
}

export default PackageCard;