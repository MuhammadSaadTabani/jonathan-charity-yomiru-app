import React from 'react';
import { 
    Image,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Logo = ({style}) => {
    return (
        <Image
            source={require('../../assets/images/logo.png')}
            style={[style,{
                width: wp('50%'),
                height: hp('4.5%'),
                alignSelf: 'center',
                marginVertical:hp('2%')
            }]}
        />
    )
}

export default Logo;