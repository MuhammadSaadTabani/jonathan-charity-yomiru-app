import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primaryPurple, white } from '../../../assets/colors';
import { medium, regular } from '../../../assets/fonts';
import ServiceCard from '../../../components/cards/ServiceCard';
import { Container, Header } from '../../../components/common';
import { digitalServices, localServices } from '../../../utils/RawData';

const Home = ({navigation}) => {

    return(
        <Container>
            <ScrollView>
            
            </ScrollView>
        </Container>
    )
}

export default Home;

const styles = StyleSheet.create({
    header:{
        height: hp('30%'),
        backgroundColor: primaryPurple,
        borderBottomEndRadius: hp('2%'),
        borderBottomStartRadius: hp('2%'),
        justifyContent: 'space-between'
    },
    headerRow:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
    },
    heading:{
        width:hp('20%'),
        fontSize:hp('3%'),
        fontFamily: medium,
        color: white,
    },
    text:{
        fontSize:hp('2%'),
        fontFamily: regular,
        color: white,
        marginTop:hp('1%')
    },
    image:{
        height: hp('22%'),
        width: hp('22%'),
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal: hp('2%'),
        alignItems: 'flex-end'
    },
    rowText:{
        fontSize: hp('2.5%'),
        fontFamily: medium,
        color: primaryPurple,
        marginVertical: hp('1%')
    }
})