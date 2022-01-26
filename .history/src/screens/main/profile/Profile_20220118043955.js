import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, primary } from '../../../assets/colors';
import { bold } from '../../../assets/fonts';
import { Button, Container } from '../../../components/common'
import Avatar from '../../../components/profile/Avatar';

const Profile = ({navigation}) => {

    const onLogoutPress = () => {
        navigation.navigate('AuthRoutes')
    }
    return(
        <Container>
            <Avatar
                image={require('../../../assets/images/person.jpg')}
            />
            <Text style={styles.name}>Jason Parker</Text>
            <Button
                text={"Logout"}
                color={primary}
                textColor={black}
                onPress={onLogoutPress}
                style={{width:'40$'}}
            />
        </Container>
    )
}

export default Profile;

const styles = StyleSheet.create({
    name:{
        fontSize: hp('3.5%'),
        fontFamily: bold,
        color: black,
        textAlign: 'center',
        marginVertical: hp('2%')
    }
})