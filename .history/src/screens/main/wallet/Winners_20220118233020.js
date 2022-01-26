

import React, { useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { black, primary } from '../../../assets/colors';
import { Container } from '../../../components/common';

const Winner = ({navigation}) => {

    return(
        <Container>
            <TouchableOpacity style={styles.card}>
                <Text>My Package</Text>
                <Icon name="logo-usd" size={hp('3%')} color={black}/>
            </TouchableOpacity>           
        </Container>
    )
}

export default Winner

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: primary,
        padding: hp('2%'),
        paddingVertical: hp('3%'),
        marginVertical: hp('3%'),
        marginHorizontal: hp('2%'),
        borderRadius: hp('2%'),
    }
})