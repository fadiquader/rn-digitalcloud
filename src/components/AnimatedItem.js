import * as React from 'react';
import {
  Animated, Dimensions, Easing, StyleSheet,
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
    const panLayout = this.panAnimatedVal.getLayout();
    const maxX = width / 2;
    const animatedWidth = Animated.multiply(panLayout.left, -1).interpolate({
      inputRange: [-width, 0, maxX],
      outputRange: [0, 0, maxX],
      extrapolateRight: 'clamp',
    });
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Animated.View style={{
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 1,
          backgroundColor: '#f00',
          width: animatedWidth,
          // flex: 1,
          height: '100%',
          overflow: 'hidden',
        }}>
          <TouchableOpacity
            onPress={() => alert('Delete Item')}
            style={{
              flex: 1, height: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text numberOfLines={1}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            {
              // position: 'absolute',
              // right: 0,
              // top: 0,
              // zIndex: 2,
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // As of RN 0.29 flex: 1 is causing all rows to be the same height
    // flex: 1
  },
  hidden: {
    zIndex: 1,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

