import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Container, Header, Ava } from '../../../components/common'
import Avatar from '../../../components/profile/Avatar';

const Profile = ({navigation}) => {
    return(
        <Container>
            <Avatar
                image={require('../../../assets/images/person.jpg')}
            />
        </Container>
    )
}

export default Profile;