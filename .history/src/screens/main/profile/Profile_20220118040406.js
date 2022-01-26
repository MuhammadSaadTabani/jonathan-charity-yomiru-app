import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Container, Header } from '../../../components/common'

const Settings = ({navigation}) => {
    return(
        <Container>
            <Header
                heading={"Settings"}
            />
        </Container>
    )
}

export default Settings;