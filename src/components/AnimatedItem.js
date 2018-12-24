import * as React from 'react';
import {
  Animated, Dimensions, Easing,
  PanResponder, TouchableOpacity, Text, View
} from 'react-native';

const { width } = Dimensions.get('window');

const THRESHOLD = width * 0.25;

export class AnimatedItem extends React.Component {
  constructor() {
    super();
    this.animatedVal = new Animated.Value(0);
    this.panAnimatedVal = new Animated.ValueXY({ x: 0, y: 0 });
    // this
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {return false},
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const {dx, dy} = gestureState;
        const touchThreshold = 20;
        return (Math.abs(dx) > touchThreshold) || (Math.abs(dy) > touchThreshold);
      },
      onMoveShouldSetPanResponderCapture: () => false,
      onPanResponderTerminationRequest: () => true,
      onShouldBlockNativeResponder: () => false,
      onStartShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {
        // alert('dfdsf')
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        this.panAnimatedVal.setValue({
          y: 0,
          x: gestureState.dx,
        })
      },
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        if(gestureState.dx < -THRESHOLD) {
          this.swipItem();
        } else {
          this.resetItem();
        }
      },
    })
  }
  swipItem = () => {
    Animated.spring(this.panAnimatedVal, {
      toValue: {
        y: 0,
        x: -width/2
      },
      duration: 250
    }).start(() => {
      // end
    });
  }
  resetItem = () => {
    Animated.spring(this.panAnimatedVal, {
      toValue: {
        y: 0,
        x: 0
      },
      duration: 250
    }).start();
  }
  componentDidMount() {
    this.animate();
  }
  animate = () => {
    Animated.spring(this.animatedVal, {
      toValue: 1,
      duration: 350,
      transition: Easing.inOut(Easing.in),
      delay: this.props.delay,
      // useNativeDriver: true,
    }).start();
  }
  render() {
    const translateX = this.animatedVal.interpolate({
      inputRange: [0, 1],
      outputRange: [-width, 0]
    });
    // console.log(this.panAnimatedVal.getLayout())
    const panLayout = this.panAnimatedVal.getLayout()
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={[
            {
              opacity: this.animatedVal,
              transform: [
                {
                  translateX
                },
                // {
                //   scale: this.animatedVal,
                // },
                // {perspective: 1000}
              ]
            }]}>
          <Animated.View
            style={[
              panLayout,
              {
                zIndex: 2,
                backgroundColor: 'white'
              }
            ]}
            {...this._panResponder.panHandlers}
          >
            {this.props.children}
          </Animated.View>
        </Animated.View>
        <Animated.View style={{
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 1,
          backgroundColor: '#f00',
          width: Animated.multiply(panLayout.left, -1),
          height: '100%',
          overflow: 'hidden',
        }}>
          <TouchableOpacity
            style={{
              flex: 1, height: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text numberOfLines={1}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }
}
