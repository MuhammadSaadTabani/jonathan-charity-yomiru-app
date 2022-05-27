import React, { useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Container, Header } from '../../../components/common';
import NotificationCard from '../../../components/cards/NotificationCard';
import PackageCard from '../../../components/cards/PackageCard';
import SimpleHeader from '../../../components/common/Header';
import { black, darkGray, fbBlue } from '../../../assets/colors';
import { heavy, regular } from '../../../assets/fonts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const packages = [
    {
        id: 1,
        amount: '$0.31',
        amountType: 'Yomiruh Penny',
    },
    {
        id: 2,
        amount: '$1.55',
        amountType: 'Yomiruh Nickel',
    },
    {
        id: 3,
        amount: '$3.1',
        amountType: 'Yomiruh Dime',
    },
]

const Packages = ({navigation}) => {

    const onCancelPress = () => {
        navigation.goBack();
    }
    return(
        <Container style={{padding: hp('3%')}}>
            <Text style={styles.heading}>Choose a Plan</Text>
            <Text style={styles.subHeading}>Select a subscription plan.</Text>
            {packages.map(item=>
                <PackageCard
                    amount={item.amount}
                    amountType={item.amountType}
                />
            )}
            <Text
                onPress={onCancelPress} 
                style={[styles.subHeading,{textAlign: 'center', color: fbBlue, marginTop: hp('2%')}]}>Cancel</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: black,
        fontFamily: heavy,
        fontSize: hp('3%'),
        marginBottom: hp('1%')
    },
    subHeading: {
        fontFamily: regular,
        color: darkGray,
        fontSize: hp('2.1%')
    }
})

export default Packages