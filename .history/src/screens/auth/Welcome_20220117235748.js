import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { white } from '../../assets/colors';
import { medium, regular } from '../../assets/fonts';
import Logo from '../../components/auth/Logo';

const Welcome = ({navigation}) => {
    return(
        <ImageBackground style={styles.container} source={require('../../assets/images/welcome.png')}>
            <Logo image={require('../../assets/images/logo-white.png')}/>
            <Text style={styles.heading}>Welcome to Yomiruh!</Text>
            <Text style={styles.text}>Where we change many lives every day. After the first 500 subscribers we will launch the Yomiruh process. Each subscriber of each subscription will be announced everyday. Once a winner is declared 85% will be sent to the winner of the day. 10% to support the app and employees and 5% for charities made by Yomiruh. Many more exciting applications will be added as it grows. Tell all your friends and family about Yomiruh and have a chance to help the world and have a chance to change your life as well</Text>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: hp('3.5%')
    },
    heading:{
        color: white,
        fontFamily: medium,
        fontSize: hp('4%'),
        marginVertical: hp('2%')
    },
    text:{
        color: white,
        fontFamily: regular,
        fontSize: hp('2.25%'),
        textAlign:'center'
    }
})
export default Welcome;