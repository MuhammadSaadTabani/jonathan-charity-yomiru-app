import React, { useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Container, Header } from '../../../components/common';
import NotificationCard from '../../../components/cards/NotificationCard';
import PackageCard from '../../../components/cards/PackageCard';
import SimpleHeader from '../../../components/common/Header';

const Packages = ({navigation}) => {

    return(
        <Container>
            <SimpleHeader
                backIcon
                heading={"Choose a Plan"}
            />
            <PackageCard/>
        </Container>
    )
}

export default Packages