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
import { black, darkGray } from '../../../assets/colors';
import { heavy, regular } from '../../../assets/fonts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Packages = ({navigation}) => {

    return(
        <Container style={{padding: hp('3%')}}>
            <Text style={styles.heading}>Choose a Plan</Text>
            <Text style={styles.subHeading}>Select a subscription plan.</Text>
            <PackageCard/>
        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: black,
        fontFamily: heavy,
        fontSize: hp('3%')
    },
    subHeading: {
        fontFamily: regular,
        color: darkGray,
        fontSize: hp('2%')
    }
})

export default Packages