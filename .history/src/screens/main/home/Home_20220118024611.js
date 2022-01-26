import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { primary, primaryPurple, white } from '../../../assets/colors';
import { medium, regular } from '../../../assets/fonts';
import ServiceCard from '../../../components/cards/ServiceCard';
import { Container } from '../../../components/common';
import { digitalServices, localServices } from '../../../utils/RawData';

const Home = ({navigation}) => {

    return(
        <Container style={{padding: hp('2.5%')}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerRow}>
                    <Image source={require('../../../assets/images/person.jpg')} style={styles.userImage}/>
                    <Icon name="search-outline" size={hp('5%')} color={primary}/>
                </View>
            </ScrollView>
        </Container>
    )
}

export default Home;

const styles = StyleSheet.create({
    headerRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp('1%')
    },
    userImage:{
        height: hp('8%'),
        width: hp('8%'),
        borderRadius: 100,
    }
})