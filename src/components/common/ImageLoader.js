import React,{useState} from 'react';
import {
    View,
    Image
} from 'react-native';
import LottieView from 'lottie-react-native';

const ImageLoader = (props) => {
    // alert(props.source.uri)
    const [isLoaded,setIsLoaded] = useState(false);
    return(
        <View>
            {props.source
                ?
                <>
                {!isLoaded && (
                    props.profile
                        ?
                        <Image style={[props.style,{position:'absolute'}]}  source={require('../../assets/images/profile.png')}/>
                        :
                        <LottieView style={[props.style,{position:'absolute'}]} source={require('../../assets/animation/loader.json')} autoPlay loop />
                    )
                }
                <Image
                    style={props.style} 
                    source={props.source}
                    onLoad={()=>setIsLoaded(true)}
                />
                </>
                :
                <Image style={[props.style]}  source={require('../../assets/images/profile.png')}/>
            }
            
        </View>
    )
}
export default ImageLoader;