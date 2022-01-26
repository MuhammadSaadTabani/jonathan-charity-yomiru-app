import React from 'react';
import { 
    Image,
} from 'react-native';

const Logo = ({image, style}) => {
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