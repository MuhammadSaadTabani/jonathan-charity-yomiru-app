import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { black, lightGray, primaryPurple, white } from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useTheme } from '../../theme/ThemeContext';
import { bold } from '../../assets/fonts';
import { IconInput } from '.';


const SimpleHeader = ({heading, backIcon, icon1, iconColor, icon1Press, icon2, icon2Press, search, onSearchChange, onSearchSubmit, style}) => {
    const navigation = useNavigation();
    // const {colors} = useTheme();
    const len = heading ? heading.length : 0;
    return(
        <View style={[styles.container, style]}>
            <View style={{flex:2.5, flexDirection:'row', justifyContent:'flex-start', alignItems:'center',}}>
                {backIcon
                    &&
                    <Ionicons
                        name={'arrow-back'}
                        size={22}
                        color={iconColor ? iconColor : white}
                        onPress={()=>navigation.goBack()}
                        style={{marginLeft:hp('3%')}}
                    /> 
                }
                {typeof search !== "undefined"
                    &&
                    <IconInput
                        icon="search"
                        iconColor={primaryPurple}
                        inputStyle={{height: hp('6%')}}
                        placeholder={"Search"}
                        value={search}
                        onChange={onSearchChange}
                        onSubmitPress={onSearchSubmit}
                        style={styles.input}
                    />
                }
                <Text style={[styles.heading,{color:white}, backIcon && {marginLeft: hp('1%')}]}>{len > 22 ? heading.slice(0,22)+"..." : heading}</Text>
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-evenly'}}>
                {icon1
                    &&
                    <Ionicons
                        name={icon1}
                        size={20}
                        color={iconColor ? iconColor : white}
                        onPress={icon1Press}
                        style={{marginLeft:hp('0%')}}
                    />
                }
                {icon2 &&
                    <Ionicons
                        name={icon2}
                        size={22}
                        color={iconColor ? iconColor : white }
                        onPress={icon2Press}
                        // style={{marginLeft:hp('2%')}}
                    />
                }
            </View>
            
        </View>
    )
}

export default SimpleHeader;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: primaryPurple,
        borderBottomEndRadius: hp('2%'),
        borderBottomStartRadius: hp('2%'),
        alignItems:'center',
        paddingVertical:hp('2%'),
        // marginBottom:hp('1.5%')
    },
    heading:{
        fontSize:hp('3%'),
        fontFamily:bold,
        color:lightGray,
        marginLeft: hp('3%')
    },
    input:{
        width: '90%',
        height:hp('4.5%'),
        borderRadius: hp('2.5%'),
        marginTop:0,
        marginLeft: hp('2%')
    }
})