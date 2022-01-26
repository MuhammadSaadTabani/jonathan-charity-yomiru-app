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

    const [search, setSearch] = useState('');

    const onServicePress = () => {
        navigation.navigate('ServiceDetails')
    }

    return(
        <Container>
            <ScrollView>
            <View style={styles.header}>
                <Header
                    search={search}
                    onSearchChange={(text)=>setSearch(text)}
                    icon1={'funnel'}
                    icon2={'notifications'}
                    icon2Press={()=>navigation.navigate('OtherStack',{screen: 'Notifications'})}
                    style={{paddingBottom:0}}
                />
                <View style={styles.headerRow}>
                    <View>
                        <Text style={styles.heading}>Hire the Digital Pros</Text>
                        <Text style={styles.text}>View Services</Text>
                    </View>
                    {/* <Image style={styles.image} source={require('../../../assets/images/header.png')}/> */}
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowText}>Digital Services</Text>
                <Text style={[styles.rowText,{fontSize: hp('2%')}]}>View All</Text>
            </View>
            <ScrollView 
                horizontal 
                contentContainerStyle={{paddingHorizontal: hp('1%')}} 
                showsHorizontalScrollIndicator={false}
            >
                {digitalServices.map(item=>
                    <ServiceCard
                        amount={item.amount}
                        text={item.text}
                        image={item.image} 
                        onPress={onServicePress}
                    />
                )}
            </ScrollView>
            <View style={styles.row}>
                <Text style={styles.rowText}>Local Services</Text>
                <Text style={[styles.rowText,{fontSize: hp('2%')}]}>View All</Text>
            </View>
            <ScrollView 
                horizontal 
                contentContainerStyle={{marginBottom:hp('10%'), paddingHorizontal: hp('1%')}} 
                showsHorizontalScrollIndicator={false}
            >
                {localServices.map(item=>
                    <ServiceCard
                        amount={item.amount}
                        text={item.text}
                        image={item.image} 
                        onPress={onServicePress}
                    />
                )}
            </ScrollView>
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