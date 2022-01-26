

import React, { useState } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { black, primary, white } from '../../../assets/colors';
import { bold, heavy, light, medium, regular } from '../../../assets/fonts';
import { Container } from '../../../components/common';
import WinnerCard from '../../../components/wallet/WinnerCard';

const list = [
    {
        id:1,
        name: "James Harthen",
        image: require('../../../assets/images/winner1.jpg'),
        winner: false,
    },
    {
        id:2,
        name: "William James",
        image: require('../../../assets/images/winner2.jpg'),
        winner: false,
    },
    {
        id:3,
        name: "Donald Murphy",
        image: require('../../../assets/images/winner3.jpg'),
        winner: false,
    },
    {
        id:4,
        name: "Polen James",
        image: require('../../../assets/images/winner4.jpg'),
        winner: false,
    },
    {
        id:5,
        name: "Rock Williamson",
        image: require('../../../assets/images/winner5.jpg'),
        winner: true,
    },
    {
        id:6,
        name: "Ethan Jackson",
        image: require('../../../assets/images/winner6.jpg'),
        winner: false,
    },
    {
        id:7,
        name: "James Harthen",
        image: require('../../../assets/images/winner1.jpg'),
        winner: false,
    },
    {
        id:8,
        name: "William James",
        image: require('../../../assets/images/winner2.jpg'),
        winner: false,
    },
    {
        id:9,
        name: "Donald Murphy",
        image: require('../../../assets/images/winner3.jpg'),
        winner: false,
    },
    {
        id:10,
        name: "Polen James",
        image: require('../../../assets/images/winner4.jpg'),
        winner: false,
    },
    {
        id:11,
        name: "Rock Williamson",
        image: require('../../../assets/images/winner5.jpg'),
        winner: false,
    },
    {
        id:12,
        name: "Ethan Jackson",
        image: require('../../../assets/images/winner6.jpg'),
        winner: false,
    },
    
]

const ListHeader = () => (
    <>
        <Text style={[styles.heading,{fontSize: hp('3.25%'), fontFamily: light}]}>Winner of the day</Text>
        <Text style={[styles.heading,{fontFamily: regular, fontSize: hp('2.25%'), marginTop: hp('0.5%')}]}>Winners will be picked daily</Text>
    </>
)


const Winner = ({navigation}) => { 
    const [winners, setWinners] = useState(list)

    return(
        <Container>
            <TouchableOpacity style={styles.card}>
                <View>
                    <Text style={styles.heading}>Subscription Packages</Text>
                    <Text style={[styles.heading,{color: white, fontFamily: light, width: wp('70%')}]}>Tap to Select any package to get listed in winner of the day</Text>
                </View>
                <Icon name="logo-usd" size={hp('3.5%')} color={black}/>
            </TouchableOpacity>  
            <FlatList
                style={{marginHorizontal: hp('3%')}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: hp('3%')}}
                columnWrapperStyle={{justifyContent: 'space-between', marginTop: hp('5%')}}
                numColumns={3}
                data={winners}
                ListHeaderComponent={ListHeader}
                renderItem={({item})=>
                    <WinnerCard winner={item}/>
                }
            /> 
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
    heading: {
        fontSize: hp('2.5%'),
        color: black,
        fontFamily: bold
    },
    
})