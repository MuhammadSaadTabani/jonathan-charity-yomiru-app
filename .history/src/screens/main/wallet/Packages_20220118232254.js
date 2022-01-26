import React, { useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Container, Header } from '../../../components/common';
import NotificationCard from '../../../components/cards/NotificationCard';

const Notifications = ({navigation}) => {

    return(
        <Container>
            <TouchableOpacity>
                <Text>My Package</Text>
            </TouchableOpacity>
        </Container>
    )
}

export default Notifications