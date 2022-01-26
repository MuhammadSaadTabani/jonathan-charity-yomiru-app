import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, darkGray, gray, lightGray, smoke } from '../../assets/colors';

const IconInput = ({style, inputStyle, onChange, value, iconColor, icon, placeholder, inputRef, onSubmitPress, blur,pass, keyboard, phone, ...rest}) => {
    
    const input = useRef(null);
    const [visible, setVisible]  = useState(true);
    
     return(
        <View style={[styles.inputRow,style]}>
            {phone &&
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {/* <Image style={styles.imageStyle} source={require('../../assets/images/pk.jpg')} /> */}
                    <TextInput
                        {...rest}
                        style={[styles.input,{flex:0}]}
                        editable={false}
                        placeholder={" +92"}
                        placeholderTextColor={black}
                    />
                </View>
            }
            <TextInput
                {...rest}
                blurOnSubmit={blur}
                onChangeText={onChange}
                value={value}
                style={[styles.input,inputStyle]}
                placeholder={placeholder}
                placeholderTextColor={darkGray}
                ref={inputRef}
                onSubmitEditing={onSubmitPress}
                secureTextEntry={pass ? visible : !visible}
                keyboardType={keyboard ? keyboard : "default"}
            />
            {pass
                ?
                value == ""
                    ?<Icon name={icon} size={22} color={iconColor ? iconColor : gray} />
                    :<Icon onPress={()=>setVisible(!visible)} name={visible ? 'eye' : 'eye-off'} size={22} color={iconColor ? iconColor : darkGray} />
                :
                icon &&
                <Icon name={icon} size={22} color={iconColor ? iconColor : darkGray} />
            }
        </View>
    )
}

export default IconInput

const styles = StyleSheet.create({
    inputRow:{
        flexDirection:"row",
        alignItems:'center',
        alignSelf:'center',
        paddingLeft:hp('1.5%'),
        paddingRight:hp('1.5%'),
        width:'100%',
        height:hp('6.5%'),
        borderWidth:1,
        borderColor: gray,
        // backgroundColor:lightGray,
        // borderRadius:hp('1%'),
        marginTop:hp('2.5%'),
    },
    input:{
        flex:1,
        fontSize:hp('2.25%'),
        color:black,
    },
    imageStyle:{
        height:hp('3.5%'),
        width:hp('5%'),
    }
})