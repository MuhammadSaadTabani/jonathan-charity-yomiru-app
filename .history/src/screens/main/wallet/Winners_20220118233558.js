

import React, { useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { black, primary, white } from '../../../assets/colors';
import { bold, heavy, light, medium } from '../../../assets/fonts';
import { Container } from '../../../components/common';

const Winner = ({navigation}) => {

    return(
        <Container>
            <TouchableOpacity style={styles.card}>
                <View>
                <Text style={styles.cardText}>Subscription Packages</Text>
                <Text style={[styles.cardText,{color: white, fontFamily: light, width: wp('50%')}]}>Tap to Select any package to get listed in winner of the day</Text>
                </View>
                <Icon name="logo-usd" size={hp('3.5%')} color={black}/>
            </TouchableOpacity>           
        </Container>
    )
}

export default Winner

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: primary,
        padding: hp('2%'),
        paddingVertical: hp('3%'),
        marginVertical: hp('3%'),
        marginHorizontal: hp('2%'),
        borderRadius: hp('2%'),
    },
    cardText: {
        fontSize: hp('2.5%'),
        color: black,
        fontFamily: bold
    }
})