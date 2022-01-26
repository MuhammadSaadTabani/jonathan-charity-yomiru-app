

import React, { useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary } from '../../../assets/colors';
import { Container } from '../../../components/common';

const Winner = ({navigation}) => {

    return(
        <Container>
            <TouchableOpacity style={styles.card}>
                <Text>My Package</Text>
            </TouchableOpacity>           
        </Container>
    )
}

export default Winner

const styles = StyleSheet.create({
    card:{
        backgroundColor: primary,
        padding: hp('2%'),
        borderRadius: hp('2%')
    }
})