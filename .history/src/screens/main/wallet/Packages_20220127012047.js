import React, { useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Container, Header } from '../../../components/common';
import NotificationCard from '../../../components/cards/NotificationCard';
import PackageCard from '../../../components/cards/PackageCard';

const Packages = ({navigation}) => {

    return(
        <Container>
            <PackageCard/>
        </Container>
    )
}

export default Packages