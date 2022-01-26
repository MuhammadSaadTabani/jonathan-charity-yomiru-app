import React from 'react';
import { 
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { Button } from '../common';
import { primary, black } from '../../assets/colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


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
        borderTopEndRadius: hp('1%'),
        borderTopStartRadius: hp('1%'),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image:{
        height: hp('25%'),
        borderTopEndRadius: hp('1%'),
        borderTopStartRadius: hp('1%')
    },
    row:{

    },
    text:{

    }
});
