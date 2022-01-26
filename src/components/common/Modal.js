import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ModalComp extends React.PureComponent{
    // constructor(props){
    //     // super(props,{scrollOffset: null,});
    //     this.state = { 
    //         // showModal: false,
    //     }
    //     // this.scrollViewRef = React.createRef();
    // }
    // handleOnScroll = event => {
    //     this.setState({
    //       scrollOffset: event.nativeEvent.contentOffset.y,
    //     });
    //   };
    // handleScrollTo = p => {
    //     if(this.scrollViewRef.current) {
    //         this.scrollViewRef.current.scrollTo(p);
    //     }
    // };
    render(){
        return(
            <Modal
                onBackdropPress={this.props.onBackPress}
                avoidKeyboard
                onBackButtonPress={this.props.onBackPress}
                testID={'modal'}
                isVisible={this.props.isVisible}
                onSwipeComplete={this.props.onBackPress}
                swipeDirection={['down']}
                // scrollTo={this.handleScrollTo}
                // scrollOffset={this.state.scrollOffset}
                propagateSwipe={true}
                style={styles.modal}
                backdropTransitionOutTiming={0}
                animationIn={'fadeInUp'}
                animationOut={'fadeOutDown'}
                statusBarTranslucent
            >
                <View style={[styles.scrollableModal,this.props.style]}>
                    {/* <ScrollView
                        ref={this.scrollViewRef}
                        onScroll={this.handleOnScroll}
                        scrollEventThrottle={16}
                    > */}
                        {this.props.children}
                    {/* </ScrollView> */}
                </View>
            </Modal>
        )
    }
    
}
export default ModalComp

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        flex:1
    },
    scrollableModal: {
        height: hp('35%'),
        backgroundColor:'white',
        borderTopLeftRadius:hp('2%'),
        borderTopRightRadius:hp('2%'),
        paddingLeft:hp('2.5%'),
        paddingRight:hp('2.5%'),
        paddingTop:hp('2.5%')
    },
})