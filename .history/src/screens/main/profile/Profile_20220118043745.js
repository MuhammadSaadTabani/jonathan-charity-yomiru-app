import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black } from '../../../assets/colors';
import { bold } from '../../../assets/fonts';
import { Container } from '../../../components/common'
import Avatar from '../../../components/profile/Avatar';

const Profile = ({navigation}) => {
    return(
        <Container>
            <Avatar
                image={require('../../../assets/images/person.jpg')}
            />
            <Text style={styles.name}>Jason Parker</Text>
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