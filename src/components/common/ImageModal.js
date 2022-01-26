import React, { useEffect } from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/AntDesign';

// var urlImages = [];

const ImageModal = ({visible,close, images}) => {
    // useEffect(()=>{
    //     urlImages=[]
    //     Object.values(images).map(image=>urlImages.push({url:image}))
    // },[]);
    return(
        <Modal 
            onRequestClose={close}
            visible={visible}
            transparent={true}
            statusBarTranslucent
        >
            <ImageViewer 
                enablePreload
                enableImageZoom
                onLongPress={close}
                renderHeader={()=>
                    <TouchableOpacity style={{top: 20, position: "absolute", zIndex: 9999,alignSelf:'flex-end'}} onPress={close}>
                        <Icon name={"close"} size={24} style={{margin:20}} color="white"/>
                    </TouchableOpacity>
                }
                onSwipeDown={close}
                enableSwipeDown
                imageUrls={images}
            />
        </Modal>
    )
}
export default ImageModal;