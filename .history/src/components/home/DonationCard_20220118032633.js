import React from 'react';
import { 
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { Button } from '../common';


const DonationCard = ({image, onPress, text}) => {
    return(
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
            <View style={styles.row}>
                <Text style={styles.text}></Text>
                <Button 
                    color={primary}
                    text={"Donate"}
                    textColor={black}
                />
            </View>
        </View>
    )
}

export default DonationCard;

const styles = StyleSheet.create({
    container:{
        
    }
});
