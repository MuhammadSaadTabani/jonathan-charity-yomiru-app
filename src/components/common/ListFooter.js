import React from 'react'
import { 
    View,
    ActivityIndicator
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary } from '../../assets/colors';


const ListFooter = ({loading}) => {
    if(loading){
        return <ActivityIndicator style={{ padding: 20 }} size="large" color={primary} />
    }else{
        return <View style={{height:hp('12%')}}/>
    }
}

export default ListFooter;