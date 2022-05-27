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
import { black } from '../../../assets/colors';
import { heavy } from '../../../assets/fonts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Packages = ({navigation}) => {

    return(
        <Container>
            <Text>Choose a Plan</Text>
            <Text>Select a subscription plan.</Text>
            <PackageCard/>
        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: black,
        fontFamily: heavy,
        fontSize: hp('3%')
    }
})

export default Packages