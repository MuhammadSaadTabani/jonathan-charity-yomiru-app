import React from 'react';
import { 
    Text,
    Image,
    View,
    StyleSheet,
} from 'react-native';

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

    },
    text:{

    }
})