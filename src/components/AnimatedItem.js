import * as React from 'react';
import { Animated, Dimensions, Easing } from 'react-native';

const { width } = Dimensions.get('window');

export class AnimatedItem extends React.Component {
  constructor() {
    super();
    this.animatedVal = new Animated.Value(0);
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
    })
    return (
      <Animated.View style={{
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
      }}>
        {this.props.children}
      </Animated.View>
    )
  }
}
