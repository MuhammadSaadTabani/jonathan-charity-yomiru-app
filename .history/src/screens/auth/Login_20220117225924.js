import React, { useState } from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { primaryPurple } from '../../assets/colors';
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
        <Container style={{justifyContent: 'center', alignItems: 'center'}}>
            
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.image}
            />
            <Text style={styles.text}>Do your part in supporting the community!</Text>
            <IconInput
                blur={false}
                icon={"mail"}
                placeholder={"Email Address"}
                value={email}
                onChange={text=>setEmail(text)}
                keyboard={'email-address'}
                style={{width:'90%', marginTop: hp('5%')}}
                onSubmitPress={()=>passwordRef.focus()}
            />
            <IconInput
                icon={"key"}
                pass
                placeholder={"Password"}
                value={password}
                onChange={text=>setPassword(text)}
                style={{width:'90%'}}
                inputRef={ref=>passwordRef = ref}
            />
            <Button
                color={'blue'}
                text={"Login"}
                onPress={onLoginPress}
                style={{width: '90%'}}
            />
            <Text style={styles.text}>Don't have an account?</Text>
            <Text 
                onPress={onSignupPress}
                style={[styles.text,{fontFamily: bold, color: primaryPurple}]}
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
        // marginTop: hp('3%'),
        fontFamily: regular,
        fontSize: hp('2.5%'),
        width: wp('55%'),
        backgroundColor:'red'
    }
})