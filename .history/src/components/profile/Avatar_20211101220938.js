import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AntDesign as Icon} from '@expo/vector-icons';
import { gray, primary, white } from '../../assets/colors';
import ImageLoader from '../common/ImageLoader';

const Avatar = ({image, onPress, edit}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <ImageLoader profile style={styles.image} source={{uri:image}}/>
            {edit &&
                <Icon name="edit" size={20} color={primary} style={styles.icon}/>
            }
        </TouchableOpacity>
    )
}
export default Avatar;

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        top:hp('10%'),
        alignSelf:'center',
        marginTop:hp('5%')
    },
    image:{
        height:hp('20%'),
        width:hp('20%'),
        borderRadius:100,
        alignSelf:'center',
    },
    icon:{
        padding:hp('0.5%'),
        backgroundColor:white,
        position:'absolute',
        right:10,
        bottom:0,
        borderRadius:hp('1%')
    },
})