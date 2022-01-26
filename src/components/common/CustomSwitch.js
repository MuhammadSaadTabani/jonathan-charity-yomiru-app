import React from 'react';
import { 
    View,
    Text,
    Switch,
    StyleSheet,
} from 'react-native';
import { primary, white } from '../../assets/colors';
import { regular } from '../../assets/fonts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo'
import { useTheme } from '../../theme/ThemeContext';


const CustomSwitch = ({value, onValueChange, icon, label, style, buttonTextSyle}) => {
    const {colors} = useTheme();
    return(
        <View style={[styles.button,{marginTop:hp('1.5%'), backgroundColor:colors.background}, style]}>
            {icon && <Icon name={icon} size={20} color={colors.text} /> }
            <View style={{flexDirection:'row', justifyContent:'space-between', flex:1, alignItems:'center'}}>
                <Text style={[styles.buttonText, icon && {marginLeft:hp('2%')}, {color:colors.text}, buttonTextSyle]}>{label}</Text>
                <Switch 
                    thumbColor={primary}
                    trackColor={{ false: 'lightgray', true: primary }}
                    thumbColor={white}
                    ios_backgroundColor={primary}
                    value={value}
                    onValueChange={onValueChange}
                    style={{
                        transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }],
                    }}    
                />
            </View>
        </View>
    )
}

export default CustomSwitch;

const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:white,
        // padding:hp('2%'),
    },
    buttonText:{
        fontFamily:regular,
        fontSize:hp('2%'),
    },
})