import React from 'react';
import { 
    Text,
    Image,
    View,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const WinnerCard = ({winner}) => {
    return(
        <View style={styles.container}>
            <Image source={winner.image} style={styles.image}/>
            <Text style={styles.text}>{winner.name}</Text>
        </View>
    )
}

export default WinnerCard;

const styles = StyleSheet.create({
    container: {

    },
    image: {
        height: hp('10%'),
        width: hp('10%'),
        borderRadius: 100,
    },
    text:{

    }
})