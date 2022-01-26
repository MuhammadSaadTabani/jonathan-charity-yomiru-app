import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Text,
    StyleSheet
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { black, gray, primaryPink } from '../../assets/colors';
import { regular } from '../../assets/fonts';


export default () => {

    const navigation = useNavigation();

    const onPPPress = () => {
        // navigation.navigate('LegalText',{item:{name:'Privacy Policy',type:'privacy_policy',}})
    }
    const onTCPress = () => {
        // navigation.navigate('LegalText',{item:{name:'Terms & Conditions',type:'terms_conditions',}})
    }
    return(
        <View style={styles.row}>
            <Text onPress={onPPPress} style={styles.rowText}>Privacy Policy</Text>
            <Text onPress={onTCPress} style={styles.rowText}>Terms & Conditions</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    row:{
        width: '80%',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginTop:hp('2%'),
        alignSelf:'center',
    },
    rowText:{
        color:primaryPink,
        fontFamily:regular,
        fontSize:hp('1.8%'),
    },
})