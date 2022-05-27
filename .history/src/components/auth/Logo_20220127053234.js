import React from 'react';
import { 
    Image,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Logo = ({style, image}) => {
    return (
        <Image
            source={image ? image : require('../../assets/images/logo.png')}
            style={[style,{
                width: hp('20%'),
                height: hp('4.5%'),
                alignSelf: 'center',
                marginVertical:hp('2%')
            }]}
        />
    )
}

export default Logo;