import React from 'react';
import { 
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { white } from '../../assets/colors';
import { bold, light, medium, regular } from '../../assets/fonts';
import { Button } from '../common';

const PackageCard = ({amount, amountType}) => {
    const styles = {color: white, fontSize: hp('2%'), fontFamily: bold, textAlign: 'center'}
    return(
        <ImageBackground 
            borderRadius={hp('3%')}
            source={require('../../assets/images/package-card.png')}
            style={{height: hp('20%'), width: wp('90%'), marginVertical: hp('1%')}}
            imageStyle={{borderRadius: hp('1.5%')}}
        >
            <Text style={[styles,{fontFamily: light}]}>{amountType}</Text>
            <Text style={[styles]}>{amount}</Text>
            <Text style={[styles]}>per month</Text>
            <TouchableOpacity style={{backgroundColor: white, width: wp('27.5%'), height: hp('4.5%'), borderRadius: hp('1.25%'), justifyContent: 'center', alignItems:'center'}}>
                <Text style={[styles, {color: "#2E8BFF", fontFamily: regular}]}>Subscribe</Text>
            </TouchableOpacity>
            {/* <Button
                color={white}
                text={"Subscribe"}
                onPress={null}
                textColor={'#2E8BFF'}
                style={{}}
                st
            /> */}
        </ImageBackground>
    )
}

export default PackageCard;