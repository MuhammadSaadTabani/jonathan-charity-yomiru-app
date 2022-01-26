import React from 'react';
import CustomToast, {BaseToast} from 'react-native-toast-message';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, primaryPurple, white } from '../../assets/colors';
import { regular } from '../../assets/fonts';
// import { useTheme } from '../../theme/ThemeContext';


 
const SnackBar = ({position}) => {

    // const {colors} = useTheme();
    
    const toastConfig = {
        success: ({ text1, text2, props, ...rest }) => (
          <BaseToast
            {...rest}
            style={[{ 
                height: text2 ? hp('8%') : hp('6.5%'),
                width:"85%",
                borderLeftColor: primaryPurple,
                marginLeft:hp('1%'),
                marginRight:hp('1%'),
                marginBottom:hp('0%'),
                marginTop:position=="top" ? hp('2.5%') : hp('0%'),
                borderRadius:hp('1%'),
                backgroundColor:white,
            }, props.style]}
            contentContainerStyle={{ paddingHorizontal: hp('2%') }}
            text1Style={[{
                color:black,
                fontFamily:regular,
                fontSize:hp('2%')
            },props.text1Style]}
            text2Style={[{
                color:black,
                fontFamily:regular,
                fontSize:hp('1.8%')
            },props.text2Style]}
            text1={text1}
            text2={text2}
            // trailingIcon={props.icon && null}
            onTrailingIconPress={()=>CustomToast.hide()}

          />
        )
    };
      
    return(
        <CustomToast 
            config={toastConfig}
            position={position}
            ref={(ref) => CustomToast.setRef(ref)}
            visibilityTime={1000}
        /> 
    )
}
export default SnackBar;