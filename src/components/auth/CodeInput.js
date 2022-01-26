import React from 'react';
import { 
    Text,
    StyleSheet
 } from 'react-native';
 import {
    CodeField,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { dullBlack, primary, white } from '../../assets/colors';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CodeInput = ({value, setValue}) => {
    
    const ref = useBlurOnFulfill({value, cellCount: 6});

    return(
        <CodeField
            ref={ref}
            // {...otherProps}
            caretHidden={false}
            value={value}
            onChangeText={setValue}
            cellCount={6}
            rootStyle={styles.root}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            clearTextOnFocus
            renderCell={({index, symbol, isFocused}) => (
                <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    // onLayout={getCellOnLayoutHandler(index)}
                >
                    {symbol}
                </Text>
            )}
        />
    )
};

export default CodeInput;

const styles = StyleSheet.create({
    cell: {
        width: hp('5.5%'),
        height: hp('6.5'),
        textAlign: 'center',
        padding:hp('0.5%'),
        backgroundColor:dullBlack,
        fontSize:hp('4%'),
        borderWidth:1.5,
        borderColor:primary,
        borderRadius:hp('1%'),
        color:white
    },
    focusCell:{
        borderColor:white,
    },
    root: {
        width:hp('45%')
    },
})