import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Container } from '../../../components/common'
import Avatar from '../../../components/profile/Avatar';

export default ({navigation}) => {
    return(
        <Container>
            <Avatar
                image={require('../../../assets/images/person.jpg')}
            />
        </Container>
    )
}
