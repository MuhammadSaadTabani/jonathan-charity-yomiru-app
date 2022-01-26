import React, { useState } from 'react';
import { 
    View,
    Text,
} from 'react-native';
import { Container, Header } from '../../../components/common';
import NotificationCard from '../../../components/cards/NotificationCard';

const Notifications = ({navigation}) => {

    return(
        <Container>
            <Header
                backIcon
                heading={"Notifications"}
            />
            <NotificationCard
                image={require('../../../assets/images/user1.jpg')}
                text={"John Charles requested you to work on his application"}
                onPress={null}
            />
            <NotificationCard
                image={require('../../../assets/images/user1.jpg')}
                text={"John Charles requested you to work on his application"}
                onPress={null}
            />
            <NotificationCard
                image={require('../../../assets/images/user1.jpg')}
                text={"John Charles requested you to work on his application"}
                onPress={null}
            />
            <NotificationCard
                image={require('../../../assets/images/user1.jpg')}
                text={"John Charles requested you to work on his application"}
                onPress={null}
            />
        </Container>
    )
}

export default Notifications