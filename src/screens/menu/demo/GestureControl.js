import React, {Component} from 'react';
import {StyleSheet, Animated, View, TouchableOpacity, Text} from 'react-native';

import ModelView from 'react-native-gl-model-view';
const AnimatedModelView = Animated.createAnimatedComponent(ModelView);

export default class GestureControl extends Component {
  constructor() {
    super();
    this.state = {
      zoom: -10,
      rotateX: new Animated.Value(-90),
      rotateZ: new Animated.Value(0),
      translateZ: new Animated.Value(-10),
      fromXY: undefined,
      valueXY: undefined,
      valueZ: undefined,
    };
  }

  zoom = action => {
    let {zoom, translateZ} = this.state;

    this.state.zoom += action;

    Animated.timing(translateZ, {
      toValue: zoom,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  onMoveEnd = () => {
    this.setState({
      fromXY: undefined,
    });
  };

  onMove = e => {
    let {pageX, pageY} = e.nativeEvent,
      {rotateX, rotateZ, fromXY, valueXY} = this.state;
    if (!this.state.fromXY) {
      this.setState({
        fromXY: [pageX, pageY],
        valueXY: [rotateZ.__getValue(), rotateX.__getValue()],
      });
    } else {
      rotateZ.setValue(valueXY[0] + (pageX - fromXY[0]) / 2);
      rotateX.setValue(valueXY[1] + (pageY - fromXY[1]) / 2);
    }
  };

  renderButton(label, method) {
    return (
      <TouchableOpacity onPress={method}>
        <Text style={styles.button}>{label}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    let {rotateZ, rotateX, fromXY, translateZ} = this.state;
    const modelURI = 'chair2.obj';
    return (
      <View style={{flex: 1}}>
        <AnimatedModelView
          model={{uri: modelURI}}
          texture={{uri: 'chair2.png'}}
          onStartShouldSetResponder={() => true}
          onResponderRelease={this.onMoveEnd}
          onResponderMove={this.onMove}
          animate={!!fromXY}
          tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
          scale={0.01}
          rotateX={rotateX}
          rotateZ={rotateZ}
          translateZ={translateZ}
          style={styles.container}
        />

        <Animated.View style={[styles.buttons]}>
          {this.renderButton('zoom in', this.zoom.bind(this, 1))}
          {this.renderButton('zoom out', this.zoom.bind(this, -1))}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  buttons: {
    height: 50,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
