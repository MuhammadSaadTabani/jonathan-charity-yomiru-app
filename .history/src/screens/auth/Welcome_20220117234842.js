import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native';
import Logo from '../../components/auth/Logo';

const Welcome = ({navigation}) => {
    return(
        <ImageBackground style={styles.container} source={require('../../assets/images/welcome.png')}>
            <Logo/>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Welcome;