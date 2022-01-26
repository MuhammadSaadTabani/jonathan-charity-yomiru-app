

import React, { useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Container } from '../../../components/common';

const Winner = ({navigation}) => {

    return(
        <Container>
            <TouchableOpacity>
                <Text style={{size: 25}}>My Package</Text>
            </TouchableOpacity>           
        </Container>
    )
}

export default Winner
