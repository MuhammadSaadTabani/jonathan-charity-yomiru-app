import React, { useState } from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { black, fbBlue, gray, primary, primaryPurple } from '../../assets/colors';
import { bold, regular } from '../../assets/fonts';
import { Button, Container, Header, IconInput } from '../../components/common';

const Login = ({navigation}) => {

    let passwordRef;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = () => {
        navigation.navigate('MainRoutes')
    }
    const onSignupPress = () => {
        navigation.navigate('RegisterOption')
    }

    return(
        <Container style={{justifyContent: 'center', alignItems: 'center', padding: hp('3.5%')}}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.image}
            />
            <Text style={styles.text}>Do your part in supporting the community!</Text>
            <Text style={styles.heading}>Sign In</Text>
            <IconInput
                blur={false}
                icon={"mail"}
                placeholder={"Email Address"}
                value={email}
                onChange={text=>setEmail(text)}
                keyboard={'email-address'}
                onSubmitPress={()=>passwordRef.focus()}
            />
            <IconInput
                icon={"key"}
                pass
                placeholder={"Password"}
                value={password}
                onChange={text=>setPassword(text)}
                inputRef={ref=>passwordRef = ref}
            />
            <Button
                color={primary}
                text={"Sign In"}
                onPress={onLoginPress}
                style={{borderRadius: 0, marginVertical: hp('4%'), marginTop: hp('4%')}}
                textColor={black}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={styles.line}/>
                <Text>OR</Text>
                <View style={styles.line}/>
            </View>
            <Button
                image={require('../../assets/images/google.png')}
                text={"Sign in with Google"}
                onPress={onLoginPress}
                style={{borderRadius: 0, borderWidth: 1, borderColor: gray}}
                textColor={black}
            />
            <Button
                color={fbBlue}
                image={require('../../assets/images/facebook.png')}
                text={"Sign in with Facebook"}
                onPress={onLoginPress}
                style={{borderRadius: 0}}
            />
            <Text style={styles.text}>Don't have an account?</Text>
            <Text 
                onPress={onSignupPress}
                style={[styles.text,{fontFamily: bold, color: primary}]}
            >
                    Create account
            </Text>
        </Container>
    )
}

export default Login;

const styles = StyleSheet.create({
    image:{
        width: wp('50%'),
        height: hp('4.5%'),
        alignSelf: 'center',
        marginVertical:hp('2%')
    },
    text:{
        textAlign: 'center',
        fontFamily: regular,
        fontSize: hp('2.25%'),
        width: wp('50%'),
    },
    heading:{ 
        fontFamily: bold,
        alignSelf: 'flex-start',
        fontSize: hp('4%'),
        color: black,
        marginVertical: hp('2%')
    },
    line:{
        height: hp('0.25%'),
        width: wp('25%'),
        backgroundColor: gray
    }
})